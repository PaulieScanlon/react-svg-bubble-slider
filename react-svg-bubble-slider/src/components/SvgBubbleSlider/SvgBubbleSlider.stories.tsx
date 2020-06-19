import React from 'react'
import { action } from '@storybook/addon-actions'

import { ReactionType } from '../SvgBubbleSlider/types'
import { SvgBubbleSlider } from '.'

import { Box } from 'theme-ui'

const handleReaction = (reaction: ReactionType) => {
  action('handleReaction')(reaction)
}

export default {
  title: 'Props',
  parameters: {
    component: SvgBubbleSlider,
    componentSubtitle:
      'Have a browse of the props to see how you can customise SvgBubbleSlider. You can see the usage by clicking on "Show code" in the bottom right of the preview panel 👇',
  },
}

export const usage = () => <SvgBubbleSlider />

export const icons = () => (
  <SvgBubbleSlider icons={['angry', 'sad', 'smile', 'happy']} />
)

icons.story = {
  parameters: {
    docs: {
      storyDescription:
        'Use the `icons` prop to provide a restricted list of icons to display',
    },
  },
}

export const reaction = () => (
  <div style={{ position: 'relative', top: 38 }}>
    <SvgBubbleSlider>
      {({ reaction }: any) => (
        <div style={{ textAlign: 'center', height: 44 }}>
          {reaction && (
            <button onClick={() => handleReaction(reaction)}>{reaction}</button>
          )}
        </div>
      )}
    </SvgBubbleSlider>
  </div>
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
        "If you're using Theme UI modify styles by referencing them by class name via the sx prop on a Theme UI enabled element",
    },
  },
}
