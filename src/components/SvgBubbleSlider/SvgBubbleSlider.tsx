import React, { FunctionComponent } from 'react'

export interface SvgBubbleSliderProps {
  /** Some Prop */
  someProp?: string
}

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  someProp,
}: SvgBubbleSliderProps) => {
  return (
    <div
      style={{
        backgroundColor: 'darkorchid',
        color: 'white',
        fontFamily: 'Roboto, Arial, sans-serif',
        padding: 10,
      }}
    >{`SvgBubbleSlider ${someProp ? someProp : ''}`}</div>
  )
}
