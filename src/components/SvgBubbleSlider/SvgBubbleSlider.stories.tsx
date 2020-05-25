import React from 'react'
import { SvgBubbleSlider } from '.'

export default {
  title: 'Props',
  parameters: {
    component: SvgBubbleSlider,
    componentSubtitle: "Hooray it's a SvgBubbleSlider",
  },
}

export const usage = () => <SvgBubbleSlider />

export const scale = () => <SvgBubbleSlider scale="50%" />

scale.story = {
  parameters: {
    docs: {
      storyDescription: 'The `scale` prop can be used to set the size',
    },
  },
}
