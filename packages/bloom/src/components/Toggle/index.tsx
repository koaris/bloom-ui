import { DetailedHTMLProps, HTMLAttributes, KeyboardEvent, useId } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ToggleProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  disabled?: boolean
  active: boolean
  label: string
  setActive: (active: boolean) => void
  size?: 'sm' | 'md' | 'lg'
  hideLabel?: boolean
  id?: string
}

const sizeClasses = {
  sm: { track: 'h-5 w-9', knob: 'h-3 w-3', on: 'translate-x-5' },
  md: { track: 'h-6 w-11', knob: 'h-4 w-4', on: 'translate-x-6' },
  lg: { track: 'h-7 w-14', knob: 'h-5 w-5', on: 'translate-x-8' },
}

export const Toggle = ({
  className,
  disabled,
  active,
  label,
  setActive,
  size = 'md',
  hideLabel = false,
  id,
  ...rest
}: ToggleProps) => {
  // useId is stable between server and client renders, unlike a random id.
  const generatedId = useId()
  const toggleId = id || `toggle-${generatedId}`
  const selectedSize = sizeClasses[size]

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      if (!disabled) {
        setActive(!active)
      }
    }
  }

  return (
    <div className={twMerge('flex items-center gap-3', className)} {...rest}>
      <button
        type="button"
        role="switch"
        aria-checked={active}
        aria-labelledby={hideLabel ? undefined : `${toggleId}-label`}
        aria-label={hideLabel ? label : undefined}
        id={toggleId}
        disabled={disabled}
        onClick={() => setActive(!active)}
        onKeyDown={handleKeyDown}
        className={twMerge(
          'relative inline-flex shrink-0 items-center rounded-full transition-colors duration-200 ease-in-out',
          'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-1 focus-visible:ring-offset-bg',
          selectedSize.track,
          active ? 'bg-accent' : 'bg-rule',
          disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
        )}
      >
        <span
          className={twMerge(
            'inline-block transform rounded-full bg-white shadow-sm transition-transform duration-200 ease-in-out',
            selectedSize.knob,
            active ? selectedSize.on : 'translate-x-1',
          )}
        />
      </button>
      {!hideLabel && (
        <label
          id={`${toggleId}-label`}
          htmlFor={toggleId}
          className={twMerge(
            'cursor-pointer select-none text-sm font-medium text-ink',
            disabled && 'cursor-not-allowed opacity-50',
          )}
        >
          {label}
        </label>
      )}
    </div>
  )
}
