import React, { Fragment, FunctionComponent, useState, ReactNode } from 'react'

import { Svg } from './Svg'

interface SvgBubbleActionProps {
  /** Active reaction */
  reaction: string
}
export interface SvgBubbleSliderProps {
  /** Render prop: Passes reaction and children */
  children?: ({ reaction }: SvgBubbleActionProps) => ReactNode
}

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  children,
}: SvgBubbleSliderProps) => {
  const [currentReaction, setCurrentReaction] = useState('')

  return (
    <Fragment>
      <div
        className="svg-bubble-slider"
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Svg onAnimationComplete={(reaction) => setCurrentReaction(reaction)} />
      </div>
      <div
        className="svg-bubble-action"
        style={{
          textAlign: 'center',
          minHeight: '35px',
        }}
      >
        {children &&
          children({
            reaction: currentReaction,
          })}
      </div>
    </Fragment>
  )
}
