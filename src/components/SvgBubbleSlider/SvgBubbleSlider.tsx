import React, { FunctionComponent } from 'react'
import { useSpring, animated } from 'react-spring'
import { useDrag, useGesture } from 'react-use-gesture'
import clamp from 'lodash.clamp'

import { iconPaths } from './iconPaths'
export interface SvgBubbleSliderProps {
  /** Some class */
  someClass?: string
}

import './SvgBubbleSlider.css'

const DOT_SIZE = 3
const ICON_SIZE = 32

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  someClass,
}: SvgBubbleSliderProps) => {
  const boundaries = [100, -100]

  const [{ x }, set] = useSpring(() => ({ x: 0 }))

  // Set the drag hook and define component movement based on gesture data
  // const bind = useDrag(({ down, movement: [mx, my] }) => {
  //   set({ x: down ? mx : 0, y: down ? my : 0 })
  // })
  // const bind = useDrag(({ offset: [x, y] }) => {
  //   // console.log(x)
  //   return set({ x, y })
  // })

  const bind = useGesture({
    onDrag: ({ movement, memo = [x.getValue()] }) => {
      const [right, left] = boundaries
      set({
        x: clamp(memo[0] + movement[0], left, right),
      })
      return memo
    },
  })

  return (
    <div className="svg-bubble-slider">
      <animated.div {...bind()} style={{ position: 'absolute', left: x }}>
        <svg
          className={`svg ${someClass ? someClass : ''}`}
          width={iconPaths.length * ICON_SIZE}
          height={ICON_SIZE}
        >
          <g className="dotGroup">
            <g className="dotContainer">
              {iconPaths.map((_, index: number) => {
                return (
                  <circle
                    key={index}
                    className="dot"
                    cx={ICON_SIZE * index + ICON_SIZE / 2}
                    cy={ICON_SIZE / 2}
                    r={DOT_SIZE}
                    fill="hotpink"
                  />
                )
              })}
            </g>
            <g className="iconContainer">
              {iconPaths.map(
                (icon: { name: string; path: string }, index: number) => {
                  const { name, path } = icon
                  return (
                    <path
                      className="icon"
                      style={{
                        fill: 'rgb(255, 255, 255)',
                        opacity: 1,
                        height: '0px',
                        width: '0px',
                        transformOrigin: '0px 0px 0px',
                      }}
                      key={index}
                      id={name}
                      d={path}
                      transform={`matrix(1,0,0,1,${ICON_SIZE * index},0)`}
                    />
                  )
                }
              )}
            </g>
          </g>
        </svg>
      </animated.div>
    </div>
  )
}
