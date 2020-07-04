import React, {
  FunctionComponent,
  memo,
  RefObject,
  useEffect,
  useRef,
  useState,
  Fragment,
} from 'react'

import { gsap } from 'gsap'
import { Draggable } from 'gsap/Draggable'

// @ts-ignore
import { InertiaPlugin } from '../../../../gsap-bonus/InertiaPlugin'

import { TimelineProps } from '../types'
import { iconPaths } from './iconPaths'
import { SvgIcon } from '../SvgIcon'
import { PopLines } from './PopLines'
import { SpeechBubble } from './SpeechBubble'

const ICON_SIZE = 32

const MULTIPLIER = 4.8
const SPACER = 60

const DOT_SIZE = 10

const EVENT_DURATION = 0.8
const EVENT_EASE = 'power1'

export const Timeline: FunctionComponent<TimelineProps> = memo(
  ({
    onAnimationComplete,
    primaryColor,
    secondaryColor,
    icons,
    showSpeechBubble,
    scale,
    iconSet,
  }: TimelineProps) => {
    const iconsToUse = icons
      ? iconPaths[iconSet]
          .map((icon) => icon)
          .filter((icon) => icons.includes(icon.name))
          .sort((a, b) => icons.indexOf(a.name) - icons.indexOf(b.name))
      : iconPaths[iconSet]

    const MIN_DRAG_X = -(iconsToUse.length - 1) * SPACER
    const VIEWBOX_WIDTH = SPACER * iconsToUse.length - ICON_SIZE

    const VIEWBOX_HEIGHT = showSpeechBubble ? 290 : 120
    const START_Y = showSpeechBubble ? 215 : 45

    const SIZE_WIDTH = VIEWBOX_WIDTH * scale
    const SIZE_HEIGHT = VIEWBOX_HEIGHT * scale

    if (iconsToUse.length < 3)
      throw new Error('You must have at lease three icons')

    const svgIconBubblesRef = useRef(null)
    const dotContainerRef = useRef(null)
    const iconContainerRef = useRef(null)

    const iconRefs: RefObject<SVGPathElement>[] = []
    const dotRefs: RefObject<SVGCircleElement>[] = []

    const [isMounted, setIsMounted] = useState(false)
    const [isAnimating, setIsAnimating] = useState(true)

    const [posX, setPosX] = useState(0)
    const [snapArray, setSnapArray] = useState([])
    const [mtl, setMtl] = useState({
      timeline: gsap.timeline({ paused: true }),
    })
    const [currentReaction, setCurrentReaction] = useState({
      index: 0,
      name: '',
    })

    // This is a hacky work-around because posX gets updated after we need it...
    // resulting in handleAnimationComplete returning the wrong icon index / name
    let _x = 0

    const handleDragSlider = () => {
      if (isMounted) {
        setPosX(Number(gsap.getProperty(dotContainerRef.current, 'x')))
        _x = Number(gsap.getProperty(dotContainerRef.current, 'x'))
      }
    }

    const handleAnimationStart = () => {
      if (isMounted) {
        setIsAnimating(true)
        setCurrentReaction({ index: null, name: '' })
        onAnimationComplete('')
      }
    }

    const handleAnimationComplete = () => {
      const index = Math.abs(_x / SPACER)
      const name = iconsToUse[Math.abs(index)].name
      if (isMounted) {
        setIsAnimating(false)
        setCurrentReaction({ index: index, name: name })
        onAnimationComplete(name)
      }
    }

    const handleAnimation = (index: number, duration: number, ease: string) => {
      if (!isAnimating) {
        gsap.to([dotContainerRef.current, iconContainerRef.current], {
          duration: duration,
          x: snapArray[index],
          onStart: handleAnimationStart,
          onUpdate: handleDragSlider,
          onComplete: handleAnimationComplete,
          ease: ease,
        })
      }
    }

    const handleKeydown = (event: KeyboardEvent) => {
      const { key } = event
      if (
        (key === 'ArrowRight' &&
          currentReaction.index < iconsToUse.length - 1) ||
        (key === 'ArrowUp' && currentReaction.index < iconsToUse.length - 1)
      ) {
        handleAnimation(
          (currentReaction.index += 1),
          EVENT_DURATION,
          EVENT_EASE
        )
      }

      if (key === 'Home' && currentReaction.index > 0) {
        handleAnimation(0, EVENT_DURATION, EVENT_EASE)
      }

      if (
        (key === 'ArrowLeft' && currentReaction.index > 0) ||
        (key === 'ArrowDown' && currentReaction.index > 0)
      ) {
        handleAnimation(
          (currentReaction.index -= 1),
          EVENT_DURATION,
          EVENT_EASE
        )
      }

      if (key === 'End' && currentReaction.index < iconsToUse.length - 1) {
        handleAnimation(iconsToUse.length - 1, EVENT_DURATION, EVENT_EASE)
      }
    }

    useEffect(() => {
      gsap.registerPlugin(Draggable, InertiaPlugin)

      iconsToUse.map((_, index: number) => {
        setSnapArray((snapArray) => [...snapArray, -index * SPACER])

        gsap.set(iconRefs[index], {
          transformOrigin: '50% 50%',
          scale: 0,
        })

        setMtl({
          timeline: (mtl.timeline as any).add(
            gsap

              .timeline()
              .to(dotRefs[index], {
                duration: 1,
                attr: {
                  r: DOT_SIZE * MULTIPLIER,
                },
                ease: 'linear',
              })
              .to(
                iconRefs[index],
                {
                  duration: 1,
                  alpha: 1,
                  scale: 2,
                  ease: 'linear',
                },
                '-=1'
              )
              .to(dotRefs[index], {
                duration: 1,
                attr: {
                  r: DOT_SIZE,
                },
                ease: 'linear',
              })
              .to(
                iconRefs[index],
                {
                  duration: 1,
                  alpha: 0,
                  scale: 0,
                  ease: 'linear',
                },
                '-=1'
              ),
            index / 2
          ),
        })
      })

      setIsMounted(true)
      setIsAnimating(false)
    }, [])

    useEffect(() => {
      const dragInstance = Draggable.create(dotContainerRef.current, {
        type: 'x',
        bounds: {
          minX: MIN_DRAG_X,
          maxX: 0,
          minY: 0,
          maxY: 0,
        },
        onStart: handleAnimationStart,
        onDrag: handleDragSlider,
        onDragStart: handleAnimationStart,
        onThrowUpdate: handleDragSlider,
        onThrowComplete: handleAnimationComplete,
        inertia: true,
        minDuration: 1,
        snap: snapArray,
        overshootTolerance: 0,
        dragClickables: true,
      })[0].disable()

      if (isMounted) {
        dragInstance.enable()
        handleAnimation(
          Math.floor(iconsToUse.length / 2),
          2,
          'elastic(1, 0.88)'
        )
      }
    }, [isMounted])

    useEffect(() => {
      if (isMounted) {
        gsap.to(mtl.timeline, {
          duration: 0.5,
          time: (posX / MIN_DRAG_X) * (mtl.timeline.duration() - 2) + 1,
          ease: 'elastic(2, 0.75)',
        })
        gsap.set(iconContainerRef.current, {
          x: posX,
        })
      }
    }, [posX])

    useEffect(() => {
      return () => {
        setIsMounted(false)
      }
    }, [])

    return (
      <div
        className="svg-timeline"
        onKeyDown={(event: any) => handleKeydown(event)}
        style={{
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
          margin: 'auto',
          position: 'relative',
          overflow: 'hidden',
          width: '100%',
        }}
        role="slider"
        aria-valuemin={0}
        aria-valuemax={iconsToUse.length - 1}
        aria-valuenow={currentReaction.index}
        aria-valuetext={currentReaction.name}
        tabIndex={0}
      >
        <div
          style={{
            display: 'flex',
            margin: 'auto',
          }}
        >
          <svg
            ref={svgIconBubblesRef as RefObject<any>}
            width={SIZE_WIDTH}
            height={SIZE_HEIGHT}
            viewBox={`0,0, ${VIEWBOX_WIDTH},${VIEWBOX_HEIGHT}`}
            style={{
              minWidth: 280,
            }}
          >
            <defs>
              <filter id="goo" colorInterpolationFilters="sRGB">
                <feGaussianBlur
                  in="SourceGraphic"
                  stdDeviation="8"
                  result="blur"
                />
                <feColorMatrix
                  in="blur"
                  mode="matrix"
                  values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 31 -12"
                  result="cm"
                />
              </filter>
            </defs>
            {showSpeechBubble && isMounted && (
              <Fragment>
                <PopLines
                  viewBoxWidth={VIEWBOX_WIDTH}
                  isAnimating={isAnimating}
                  currentReaction={currentReaction.name}
                  primaryColor={primaryColor}
                />
                <SpeechBubble
                  viewBoxWidth={VIEWBOX_WIDTH}
                  isAnimating={isAnimating}
                  currentReaction={currentReaction.name}
                  primaryColor={primaryColor}
                  secondaryColor={secondaryColor}
                />
              </Fragment>
            )}

            <g transform={`matrix(1,0,0,1,${VIEWBOX_WIDTH / 2} ${START_Y})`}>
              <g
                ref={dotContainerRef as RefObject<SVGSVGElement>}
                filter="url(#goo)"
                style={{
                  cursor: isAnimating ? 'not-allowed' : 'move',
                  pointerEvents: isAnimating ? 'none' : 'initial',
                }}
              >
                <rect
                  width={VIEWBOX_WIDTH}
                  transform={`matrix(1,0,0,1,-${DOT_SIZE * 2},-${
                    ICON_SIZE * 2
                  })`}
                  style={{
                    fill: 'rgba(0, 0, 0, 0)',
                    height: '100%',
                  }}
                />
                {iconsToUse.map((icon: { name: string }, index: number) => {
                  const { name } = icon
                  return (
                    <circle
                      ref={(ref) => {
                        dotRefs.push(ref as any)
                      }}
                      key={index}
                      className="reaction-dot"
                      cx={index * SPACER}
                      cy={ICON_SIZE / 2}
                      r={DOT_SIZE}
                      fill={primaryColor}
                      id={`dot-${name}-${index}`}
                      onClick={() => {
                        index !== currentReaction.index &&
                          handleAnimation(index, EVENT_DURATION, EVENT_EASE)
                      }}
                      style={{
                        cursor: isAnimating
                          ? 'not-allowed'
                          : currentReaction.index === index
                          ? 'move'
                          : 'pointer',
                      }}
                    />
                  )
                })}
              </g>
              <g ref={iconContainerRef as RefObject<SVGSVGElement>}>
                {iconsToUse.map(
                  (icon: { name: string; path: string }, index: number) => {
                    const { name, path } = icon
                    return (
                      <path
                        ref={(ref) => {
                          iconRefs.push(ref as any)
                        }}
                        key={index}
                        className="reaction-icon"
                        fill={secondaryColor}
                        id={`icon-${name}-${index}`}
                        data-index={index}
                        d={path}
                        opacity={0}
                        transform={`matrix(1,0,0,1,${
                          index * SPACER - ICON_SIZE / 2
                        },0)`}
                        style={{
                          pointerEvents: 'none',
                        }}
                      />
                    )
                  }
                )}
              </g>
            </g>
          </svg>
        </div>
      </div>
    )
  }
)

Timeline.displayName = 'Timeline'
