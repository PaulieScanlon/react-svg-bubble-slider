import React, { Fragment, FunctionComponent, useState, ReactNode } from 'react'

import { Svg } from './Svg'

interface SvgBubbleActionProps {
  /** Active reaction */
  reaction: string
}
export interface SvgBubbleSliderProps {
  /** Render prop: Passes reaction and children */
  children?: ({ reaction }: SvgBubbleActionProps) => ReactNode
  /** The color of the dots, speech bubble background and speech bubble text and pop lines */
  primaryColor?: string
  /** The color of the reaction icons and speech bubble background */
  secondaryColor?: string
}

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  children,
  primaryColor = '#ff69B4',
  secondaryColor = '#ffffff',
}: SvgBubbleSliderProps) => {
  const [currentReaction, setCurrentReaction] = useState('')

  return (
    <Fragment>
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        <Svg
          onAnimationComplete={(reaction) => setCurrentReaction(reaction)}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
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
