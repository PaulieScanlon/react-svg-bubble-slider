import { render } from '@testing-library/react'

import { usage } from './SvgBubbleSlider.stories'

describe('<SvgBubbleSlider />', () => {
  test('renders the component', () => {
    const { asFragment } = render(usage())
    expect(asFragment()).toMatchSnapshot()
  })
})
