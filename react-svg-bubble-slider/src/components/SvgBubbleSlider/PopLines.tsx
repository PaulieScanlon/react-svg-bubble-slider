import React, { FunctionComponent, RefObject, useRef, useEffect } from 'react'

import { gsap } from 'gsap'
// @ts-ignore
import { DrawSVGPlugin } from '../../gsap-bonus/DrawSVGPlugin'

gsap.registerPlugin(DrawSVGPlugin)

import { PopLinesProps } from './types'

const START_Y = 15

const lineAttributes = [
  {
    x1: '107.923',
    y1: '21.37',
    x2: '116.935',
    y2: '4',
  },
  {
    x1: '59.335',
    y1: '24.909',
    x2: '50.5',
    y2: '8.057',
  },
  {
    x1: '21.789',
    y1: '56.11',
    x2: '4',
    y2: '53.67',
  },
  {
    x1: '26.782',
    y1: '98.86',
    x2: '8.057',
    y2: '108.34',
  },
  {
    x1: '65.885',
    y1: '125.86',
    x2: '56.43',
    y2: '145.37',
  },
  {
    x1: '112.429',
    y1: '121.342',
    x2: '121.03',
    y2: '142.564',
  },
  {
    x1: '147.535',
    y1: '93.82',
    x2: '168.155',
    y2: '101.45',
  },
  {
    x1: '149.742',
    y1: '49.01',
    x2: '168.155',
    y2: '42.56',
  },
]

export const PopLines: FunctionComponent<PopLinesProps> = ({
  primaryColor,
  viewBoxWidth,
  currentReaction,
  isAnimationComplete,
}: PopLinesProps) => {
  const popLinesRef = useRef(null)

  const lineRefs: RefObject<SVGPathElement>[] = []

  useEffect(() => {
    lineRefs.map((_, index: number) => {
      currentReaction.length && !isAnimationComplete
        ? gsap.to(lineRefs[index], 0.2, {
            scale: 2,
            drawSVG: '100% 100%',
            ease: 'linear',
          })
        : gsap.set(lineRefs[index], {
            transformOrigin: '50% 50%',
            drawSVG: '0% 100%',
            scale: 0,
          })
    })
  }, [currentReaction, isAnimationComplete])

  useEffect(() => {
    gsap.set(popLinesRef.current, {
      visibility: 'visible',
    })
  }, [])

  return (
    <g
      ref={popLinesRef as RefObject<any>}
      fill="none"
      stroke={primaryColor}
      strokeWidth="4"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit="10"
      transform={`matrix(1,0,0,1,${viewBoxWidth / 2 - 88},${START_Y})`}
      style={{
        visibility: 'hidden',
      }}
    >
      {lineAttributes.map((line, index: number) => (
        <line
          className="speech-bubble-pop-line"
          ref={(ref) => lineRefs.push(ref as any)}
          key={index}
          {...line}
        />
      ))}
    </g>
  )
}

PopLines.displayName = 'PopLines'
