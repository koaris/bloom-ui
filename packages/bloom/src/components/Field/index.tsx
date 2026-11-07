import {
  InputHTMLAttributes,
  Ref,
  TextareaHTMLAttributes,
  forwardRef,
  useId,
} from 'react'
import { twMerge } from 'tailwind-merge'

interface FieldCommonProps {
  label?: string
  hint?: string
  /** Replaces the hint and marks the control invalid. */
  error?: string | null
  /** Monospace text, for code and data. */
  mono?: boolean
  containerClassName?: string
}

export type InputFieldProps = FieldCommonProps &
  InputHTMLAttributes<HTMLInputElement> & { as?: 'input' }

export type TextareaFieldProps = FieldCommonProps &
  TextareaHTMLAttributes<HTMLTextAreaElement> & { as: 'textarea' }

export type FieldProps = InputFieldProps | TextareaFieldProps

/** Shared look of text controls: a sunken well with an accent focus ring. */
export const fieldWellClasses =
  'w-full rounded border bg-surface-sunken text-ink placeholder:text-ink-faint outline-hidden transition-colors focus:ring-2 focus:ring-accent/30 disabled:cursor-not-allowed disabled:opacity-50'

/**
 * Labelled input or textarea (`as="textarea"`) in a sunken well, with a hint
 * or error line wired to `aria-describedby`. Forwards its ref to the control.
 */
export const Field = forwardRef<
  HTMLInputElement | HTMLTextAreaElement,
  FieldProps
>(function Field(props, ref) {
  const {
    label,
    hint,
    error,
    mono,
    className,
    containerClassName,
    as,
    ...rest
  } = props
  const messageId = useId()
  const describedBy =
    [rest['aria-describedby'], error || hint ? messageId : undefined]
      .filter(Boolean)
      .join(' ') || undefined
  const controlClass = twMerge(
    fieldWellClasses,
    error ? 'border-accent' : 'border-rule focus:border-accent',
    mono ? 'font-mono text-[13px] leading-relaxed' : 'text-sm',
    'px-3 py-2',
    as === 'textarea' && 'resize-y',
    className,
  )

  return (
    <label className={twMerge('flex flex-col gap-1.5', containerClassName)}>
      {label && <span className="text-sm font-medium text-ink">{label}</span>}
      {as === 'textarea' ? (
        <textarea
          ref={ref as Ref<HTMLTextAreaElement>}
          className={controlClass}
          {...(rest as TextareaHTMLAttributes<HTMLTextAreaElement>)}
          aria-invalid={error ? true : rest['aria-invalid']}
          aria-describedby={describedBy}
        />
      ) : (
        <input
          ref={ref as Ref<HTMLInputElement>}
          className={controlClass}
          {...(rest as InputHTMLAttributes<HTMLInputElement>)}
          aria-invalid={error ? true : rest['aria-invalid']}
          aria-describedby={describedBy}
        />
      )}
      {error ? (
        <span id={messageId} className="text-xs text-accent">
          {error}
        </span>
      ) : hint ? (
        <span id={messageId} className="text-xs text-ink-muted">
          {hint}
        </span>
      ) : null}
    </label>
  )
})

Field.displayName = 'Field'
