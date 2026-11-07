import { ChangeEvent, forwardRef, useId } from 'react'

export interface DropZoneProps {
  label?: string
  accept?: string
  hint?: string
  multiple?: boolean
  onChange: (e: ChangeEvent<HTMLInputElement>) => void
  title?: string
}

/**
 * File picker styled as a dashed drop area: the whole area is the native file
 * input, so clicking and dropping a file both work without extra handlers.
 */
export const DropZone = forwardRef<HTMLInputElement, DropZoneProps>(
  function DropZone(
    {
      label,
      accept = 'image/*',
      hint = 'PNG, JPG or GIF, up to 10 MB',
      multiple = false,
      onChange,
      title = 'Click to choose a file, or drop one here',
    },
    ref,
  ) {
    const hintId = useId()
    return (
      <div className="flex flex-col gap-1.5">
        {label && <span className="text-sm font-medium text-ink">{label}</span>}
        <div className="relative rounded focus-within:ring-2 focus-within:ring-accent">
          <input
            ref={ref}
            type="file"
            aria-label={label || title}
            aria-describedby={hint ? hintId : undefined}
            accept={accept}
            multiple={multiple}
            onChange={onChange}
            className="absolute inset-0 z-10 h-full w-full cursor-pointer opacity-0"
          />
          <div className="flex flex-col items-center gap-2 rounded border border-dashed border-rule bg-surface-sunken p-6 text-center transition-colors hover:border-accent">
            <svg
              className="h-10 w-10 text-ink-faint"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              aria-hidden="true"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <p className="text-sm text-ink-muted">{title}</p>
            {hint && (
              <p id={hintId} className="text-xs text-ink-muted">
                {hint}
              </p>
            )}
          </div>
        </div>
      </div>
    )
  },
)

DropZone.displayName = 'DropZone'
