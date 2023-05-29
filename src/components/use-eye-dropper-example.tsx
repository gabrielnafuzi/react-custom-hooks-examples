'use client'

import { useEyeDropper } from '@/hooks/use-eye-dropper'
import { useIsClient } from '@/hooks/use-is-client'

export const UseEyeDropperExample = () => {
  const isClient = useIsClient()
  const { isSupported, open, sRGBHex } = useEyeDropper()

  const handleOnOpen = () => {
    open().catch(console.error)
  }

  if (!isClient) {
    return null
  }

  if (!isSupported) {
    return <span>Not supported by Your Browser</span>
  }

  return (
    <div className="flex max-w-sm flex-col gap-2">
      <p>Pick a color anywhere on the screen</p>

      <div className="flex items-center gap-2">
        sRGBHex:{' '}
        <span
          style={{ backgroundColor: sRGBHex }}
          className="h-5 w-5 rounded-sm"
        />
        {sRGBHex}
      </div>

      <button
        type="button"
        className="rounded-md bg-indigo-50 px-2.5 py-1.5 text-sm font-semibold text-indigo-600 shadow-sm hover:bg-indigo-100"
        onClick={handleOnOpen}
      >
        Open Eye Dropper
      </button>
    </div>
  )
}
