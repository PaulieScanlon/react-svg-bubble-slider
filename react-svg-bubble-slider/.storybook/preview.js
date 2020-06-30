import React from 'react'
import { MDXProvider } from '@mdx-js/react'
import { ThemeProvider } from 'emotion-theming'
import * as ThemeUIComponents from 'theme-ui'
import { addDecorator, addParameters } from '@storybook/react'
import { DocsContainer } from '@storybook/addon-docs/blocks'

import theme from '../src/theme'

addDecorator((storyFn) => (
  <ThemeProvider theme={theme}>
    <MDXProvider components={ThemeUIComponents}>{storyFn()}</MDXProvider>
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
