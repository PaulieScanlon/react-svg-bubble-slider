import React, { FunctionComponent, HTMLAttributes } from 'react'

import { IconSetOptions } from '../types'
import { iconPaths } from '../SvgBubbleSlider/iconPaths'
import theme from '../../theme'

interface SvgIconProps extends HTMLAttributes<SVGElement> {
  /** The name of icon */
  name: string
  /** The width and height of the icon */
  size?: number
  /** The fill color */
  color?: string
}

export const SvgIcon: FunctionComponent<SvgIconProps> = ({
  name,
  size = 32,
  color = theme.colors.primary,
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
      <path
        d={
          iconPaths[IconSetOptions.chrisGannon].filter(
            (icon) => icon.name === name
          )[0].path
        }
        fill="currentcolor"
      />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  )
}

SvgIcon.displayName = 'SvgIcon'
