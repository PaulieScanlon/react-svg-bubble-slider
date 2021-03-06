import React, { FunctionComponent, memo } from 'react'
import { createIconPathsMarkup } from '../utils'

interface PathProps {
  /** Array of paths from iconPaths */
  paths: string[]
}

export const Path: FunctionComponent<PathProps> = memo(
  ({ paths }: PathProps) => {
    return <g dangerouslySetInnerHTML={createIconPathsMarkup(paths)} />
  }
)

Path.displayName = 'Path'
