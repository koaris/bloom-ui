import { twMerge } from 'tailwind-merge'
import { CopiedIcon, CopyIcon } from '../icons'
import { useCopy } from '../useCopy'
import { useOutputPanelStrings } from './strings'

export * from './strings'

export interface OutputPanelProps {
  value: string
  /** Shown, muted, while there is no result yet. */
  placeholder?: string
  label?: string
  /** Fires after a successful copy; use it for a toast. */
  onCopied?: (text: string) => void
  className?: string
  minHeight?: string
  /** Copy button label, before and after a successful copy. */
  copyLabel?: string
  copiedLabel?: string
  /** Word after the character count, e.g. "chars" → "215 chars". */
  charsSuffix?: string
  /** Message shown when the clipboard write fails. */
  copyErrorMessage?: string
}

/**
 * Read-only result well: monospace value, a built-in Copy button and a
 * character count. Explicit props win over `OutputPanelStringsProvider`.
 */
export function OutputPanel({
  value,
  placeholder,
  label,
  onCopied,
  className,
  minHeight = '7rem',
  copyLabel,
  copiedLabel,
  charsSuffix,
  copyErrorMessage,
}: OutputPanelProps) {
  const strings = useOutputPanelStrings()
  const isEmpty = value.length === 0
  const { copied, copy, error } = useCopy({
    onCopied,
    errorMessage: copyErrorMessage ?? strings.copyErrorMessage,
  })

  return (
    <div className={twMerge('relative', className)}>
      <div className="mb-1.5 flex items-center justify-between">
        <span className="text-sm font-medium text-ink">
          {label ?? strings.label}
        </span>
        <button
          type="button"
          onClick={() => !isEmpty && copy(value)}
          disabled={isEmpty}
          className="inline-flex min-h-6 cursor-pointer items-center gap-1 rounded px-2 py-1 text-xs font-medium text-ink-muted transition-colors hover:bg-surface-sunken hover:text-ink disabled:cursor-not-allowed disabled:opacity-40"
        >
          {copied ? (
            <CopiedIcon className="text-sm text-accent" />
          ) : (
            <CopyIcon className="text-sm" />
          )}
          {copied
            ? (copiedLabel ?? strings.copiedLabel)
            : (copyLabel ?? strings.copyLabel)}
        </button>
      </div>

      <output
        className={twMerge(
          'block w-full animate-pulse-once whitespace-pre-wrap break-words rounded border border-rule bg-surface-sunken p-3 font-mono text-[13px] leading-relaxed motion-reduce:animate-none',
          isEmpty ? 'text-ink-muted' : 'text-ink',
        )}
        style={{ minHeight }}
      >
        {isEmpty ? (placeholder ?? strings.placeholder) : value}
      </output>
      {error && (
        <p role="status" className="mt-2 text-xs text-ink-muted">
          {error}
        </p>
      )}

      {!isEmpty && (
        <span className="pointer-events-none absolute bottom-2 right-2 rounded bg-surface/80 px-1.5 py-0.5 font-mono text-[11px] text-ink-faint">
          {value.length}
          {` ${charsSuffix ?? strings.charsSuffix}`}
        </span>
      )}
    </div>
  )
}
