import { twMerge } from 'tailwind-merge'

export const cn = (...classList: Parameters<typeof twMerge>) =>
  twMerge(classList)

// eslint-disable-next-line @typescript-eslint/no-empty-function
export const noop = () => {}
