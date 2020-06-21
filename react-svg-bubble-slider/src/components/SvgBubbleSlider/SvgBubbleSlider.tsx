import React, { Fragment, FunctionComponent, useState } from 'react'

import { SvgBubbleSliderProps } from './types'
import theme from '../../theme'

import { Timeline } from './Timeline'

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  children,
  primaryColor = theme.colors.primary,
  secondaryColor = theme.colors.background,
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
        <Timeline
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
