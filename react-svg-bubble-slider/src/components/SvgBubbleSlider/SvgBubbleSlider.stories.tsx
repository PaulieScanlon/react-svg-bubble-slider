import React from 'react'
import { SvgBubbleSlider } from '.'

import { Button } from 'theme-ui'

export default {
  title: 'Props',
  parameters: {
    component: SvgBubbleSlider,
    componentSubtitle:
      'Have a browse of the props to see how you customise SvgBubbleSlider. You can see the usage by clicking on "Show code"',
  },
}

export const usage = () => <SvgBubbleSlider />

export const reaction = () => (
  <SvgBubbleSlider>
    {({ reaction }) =>
      reaction && (
        <Button sx={{ textTransform: 'capitalize' }}>{reaction}</Button>
      )
    }
  </SvgBubbleSlider>
)

reaction.story = {
  parameters: {
    docs: {
      storyDescription:
        'You can access the current `reaction` via the render prop',
    },
  },
}

export const primaryColor = () => <SvgBubbleSlider primaryColor="#4fc3f7" />

primaryColor.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `primaryColor` prop can be used to change the color of the dots, speech bubble stroke ad speech bubble text and pop lines',
    },
  },
}

export const secondaryColor = () => <SvgBubbleSlider secondaryColor="#ffebee" />

secondaryColor.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `secondaryColor` prop can be used to change the color of the reaction icons and the speech bubble background',
    },
  },
}

export const fonts = () => <SvgBubbleSlider />

fonts.story = {
  parameters: {
    docs: {
      storyDescription:
        'By default `font-family`, `font-weight` and `font-size` for the speech bubble text are set to `inherit`. If you wish to change this you can target the text by using the class name `.speech-bubble-label`',
    },
  },
}
