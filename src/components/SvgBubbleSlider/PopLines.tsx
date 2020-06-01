import React, { FunctionComponent, forwardRef, RefObject } from 'react'

interface PopLinesProps {
  /** The colors of the lines */
  color: string
  /** The size of the viewbox */
  viewboxWidth: number
  /** Ah ref!!! */
  ref: any
}

const SELF_WIDTH = 170

export const PopLines: FunctionComponent<PopLinesProps> = forwardRef<
  any,
  PopLinesProps
>(({ color, viewboxWidth }, ref) => (
  <g
    ref={ref as any}
    className="pop-Lines"
    fill="none"
    stroke={color}
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
    strokeMiterlimit="10"
    transform={`matrix(2,0,0,2,${viewboxWidth / 2 - SELF_WIDTH},0)`}
  >
    <line x1="107.923" y1="21.37" x2="116.935" y2="4"></line>
    <line x1="59.335" y1="24.909" x2="50.5" y2="8.057"></line>
    <line x1="21.789" y1="56.11" x2="4" y2="53.67"></line>
    <line x1="26.782" y1="98.86" x2="8.057" y2="108.34"></line>
    <line x1="65.885" y1="125.86" x2="56.43" y2="145.37"></line>
    <line x1="112.429" y1="121.342" x2="121.03" y2="142.564"></line>
    <line x1="147.535" y1="93.82" x2="168.155" y2="101.45"></line>
    <line x1="149.742" y1="49.01" x2="168.155" y2="42.56"></line>
  </g>
))
