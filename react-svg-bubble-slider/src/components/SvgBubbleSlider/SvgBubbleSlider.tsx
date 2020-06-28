import React, { Fragment, FunctionComponent, useState } from 'react'

import { SvgBubbleSliderProps } from './types'
import theme from '../../theme'

import { Timeline } from './Timeline'

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = ({
  children,
  primaryColor = theme.colors.primary,
  secondaryColor = theme.colors.background,
  icons,
  showSpeechBubble,
}: SvgBubbleSliderProps) => {
  const [currentReaction, setCurrentReaction] = useState<any>('')

  return (
    <Fragment>
      <div
        className="react-svg-bubble-slider"
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          position: 'relative',
          width: '100%',
        }}
      >
        <Timeline
          onAnimationComplete={(reaction) => setCurrentReaction(reaction)}
          primaryColor={primaryColor}
          secondaryColor={secondaryColor}
          icons={icons}
          showSpeechBubble={showSpeechBubble}
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
