import { render } from '@testing-library/react'

import { usage } from '../../_docs/SvgBubbleSlider.stories'

// https://github.com/jsdom/jsdom/issues/1664
describe('<SvgBubbleSlider />', () => {
  beforeEach(() => {
    // @ts-ignore
    window.SVGElement.prototype.getBBox = () => ({
      x: 0,
      y: 0,
    })
  })

  afterEach(() => {
    // @ts-ignore
    delete window.SVGElement.prototype.getBBox
  })

  test('renders the component', () => {
    const { asFragment } = render(usage())
    expect(asFragment()).toMatchSnapshot()
  })
})
