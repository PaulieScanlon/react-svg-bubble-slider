import React from 'react'
import { SvgBubbleSlider } from '.'

import { Button } from 'theme-ui'

export default {
  title: 'Props',
  parameters: {
    component: SvgBubbleSlider,
    componentSubtitle: "Hooray it's a SvgBubbleSlider",
  },
}

export const usage = () => <SvgBubbleSlider />

export const action = () => (
  <SvgBubbleSlider>
    {({ reaction }) => <Button>{`Post:${reaction}`}</Button>}
  </SvgBubbleSlider>
)

action.story = {
  parameters: {
    docs: {
      storyDescription: 'The `scale` prop can be used to set the size',
    },
  },
}

export const scale = () => <SvgBubbleSlider scale="50%" />

scale.story = {
  parameters: {
    docs: {
      storyDescription: 'The `scale` prop can be used to set the size',
    },
  },
}
