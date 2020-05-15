import React from 'react'
import { SvgBubbleSlider } from '.'

export default {
  title: 'SvgBubbleSlider',
  parameters: {
    component: SvgBubbleSlider,
    componentSubtitle: "Hooray it's a SvgBubbleSlider",
  },
}

export const usage = () => <SvgBubbleSlider />

export const someProp = () => <SvgBubbleSlider someProp="Hello" />

someProp.story = {
  parameters: {
    docs: {
      storyDescription: 'The `someProp` ...',
    },
  },
}
