import { ReactNode, HTMLAttributes } from 'react'

export enum IconSetOptions {
  chrisGannon = 'chrisGannon',
  twemoji = 'twemoji',
}

interface CoreProps {
  /** Boolean to control visibility of speech bubble */
  showSpeechBubble?: boolean
  /** The color of the dots, speech bubble background, speech bubble text and pop lines */
  primaryColor?: string
  /** The color of the reaction icons and speech bubble background */
  secondaryColor?: string
  /** Names of icons to include */
  icons?: string[]
  /** The main scale */
  scale?: number
  /** Disables mouse and key interactions */
  isDisabled?: boolean
}

export interface IconSetProps {
  /** The name of the icon set */
  iconSet?: keyof typeof IconSetOptions
}

export interface ReactionType {
  /** Active reaction */
  reaction: string
}

export interface SvgBubbleSliderProps extends CoreProps, IconSetProps {
  /** Render prop: Passes reaction and children */
  children?: ({ reaction }: ReactionType) => ReactNode
}

export interface TimelineProps extends CoreProps, IconSetProps {
  /** Animation callback passes current reaction */
  onAnimationComplete: (reaction: string) => void
}

interface subProps {
  /** Is the animation happening */
  isAnimating?: boolean
  /** The name of the current reaction */
  currentReaction: string
  /** The width of the ViewBox */
  viewBoxWidth: number
}

export interface SpeechBubbleProps extends CoreProps, subProps {}

export interface PopLinesProps extends CoreProps, subProps {}

export interface SvgIconProps extends IconSetProps, HTMLAttributes<SVGElement> {
  /** The name of icon */
  name: string
  /** The width and height of the icon */
  size?: number
  /** The fill color */
  color?: string
}
