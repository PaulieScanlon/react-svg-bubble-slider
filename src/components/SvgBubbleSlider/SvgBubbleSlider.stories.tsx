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

export const someProp = () => <SvgBubbleSlider someProp="Hello" />

someProp.story = {
  parameters: {
    docs: {
      storyDescription: 'The `someProp` ...',
    },
  },
}

export const sx = () => (
  <SvgBubbleSlider
    sx={{
      color: 'secondary',
      border: '2px solid red',
    }}
  />
)

sx.story = {
  parameters: {
    docs: {
      storyDescription: 'The `sx` can be used to add styles',
    },
  },
}
