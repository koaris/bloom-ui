import { SelectHTMLAttributes, forwardRef, useId } from 'react'
import { twMerge } from 'tailwind-merge'
import { fieldWellClasses } from '../Field'

export type SelectOption = { value: string; label: string }

export interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string
  hint?: string
  error?: string | null
  options: SelectOption[]
  containerClassName?: string
}

/** Labelled native `<select>` that lines up with `Field` in a settings row. */
export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  function Select(
    { label, hint, error, options, className, containerClassName, ...rest },
    ref,
  ) {
    const messageId = useId()
    const describedBy =
      [rest['aria-describedby'], error || hint ? messageId : undefined]
        .filter(Boolean)
        .join(' ') || undefined

    return (
      <label className={twMerge('flex flex-col gap-1.5', containerClassName)}>
        {label && <span className="text-sm font-medium text-ink">{label}</span>}
        <select
          ref={ref}
          className={twMerge(
            fieldWellClasses,
            'cursor-pointer px-3 py-2 text-sm',
            error ? 'border-accent' : 'border-rule focus:border-accent',
            className,
          )}
          {...rest}
          aria-invalid={error ? true : rest['aria-invalid']}
          aria-describedby={describedBy}
        >
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        {error ? (
          <span id={messageId} className="text-xs text-accent">
            {error}
          </span>
        ) : hint ? (
          <span id={messageId} className="text-xs text-ink-faint">
            {hint}
          </span>
        ) : null}
      </label>
    )
  },
)

Select.displayName = 'Select'
