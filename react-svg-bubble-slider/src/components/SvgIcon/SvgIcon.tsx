import React, { FunctionComponent } from 'react'

import { SvgIconProps, IconSetOptions } from '../types'
import { iconPaths } from '../SvgBubbleSlider/iconPaths'

import { createIconPathsMarkup } from '../utils'

import theme from '../../theme'

export const SvgIcon: FunctionComponent<SvgIconProps> = ({
  name,
  size = 32,
  color = theme.colors.primary,
  iconSet = IconSetOptions.chrisGannon,
}: SvgIconProps) => {
  if (size < 32) throw new Error('Icon size must be at least 32')
  return (
    <svg
      className="svg-icon"
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      color={color}
      fill="currentcolor"
      viewBox="0 0 32 32"
      preserveAspectRatio="xMidYMid meet"
      x="0"
      y="0"
    >
      {iconPaths[iconSet]
        .filter((icon) => icon.name === name)
        .map((icon, index) => {
          const { paths } = icon
          return (
            <g
              // transform={`matrix(0.8,0,0,0.8,0,0)`}
              key={index}
              dangerouslySetInnerHTML={createIconPathsMarkup(paths)}
              fill="currentcolor"
            />
          )
        })}
    </svg>
  )
}

SvgIcon.displayName = 'SvgIcon'
