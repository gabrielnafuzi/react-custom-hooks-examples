import { useCallback, useState } from 'react'

export interface EyeDropperOpenOptions {
  signal?: AbortSignal
}

export interface EyeDropper {
  new (): EyeDropper
  open: (options?: EyeDropperOpenOptions) => Promise<{ sRGBHex: string }>
  [Symbol.toStringTag]: 'EyeDropper'
}

declare global {
  interface Window {
    EyeDropper: EyeDropper
  }
}

interface UseEyeDropperOptions {
  initialValue?: string
}

export const useEyeDropper = (options: UseEyeDropperOptions = {}) => {
  const { initialValue = '' } = options
  const isSupported = typeof window !== 'undefined' && 'EyeDropper' in window

  const [sRGBHex, setSRGBHex] = useState(initialValue)

  const open = useCallback(async (openOptions?: EyeDropperOpenOptions) => {
    if (!isSupported) {
      return
    }

    const eyeDropper = new window.EyeDropper()
    const result = await eyeDropper.open(openOptions)

    setSRGBHex(result.sRGBHex)

    return result
  }, [])

  return {
    isSupported,
    sRGBHex,
    open,
  }
}

export type UseEyeDropperReturn = ReturnType<typeof useEyeDropper>
