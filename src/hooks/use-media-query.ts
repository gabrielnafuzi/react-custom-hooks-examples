import { useCallback, useSyncExternalStore } from 'react'

type MediaQuery = `(${string})`
type Listener = () => void

// Subscription function for media query change events
const subscribe = (listener: Listener, query: MediaQuery) => {
  const mediaQueryList = window.matchMedia(query)

  mediaQueryList.addEventListener('change', listener)

  // Unsubscribe function
  return () => {
    mediaQueryList.removeEventListener('change', listener)
  }
}

export const useMediaQuery = (query: MediaQuery) => {
  // useCallback ensures that subscribeMediaQuery function reference doesn't change
  // across re-renders, unless 'query' changes, avoiding unnecessary resubscriptions.
  const subscribeMediaQuery = useCallback(
    (listener: Listener) => subscribe(listener, query),
    [query]
  )

  return useSyncExternalStore(
    subscribeMediaQuery,
    () => window.matchMedia(query).matches,
    // In server-side rendering media queries don't apply, so return 'false'
    () => false
  )
}
