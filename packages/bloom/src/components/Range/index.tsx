import { InputHTMLAttributes, ReactNode, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface RangeProps extends Omit<
  InputHTMLAttributes<HTMLInputElement>,
  'type'
> {
  label: string
  /** Readout shown after the label, e.g. "80" or "12%". */
  display?: ReactNode
  hint?: string
  containerClassName?: string
}

/** Labelled slider, laid out like `Field` and `Select` for settings rows. */
export const Range = forwardRef<HTMLInputElement, RangeProps>(function Range(
  { label, display, hint, className, containerClassName, ...rest },
  ref,
) {
  return (
    <label className={twMerge('flex flex-col gap-1.5', containerClassName)}>
      <span className="text-sm font-medium text-ink">
        {label}
        {display !== undefined && (
          <span className="ml-1.5 font-mono text-ink-muted">{display}</span>
        )}
      </span>
      <input
        ref={ref}
        type="range"
        className={twMerge(
          'h-[38px] w-full cursor-pointer accent-accent disabled:cursor-not-allowed disabled:opacity-50',
          className,
        )}
        {...rest}
      />
      {hint && <span className="text-xs text-ink-faint">{hint}</span>}
    </label>
  )
})

Range.displayName = 'Range'
