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
import { InertiaPlugin } from 'gsap/InertiaPlugin'

import { iconPaths } from './iconPaths'

import { PopLines } from './PopLines'
import { SpeechBubble } from './SpeechBubble'

const ICON_SIZE = 32

const MULTIPLIER = 4.8
const SPACER = 60

const DOT_SIZE = 10

const MIN_DRAG_X = -(iconPaths.length - 1) * SPACER
const VIEWBOX_WIDTH = SPACER * iconPaths.length

interface SvgProps {
  /** Animation callback passes current reaction */
  onAnimationComplete: (reaction: string) => void
  /** The color of the dots, speech bubble background and speech bubble text and pop lines */
  primaryColor?: string
  /** The color of the reaction icons and speech bubble background */
  secondaryColor?: string
}

export const Svg: FunctionComponent<SvgProps> = memo(
  ({ onAnimationComplete, primaryColor, secondaryColor }: SvgProps) => {
    const svgIconBubblesRef = useRef(null)
    const dotContainerRef = useRef(null)
    const iconContainerRef = useRef(null)

    const iconRefs: RefObject<SVGPathElement>[] = []
    const dotRefs: RefObject<SVGCircleElement>[] = []

    const [isMounted, setIsMounted] = useState(false)
    const [animationState, setAnimationState] = useState(false)
    const [posX, setPosX] = useState(0)
    const [snapArray, setSnapArray] = useState([])
    const [mtl, setMtl] = useState({
      timeline: gsap.timeline({ paused: true }),
    })
    const [currentReaction, setCurrentReaction] = useState('')

    // This is a hacky work-around because posX gets updated after we need it...
    // resulting in landed returning the wrong icon name
    let _x = 0

    const handleDragSlider = () => {
      setPosX(Number(gsap.getProperty(dotContainerRef.current, 'x')))
      _x = Number(gsap.getProperty(dotContainerRef.current, 'x'))
    }

    const handleAnimationStart = () => {
      setAnimationState(true)
      setCurrentReaction('')
      onAnimationComplete('')
    }

    const handleAnimationComplete = () => {
      const landed = Math.ceil(_x / SPACER)
      setAnimationState(false)
      setCurrentReaction(iconPaths[Math.abs(landed)].name)
      onAnimationComplete(iconPaths[Math.abs(landed)].name)
    }

    const handleClick = (index: number) => {
      gsap.to([dotContainerRef.current, iconContainerRef.current], {
        duration: 0.8,
        x: snapArray[index],
        onUpdate: handleDragSlider,
        onComplete: handleAnimationComplete,
        ease: 'power1',
      })
    }

    useEffect(() => {
      gsap.registerPlugin(Draggable, InertiaPlugin)
      gsap.set(svgIconBubblesRef.current, {
        visibility: 'visible',
      })

      iconPaths.map((_, index: number) => {
        setSnapArray((snapArray) => [...snapArray, -index * SPACER])
        //

        gsap.set(iconRefs[index], {
          transformOrigin: '50% 50%',
          scale: 0,
        })
        //
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
      //

      gsap.to([dotContainerRef.current, iconContainerRef.current], 2, {
        x: -(6 * SPACER),
        onUpdate: handleDragSlider,
        onComplete: () => {
          handleAnimationComplete()
          setIsMounted(true)
        },
        ease: 'elastic(1, 0.85)',
      })
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
      }
    }, [isMounted])

    useEffect(() => {
      gsap.to(mtl.timeline, {
        duration: 0.5,
        time: (posX / MIN_DRAG_X) * (mtl.timeline.duration() - 2) + 1,
        ease: 'elastic(2, 0.75)',
      })

      gsap.set(iconContainerRef.current, {
        x: posX,
      })
    }, [posX])

    return (
      <Fragment>
        <div
          style={{
            bottom: 0,
            position: 'absolute',
            height: 270,
            width: VIEWBOX_WIDTH / 2,
            pointerEvents: 'none',
          }}
        >
          <div>
            <svg
              width={`${VIEWBOX_WIDTH / 2}`}
              height={270}
              viewBox={`0 0 ${VIEWBOX_WIDTH / 2} 200`}
            >
              <PopLines
                animationState={animationState}
                primaryColor={primaryColor}
              />
              <SpeechBubble
                currentReaction={currentReaction}
                primaryColor={primaryColor}
                secondaryColor={secondaryColor}
              />
            </svg>
          </div>
        </div>
        <div
          style={{
            position: 'relative',
          }}
        >
          <svg
            ref={svgIconBubblesRef as RefObject<any>}
            className="svg-icon-bubbles"
            width={VIEWBOX_WIDTH}
            height="100%"
            viewBox={`0,0, ${VIEWBOX_WIDTH},140`}
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
            <g
              transform={`matrix(1,0,0,1,${VIEWBOX_WIDTH / 2},${
                ICON_SIZE * 2
              })`}
            >
              <g ref={dotContainerRef as RefObject<any>} filter="url(#goo)">
                <rect
                  width={VIEWBOX_WIDTH}
                  transform={`matrix(1,0,0,1,-${DOT_SIZE * 2},-${
                    ICON_SIZE * 2
                  })`}
                  style={{
                    cursor: 'move',
                    fill: 'rgba(0, 0, 0, 0)',
                    height: '100%',
                  }}
                />
                {iconPaths.map((icon: { name: string }, index: number) => {
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
                        handleClick(index)
                        handleAnimationStart()
                      }}
                      style={{
                        cursor: 'pointer',
                      }}
                    />
                  )
                })}
              </g>
              <g ref={iconContainerRef as RefObject<any>}>
                {iconPaths.map(
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
      </Fragment>
    )
  }
)

Svg.displayName = 'Svg'