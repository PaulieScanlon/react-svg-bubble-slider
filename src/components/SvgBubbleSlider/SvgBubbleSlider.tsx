import React, {
  FunctionComponent,
  RefObject,
  useRef,
  useEffect,
  Fragment,
} from 'react'
import { TweenMax, TimelineMax, Linear, Elastic } from 'gsap'

import { iconPaths } from './iconPaths'
export interface SvgBubbleSliderProps {
  /** Some class */
  someClass?: string
}

import './SvgBubbleSlider.css'

const ICON_SIZE = 32
const ICON_FILL = '#ffffff'
const MULTIPLIER = 4.8
const SPACER = 60

const DOT_SIZE = 10
const DOT_FILL = '#FF69B4'

const MIN_DRAG_X = -(iconPaths.length - 1) * SPACER

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  someClass,
}: SvgBubbleSliderProps) => {
  const dotContainerRef = useRef(null)
  const iconContainerRef = useRef(null)

  const iconRefs: RefObject<SVGPathElement>[] = []
  const dotRefs: RefObject<SVGCircleElement>[] = []

  const snapArray: number[] = []
  const mtl = new TimelineMax({ paused: true })

  const handleDragSlider = () => {
    const posX = Number(
      window
        .getComputedStyle(dotContainerRef.current)
        .getPropertyValue('transform')
        .match(/-?[\d]+/g)[4]
    )
    TweenMax.to(mtl, 0.5, {
      time: (posX / MIN_DRAG_X) * (mtl.duration() - 2) + 1,
      ease: Elastic.easeOut.config(2, 0.75),
    })
  }

  const handleScrollTimeline = (index: number, name: string) => {
    console.log('name: ', name)

    TweenMax.to([dotContainerRef.current, iconContainerRef.current], 2, {
      x: snapArray[index],
      onUpdate: handleDragSlider,
      // onComplete: throwComplete,
      ease: Elastic.easeOut.config(1, 0.85),
    })
  }

  useEffect(() => {
    iconPaths.map((_, index: number) => {
      // @ts-ignore
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
    handleScrollTimeline(6, iconPaths[6].name)
  }, [mtl])

  return (
    <Fragment>
      <div className="svg-bubble-slider">
        <svg
          className={`svg ${someClass ? someClass : ''}`}
          width={DOT_SIZE * iconPaths.length + SPACER * iconPaths.length}
        >
          <g
            className="dotGroup"
            transform={`matrix(1,0,0,1,${
              (DOT_SIZE * iconPaths.length + SPACER * iconPaths.length) / 2
            },${ICON_SIZE * 2})`}
          >
            <g ref={dotContainerRef} className="dotContainer">
              {iconPaths.map((icon, index: number) => {
                const { name } = icon
                return (
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
                    onClick={() => handleScrollTimeline(index, name)}
                  />
                )
              })}
            </g>
            <g
              ref={iconContainerRef as RefObject<any>}
              className="iconContainer"
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
        {/* <button
          // @ts-ignore
          // onClick={() => clickAnimation.play()}
          onClick={() => handlePlayTimeline()}
        >
          __P__
        </button> */}
      </div>
    </Fragment>
  )
}
