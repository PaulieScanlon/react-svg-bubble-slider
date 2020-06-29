import { ReactNode } from 'react'

interface coreProps {
  /** Boolean to control visibility of speech bubble */
  showSpeechBubble?: boolean
  /** The color of the dots, speech bubble background, speech bubble text and pop lines */
  primaryColor?: string
  /** The color of the reaction icons and speech bubble background */
  secondaryColor?: string
  /** Names of icons to include */
  icons?: string[]
}

export interface ReactionType {
  /** Active reaction */
  reaction: string
}

export interface SvgBubbleSliderProps extends coreProps {
  /** Render prop: Passes reaction and children */
  children?: ({ reaction }: ReactionType) => ReactNode
}

export interface TimelineProps extends coreProps {
  /** Animation callback passes current reaction */
  onAnimationComplete: (reaction: string) => void
}

interface subProps {
  /** Is the animation happening */
  isAnimationComplete?: boolean
  /** The name of the current reaction */
  currentReaction: string
  /** The width of the ViewBox */
  viewBoxWidth: number
}

export interface SpeechBubbleProps extends coreProps, subProps {}

export interface PopLinesProps extends coreProps, subProps {}
