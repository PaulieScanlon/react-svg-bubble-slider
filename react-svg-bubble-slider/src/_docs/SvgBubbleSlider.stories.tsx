import React from 'react'

import { SvgBubbleSlider } from '../components/SvgBubbleSlider'

import { Box } from 'theme-ui'

export default {
  title: 'SvgBubbleSlider',
  decorators: [
    (storyfn: any) => {
      return (
        <Box
          sx={{
            '.svg-timeline': {
              ':focus': {
                outlineColor: 'accent',
                outlineWidth: '1px',
                outlineStyle: 'solid',
                boxShadow: 'none',
              },
            },
          }}
        >
          {storyfn()}
        </Box>
      )
    },
  ],
  parameters: {
    component: SvgBubbleSlider,
    componentSubtitle:
      'Have a browse of the props to see how you can customise SvgBubbleSlider. You can see the usage by clicking on "Show code" in the bottom right of the preview panel 👇',
  },
}

export const usage = () => <SvgBubbleSlider />

export const icons = () => (
  <SvgBubbleSlider icons={['sad', 'happy', 'neutral']} />
)

icons.story = {
  parameters: {
    docs: {
      storyDescription:
        'Use the `icons` prop to provide a restricted list of icons to display',
    },
  },
}

export const iconSet = () => (
  <Box
    sx={{
      '.react-svg-bubble-slider': {
        '.svg-timeline': {
          ':focus': {
            outlineColor: 'gray',
            outlineWidth: '1px',
            outlineStyle: 'solid',
            boxShadow: 'none',
          },
        },
      },
      '.speech-bubble-stroke': {
        stroke: 'gray',
      },
      '.speech-bubble-text': {
        fill: 'text',
        fontSize: '24px',
        textTransform: 'capitalize',
      },
      '.speech-bubble-pop-line': {
        stroke: 'mutedAccent',
      },
      '.reaction-dot': {
        fill: 'gray',
      },
    }}
  >
    <SvgBubbleSlider iconSet="twemoji" />
  </Box>
)

iconSet.story = {
  parameters: {
    docs: {
      storyDescription:
        'Use the `iconSet` prop to change which set of icons to display',
    },
  },
}

export const reaction = () => (
  <SvgBubbleSlider>
    {({ reaction }: any) => (
      <div style={{ height: 60, paddingTop: 16 }}>
        <button
          style={{ display: 'block', margin: 'auto' }}
          onClick={() => console.log(reaction)}
        >
          {reaction ? reaction : '?'}
        </button>
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

export const showSpeechBubble = () => (
  <SvgBubbleSlider showSpeechBubble={false} />
)

showSpeechBubble.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `showSpeechBubble` prop can be used to show or hide the speech bubble',
    },
  },
}

export const scale = () => <SvgBubbleSlider scale={0.6} />

scale.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `scale` prop can be used to adjust the size of SvgBubbleSlider',
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

export const secondaryColor = () => <SvgBubbleSlider secondaryColor="#131127" />

secondaryColor.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `secondaryColor` prop can be used to change the color of the reaction icons and the speech bubble fill',
    },
  },
}

export const isDisabled = () => <SvgBubbleSlider isDisabled={true} />

isDisabled.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `isDisabled` prop can be used to disable SvgBubbleSlider',
    },
  },
}

export const ThemeUI = () => (
  <Box
    sx={{
      '.svg-timeline': {
        ':focus': {
          outlineColor: 'mutedAccent',
        },
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
        "If you're using Theme UI modify styles by referencing them by class name via the sx prop on a Theme UI enabled element. CSS class selectors will work in the same way",
    },
  },
}
