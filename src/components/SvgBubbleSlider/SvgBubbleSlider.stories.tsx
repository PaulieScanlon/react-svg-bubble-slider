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

export const someClass = () => <SvgBubbleSlider someClass="hello-world" />

someClass.story = {
  parameters: {
    docs: {
      storyDescription: 'The `someClass` ...',
    },
  },
}
