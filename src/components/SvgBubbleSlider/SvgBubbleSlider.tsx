import React, { FunctionComponent } from 'react'
export interface SvgBubbleSliderProps {
  /** Some class */
  someClass?: string
}

import './SvgBubbleSlider.css'

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  someClass,
}: SvgBubbleSliderProps) => {
  return (
    <svg className={`SvgBubbleSlider ${someClass ? someClass : ''}`}>
      <circle className="dot" cx="0" cy="0" r="30" fill="hotpink" />
    </svg>
  )
}
