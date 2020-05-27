import React, {
  Fragment,
  FunctionComponent,
  memo,
  useState,
  ReactNode,
} from 'react'

import { Svg } from './Svg'

import './SvgBubbleSlider.css'

interface SvgBubbleActionProps {
  /** Active reaction */
  reaction: string
}
export interface SvgBubbleSliderProps {
  /** A percentage scale */
  scale?: string
  /** Render prop: Passes reaction and children */
  children?: ({ reaction }: SvgBubbleActionProps) => ReactNode
}

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = memo(
  ({ scale = '100%', children }: SvgBubbleSliderProps) => {
    const [currentReaction, setCurrentReaction] = useState('')

    return (
      <Fragment>
        <div className="svg-bubble-slider">
          <Svg
            scale={scale}
            onAnimationComplete={(reaction) => setCurrentReaction(reaction)}
          />
        </div>
        <div className="svg-bubble-action">
          {children &&
            children({
              reaction: currentReaction,
            })}
        </div>
      </Fragment>
    )
  }
)

SvgBubbleSlider.displayName = 'SvgBubbleSlider'
