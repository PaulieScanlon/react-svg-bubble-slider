import React from 'react'
import { SvgBubbleSlider } from '.'

import { Button } from 'theme-ui'

export default {
  title: 'Props',
  parameters: {
    component: SvgBubbleSlider,
    componentSubtitle: "Hooray it's an SvgBubbleSlider",
  },
}

export const usage = () => <SvgBubbleSlider />

export const children = () => (
  <SvgBubbleSlider>
    {({ reaction }) =>
      reaction && (
        <Button sx={{ textTransform: 'capitalize' }}>{reaction}</Button>
      )
    }
  </SvgBubbleSlider>
)

children.story = {
  parameters: {
    docs: {
      storyDescription:
        'You can access the current `reaction` via the render prop',
    },
  },
}
