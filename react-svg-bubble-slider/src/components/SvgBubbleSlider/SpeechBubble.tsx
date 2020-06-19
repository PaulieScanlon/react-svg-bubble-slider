import React, {
  FunctionComponent,
  RefObject,
  useRef,
  useEffect,
  useState,
} from 'react'

import { gsap } from 'gsap'

import { SpeechBubbleProps } from './types'

const START_Y = 60

export const SpeechBubble: FunctionComponent<SpeechBubbleProps> = ({
  primaryColor,
  secondaryColor,
  currentReaction,
}: SpeechBubbleProps) => {
  const speechBubblesRef = useRef(null)
  const [tl] = useState({
    timeline: gsap.timeline(),
  })

  useEffect(() => {
    tl.timeline
      .set(speechBubblesRef.current, {
        rotation: 45,
        visibility: 'hidden',
        scale: 0,
        y: START_Y,
        transformOrigin: `50% 100%`,
      })
      .to(speechBubblesRef.current, 0.9, {
        rotation: 0,
        visibility: 'visible',
        ease: 'elastic(1, 0.6)',
        scale: 0.9,
        y: 40,
      })
      .to(
        speechBubblesRef.current,
        0.6,
        {
          ease: 'easltic(1, 0.6)',
          scale: 1,
        },
        '-=1'
      )
  }, [])

  useEffect(() => {
    currentReaction.length > 0
      ? tl.timeline.play()
      : tl.timeline.pause() && tl.timeline.seek(0)
  }, [currentReaction])

  return (
    <g
      ref={speechBubblesRef as RefObject<any>}
      style={{
        pointerEvents: 'none',
        visibility: 'hidden',
      }}
      transform={`matrix(0.8,0,0,0.8,91.5,${START_Y})`}
    >
      <path
        className="speech-bubble-stroke"
        stroke={primaryColor}
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="
		M69.361,112.063l16.377,28.99l16.562-28.94c37.277-5.125,65.195-27.13,65.195-53.494C167.496,28.456,130.766,4,85.515,4
		C40.275,4,4,28.456,4,58.619c0,26.291,27.361,48.249,65.361,53.448V112.063z"
      ></path>
      <path
        className="speech-bubble-fill"
        d="M69.361,109.063l16.377,28.99l16.562-28.94
		c37.277-5.125,65.195-27.13,65.195-53.494C167.496,25.456,130.766,1,85.515,1C40.275,1,4,25.456,4,55.619
    c0,26.291,27.361,48.249,65.361,53.448V109.063z"
        fill={secondaryColor}
      ></path>
      <text
        className="speech-bubble-text"
        x="85"
        y="67"
        fill={primaryColor}
        style={{
          textAnchor: 'middle',
        }}
      >
        {currentReaction}
      </text>
    </g>
  )
}

SpeechBubble.displayName = 'SpeechBubble'
