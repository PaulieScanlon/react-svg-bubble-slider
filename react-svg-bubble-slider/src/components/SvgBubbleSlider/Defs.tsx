import React, { FunctionComponent, memo } from 'react'

export const Defs: FunctionComponent = memo(() => (
  <defs>
    <filter id="goo" colorInterpolationFilters="sRGB">
      <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
      <feColorMatrix
        in="blur"
        mode="matrix"
        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 31 -12"
        result="cm"
      />
    </filter>
  </defs>
))

Defs.displayName = 'Defs'
