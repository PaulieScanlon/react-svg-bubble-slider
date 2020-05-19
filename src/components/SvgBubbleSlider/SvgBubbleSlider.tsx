import React, { FunctionComponent } from 'react'
import { Box, SxStyleProp } from 'theme-ui'
export interface SvgBubbleSliderProps {
  /** Some Prop */
  someProp?: string
  /** Theme UI sx prop */
  sx?: SxStyleProp
}

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  someProp,
  sx,
}: SvgBubbleSliderProps) => {
  return (
    <Box
      sx={{
        color: 'primary',
        fontFamily: 'body',
        ...(sx as SxStyleProp),
      }}
    >{`SvgBubbleSlider ${someProp ? someProp : ''}`}</Box>
  )
}
