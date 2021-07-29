import React, { memo, Fragment, FunctionComponent, useState } from 'react'

import { SvgBubbleSliderProps, IconSetOptions } from '../types'
import theme from '../../theme'

import { Timeline } from './Timeline'

export const SvgBubbleSlider: FunctionComponent<SvgBubbleSliderProps> = memo(
  ({
    children,
    primaryColor = theme.colors.primary,
    secondaryColor = theme.colors.background,
    icons,
    showSpeechBubble = true,
    scale = 1,
    iconSet = IconSetOptions.chrisGannon,
    isDisabled = false,
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
            scale={scale}
            iconSet={iconSet}
            isDisabled={isDisabled}
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
