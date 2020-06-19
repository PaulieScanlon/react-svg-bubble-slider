import React, { Fragment, FunctionComponent, useState } from 'react'

import { SvgBubbleSliderProps, ReactionType } from './types'

import { Svg } from './Svg'

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  children,
  primaryColor = '#ff69B4',
  secondaryColor = '#ffffff',
  icons,
}: SvgBubbleSliderProps) => {
  const [currentReaction, setCurrentReaction] = useState<any>('')

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
          icons={icons}
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
