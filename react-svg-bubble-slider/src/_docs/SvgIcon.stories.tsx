import React from 'react'
import { SvgIcon } from '../components/SvgIcon'

import { Flex, Box } from 'theme-ui'

export default {
  title: 'SvgIcon',
  decorators: [
    (storyFn: any) => {
      return (
        <Flex
          sx={{
            textAlign: 'center',
          }}
        >
          <Box
            sx={{
              width: '100%',
            }}
          >
            {storyFn()}
          </Box>
        </Flex>
      )
    },
  ],
  parameters: {
    component: SvgIcon,
    componentSubtitle:
      "If you'd like to use the icons in isolation you can do so by using the SvgIcon component and passing it a name",
  },
}

export const usage = () => <SvgIcon name="wondering" />

export const size = () => <SvgIcon name="wondering" size={64} />

size.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `size` prop can be used to change the size of the `SvgIcon`',
    },
  },
}

export const color = () => <SvgIcon name="wondering" color="#8be9fd" />

color.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `color` prop can be used to change the color of the `SvgIcon`',
    },
  },
}

export const iconSet = () => <SvgIcon iconSet="twemoji" name="wondering" />

iconSet.story = {
  parameters: {
    docs: {
      storyDescription:
        'The `iconSet` prop can be used to which set of emojis to use',
    },
  },
}

export const ThemeUI = () => (
  <Box
    sx={{
      '.svg-icon': {
        color: 'muted',
      },
    }}
  >
    <SvgIcon name="wondering" />
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

export const HTMLAttributes = () => (
  <SvgIcon key={1} className="reaction-icon" name="wondering" id="test-id" />
)

HTMLAttributes.story = {
  parameters: {
    docs: {
      storyDescription:
        'The SvgIcon can accept any valid attributes for `HTMLAttributes<SVGElement>`',
    },
  },
}
