import React, { Fragment, FunctionComponent, useState, ReactNode } from 'react'

import { Svg } from './Svg'

// import from './SvgBubbleSlider.css'

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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          position: 'relative',
          marginBottom: '24px',
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
