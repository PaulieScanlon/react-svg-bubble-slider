import React, { FunctionComponent } from 'react'

interface SvgBubbleSliderProps {
  /** Some Prop */
  someProp?: string
}

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  someProp,
}: SvgBubbleSliderProps) => {
  return <div>{`SvgBubbleSlider ${someProp}`}</div>
}
