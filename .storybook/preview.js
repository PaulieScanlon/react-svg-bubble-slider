import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'emotion-theming'
import * as ThemeUIComponents from 'theme-ui'
import { Flex, Box } from 'theme-ui'
import { addDecorator, addParameters } from '@storybook/react'
import { DocsContainer } from '@storybook/addon-docs/blocks'

import theme from '../src/theme'

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <Flex
      sx={{
        alignItems: 'flex-end',
        height: '300px',
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
  </ThemeProvider>
))

addParameters({
  docs: {
    container: ({ children, context }) => (
      <DocsContainer context={context}>
        <ThemeProvider theme={theme}>
          <MDXProvider components={ThemeUIComponents}>{children}</MDXProvider>
        </ThemeProvider>
      </DocsContainer>
    ),
  },
})
