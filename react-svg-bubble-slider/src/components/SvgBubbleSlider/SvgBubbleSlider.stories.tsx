import React from 'react'
import { SvgBubbleSlider } from '.'

import { Box } from 'theme-ui'

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
    {({ reaction }) => (
      <div style={{ textAlign: 'center' }}>
        {reaction && <button>{reaction}</button>}
      </div>
    )}
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
        'The `primaryColor` prop can be used to change the color of the dots, speech bubble stroke, speech bubble text and pop lines',
    },
  },
}

export const secondaryColor = () => <SvgBubbleSlider secondaryColor="#ffebee" />

secondaryColor.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `secondaryColor` prop can be used to change the color of the reaction icons and the speech bubble fill',
    },
  },
}

export const ThemeUI = () => (
  <Box
    sx={{
      '.speech-bubble-stroke': {
        stroke: 'muted',
      },
      '.speech-bubble-fill': {
        fill: 'background',
      },
      '.speech-bubble-text': {
        fill: 'muted',
        fontSize: '24px',
        textTransform: 'capitalize',
      },
      '.speech-bubble-pop-line': {
        stroke: 'muted',
      },
      '.reaction-icon': {
        fill: 'background',
      },
      '.reaction-dot': {
        fill: 'muted',
      },
      '.svg-bubble-action': {
        minHeight: 2,
      },
    }}
  >
    <SvgBubbleSlider />
  </Box>
)

ThemeUI.story = {
  parameters: {
    docs: {
      storyDescription:
        "If you're using Theme UI you can modify styles by referecing them by class name via the sx prop on a Theme UI enabled element",
    },
  },
}