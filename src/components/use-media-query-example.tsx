'use client'

import { useMediaQuery } from '@/hooks/use-media-query'
import { useIsClient } from '@/hooks/use-is-client'

export const UseMediaQueryExample = () => {
  const isClient = useIsClient()
  const matches = useMediaQuery('(400px <= width <= 1000px)')

  if (!isClient) {
    return null
  }

  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <h2 className="text-xl font-semibold">useMediaQuery</h2>

      <p className="text-center text-lg text-slate-900">
        The width of the window is {matches ? '' : <strong>not</strong>} between
        400px and 1000px.
      </p>

      <p className="text-sm text-slate-500">
        Resize the window to see the media query change.
      </p>
    </div>
  )
}
