import React, { FunctionComponent, RefObject, useRef, useEffect } from 'react'

import { gsap, TweenMax, TimelineMax, Linear, Elastic, Power1 } from 'gsap'
import { Draggable } from 'gsap/Draggable'
import { InertiaPlugin } from 'gsap/InertiaPlugin'

gsap.registerPlugin(Draggable, InertiaPlugin)

import { iconPaths } from './iconPaths'

import './SvgBubbleSlider.css'
export interface SvgBubbleSliderProps {
  /** A percentage scale */
  scale?: string
}

const ICON_SIZE = 32
const ICON_FILL = '#ffffff'
const MULTIPLIER = 4.8
const SPACER = 60

const DOT_SIZE = 10
const DOT_FILL = '#FF69B4'

const MIN_DRAG_X = -(iconPaths.length - 1) * SPACER
const VIEWBOX_WIDTH = SPACER * iconPaths.length

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  scale = '100%',
}: SvgBubbleSliderProps) => {
  const dotContainerRef = useRef(null)
  const iconContainerRef = useRef(null)

  const iconRefs: RefObject<SVGPathElement>[] = []
  const dotRefs: RefObject<SVGCircleElement>[] = []

  const snapArray: number[] = []
  const mtl = new TimelineMax({ paused: true })

  const handleDragSlider = () => {
    const posX = Number(gsap.getProperty(dotContainerRef.current, 'x'))

    TweenMax.to(mtl, 0.5, {
      time: (posX / MIN_DRAG_X) * (mtl.duration() - 2) + 1,
      ease: Elastic.easeOut.config(2, 0.75),
    })

    TweenMax.set(iconContainerRef.current, {
      x: posX,
    })
  }

  const handleDragStart = () => {
    console.log('handleDragStart')
  }

  const handleThrowComplete = () => {
    const posX = Number(gsap.getProperty(dotContainerRef.current, 'x'))
    const landed = Math.ceil(posX / SPACER)
    console.log('handleThrowComplete', iconPaths[Math.abs(landed)].name)
  }

  const handleScrollTimeline = (index: number) => {
    TweenMax.to([dotContainerRef.current, iconContainerRef.current], 0.8, {
      x: snapArray[index],
      onUpdate: handleDragSlider,
      onComplete: handleThrowComplete,
      ease: Power1.easeOut,
    })
  }

  useEffect(() => {
    iconPaths.map((_, index: number) => {
      TweenMax.set(iconRefs[index], {
        transformOrigin: '50% 50%',
        scale: 0,
      })

      snapArray.push(-index * SPACER)

      const tl = new TimelineMax({})

      tl.to(dotRefs[index], 1, {
        attr: {
          r: DOT_SIZE * MULTIPLIER,
        },
        ease: Linear.easeNone,
      })
        .to(
          iconRefs[index],
          1,
          {
            alpha: 1,
            scale: 2,
            ease: Linear.easeNone,
          },
          '-=1'
        )
        .to(dotRefs[index], 1, {
          attr: {
            r: DOT_SIZE,
          },
          ease: Linear.easeNone,
        })
        .to(
          iconRefs[index],
          1,
          {
            alpha: 0.2,
            scale: 0,
            ease: Linear.easeNone,
          },
          '-=1'
        )
      mtl.add(tl, index / 2)
    })
    handleScrollTimeline(6)
    Draggable.create(dotContainerRef.current, {
      type: 'x',
      bounds: {
        minX: MIN_DRAG_X,
        maxX: 0,
        minY: 0,
        maxY: 0,
      },
      onDrag: handleDragSlider,
      onDragStart: handleDragStart,
      onThrowUpdate: handleDragSlider,
      onThrowComplete: handleThrowComplete,
      inertia: true,
      minDuration: 1,
      snap: snapArray,
      overshootTolerance: 0,
      dragClickables: true,
    })[0].enable()
  }, [mtl])

  return (
    <div className="svg-bubble-slider">
      <svg
        className="svg"
        width={scale}
        height={scale}
        viewBox={`0,0, ${VIEWBOX_WIDTH}, 150`}
      >
        <defs>
          <filter id="goo" colorInterpolationFilters="sRGB">
            <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 31 -12"
              result="cm"
            />
          </filter>
        </defs>
        <g
          className="dot-group"
          transform={`matrix(1,0,0,1,${VIEWBOX_WIDTH / 2},${ICON_SIZE * 2})`}
        >
          <g
            ref={dotContainerRef as RefObject<any>}
            className="dot-container"
            filter="url(#goo)"
          >
            <rect
              className="hit-area"
              width={VIEWBOX_WIDTH}
              transform={`matrix(1,0,0,1,0, -${ICON_SIZE})`}
            />
            {iconPaths.map((_, index: number) => (
              <circle
                ref={(ref) => {
                  dotRefs.push(ref as any)
                }}
                key={index}
                className="dot"
                cx={index * SPACER}
                cy={ICON_SIZE / 2}
                r={DOT_SIZE}
                fill={DOT_FILL}
                onClick={() => handleScrollTimeline(index)}
              />
            ))}
          </g>
          <g
            ref={iconContainerRef as RefObject<any>}
            className="icon-container"
          >
            {iconPaths.map(
              (icon: { name: string; path: string }, index: number) => {
                const { name, path } = icon
                return (
                  <path
                    ref={(ref) => {
                      iconRefs.push(ref as any)
                    }}
                    key={index}
                    className="icon"
                    fill={ICON_FILL}
                    id={name}
                    data-index={index}
                    d={path}
                    opacity={0.2}
                    transform={`matrix(1,0,0,1,${
                      index * SPACER - ICON_SIZE / 2
                    },0)`}
                  />
                )
              }
            )}
          </g>
        </g>
      </svg>
    </div>
  )
}
