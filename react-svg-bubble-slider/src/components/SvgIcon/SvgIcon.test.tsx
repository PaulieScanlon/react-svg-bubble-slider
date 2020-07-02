import React from 'react'
import { render } from '@testing-library/react'

import { SvgIcon } from './SvgIcon'

describe('<SvgIcon />', () => {
  test('renders the component', () => {
    const { asFragment } = render(<SvgIcon name="happy" />)
    expect(asFragment()).toMatchSnapshot()
  })
})
