import { useCallback, useEffect, useRef, useState } from 'react'

export interface UseCopyOptions {
  onCopied?: (text: string) => void
  onError?: (err: unknown) => void
  /** Milliseconds before `copied` flips back to false. Defaults to 2000. */
  resetAfter?: number
  /** Message exposed as `error` when the clipboard write fails. */
  errorMessage?: string
}

/**
 * Copy to the clipboard, flip a `copied` flag, reset it after `resetAfter`.
 * Pair `onCopied` with a toast instead of re-rolling the timeout per screen.
 */
export function useCopy({
  onCopied,
  onError,
  resetAfter = 2000,
  errorMessage = 'Could not copy. Select the result and copy it manually.',
}: UseCopyOptions = {}) {
  const [copied, setCopied] = useState(false)
  const [error, setError] = useState('')
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(
    () => () => {
      if (timeout.current) clearTimeout(timeout.current)
    },
    [],
  )

  const copy = useCallback(
    async (text: string) => {
      setError('')
      setCopied(false)
      try {
        await navigator.clipboard.writeText(text)
        setCopied(true)
        onCopied?.(text)
        if (timeout.current) clearTimeout(timeout.current)
        timeout.current = setTimeout(() => setCopied(false), resetAfter)
      } catch (err) {
        setError(errorMessage)
        onError?.(err)
      }
    },
    [onCopied, onError, resetAfter, errorMessage],
  )

  return { copied, copy, error }
}
