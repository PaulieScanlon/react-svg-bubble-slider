import { ReactNode } from 'react'

interface coreProps {
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

export interface SvgProps extends coreProps {
  /** Animation callback passes current reaction */
  onAnimationComplete: (reaction: string) => void
}

export interface SpeechBubbleProps extends coreProps {
  /** The name of the current reaction */
  currentReaction: string
}

export interface PopLinesProps extends coreProps {
  /** Is the animation happening */
  animationState: boolean
}
