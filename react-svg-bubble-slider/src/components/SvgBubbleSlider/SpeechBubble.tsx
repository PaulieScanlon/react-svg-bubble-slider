import React, {
  FunctionComponent,
  RefObject,
  useRef,
  useEffect,
  useState,
} from 'react'

import { gsap } from 'gsap'

interface SpeechBubbleProps {
  /** The colors of the speech bubble */
  color: string
  /** The name of the current reaction */
  currentReaction: string
  /** The size of the viewbox */
  viewboxWidth: number
}

export const SpeechBubble: FunctionComponent<SpeechBubbleProps> = ({
  color,
  currentReaction,
  viewboxWidth,
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
        y: 180,
        transformOrigin: `50% 100%`,
      })
      .to(speechBubblesRef.current, 0.9, {
        rotation: 0,
        visibility: 'visible',
        ease: 'elastic(1, 0.6)',
        scale: 0.8,
        y: -120,
      })
      .to(
        speechBubblesRef.current,
        0.6,
        {
          ease: 'easltic(1, 0.6)',
          scaleY: 1,
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
      className="speech-bubble"
      style={{
        transformOrigin: '50% 100%',
        pointerEvents: 'none',
      }}
      transform={`matrix(0,0,0,0,${viewboxWidth / 2},0)`}
    >
      <path
        className="speech-bubble-stroke"
        fill="none"
        strokeWidth="14"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit="10"
        d="
		M69.361,112.063l16.377,28.99l16.562-28.94c37.277-5.125,65.195-27.13,65.195-53.494C167.496,28.456,130.766,4,85.515,4
		C40.275,4,4,28.456,4,58.619c0,26.291,27.361,48.249,65.361,53.448V112.063z"
        style={{
          stroke: color,
        }}
      ></path>
      <path
        className="speech-bubble-fill"
        d="M69.361,109.063l16.377,28.99l16.562-28.94
		c37.277-5.125,65.195-27.13,65.195-53.494C167.496,25.456,130.766,1,85.515,1C40.275,1,4,25.456,4,55.619
		c0,26.291,27.361,48.249,65.361,53.448V109.063z"
        style={{
          fill: 'rgb(255, 255, 255)',
        }}
      ></path>
      <text
        className="speech-bubble-label"
        x="85"
        y="67"
        style={{
          fill: color,
          fontFamily: 'inherit',
          fontWeight: 'bold',
          textTransform: 'uppercase',
          textAnchor: 'middle',
        }}
      >
        {currentReaction}
      </text>
    </g>
  )
}

SpeechBubble.displayName = 'SpeechBubble'
