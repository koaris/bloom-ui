import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ToggleProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  disabled?: boolean
  active: boolean;
  label: string
  setActive: (active: boolean) => void;
  size?: 'sm' | 'md' | 'lg';
  hideLabel?: boolean;
  id?: string;
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
  // Generate a unique ID if none is provided
  const toggleId = id || `toggle-${Math.random().toString(36).substring(2, 9)}`;

  // Size variants
  const sizeClasses = {
    sm: {
      toggle: 'h-5 w-9',
      knob: 'h-3 w-3',
      translate: active ? 'translate-x-5' : 'translate-x-1',
    },
    md: {
      toggle: 'h-6 w-11',
      knob: 'h-4 w-4',
      translate: active ? 'translate-x-6' : 'translate-x-1',
    },
    lg: {
      toggle: 'h-7 w-14',
      knob: 'h-5 w-5',
      translate: active ? 'translate-x-8' : 'translate-x-1',
    },
  };

  const selectedSize = sizeClasses[size];

  // Handle keyboard events for accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      if (!disabled) {
        setActive(!active);
      }
    }
  };

  return (
    <div
      className={twMerge("flex items-center gap-3", className)}
      {...rest}
    >
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
        className={twMerge(`
          relative inline-flex items-center rounded-full
          ${selectedSize.toggle}
          ${active ? 'bg-blue-600' : 'bg-gray-300 dark:bg-gray-600'}
          ${disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
          transition-colors duration-300 ease-in-out 
          focus:outline-hidden focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
        `)}
      >
        <span className={`
          inline-block transform rounded-full bg-white shadow-md
          ${selectedSize.knob}
          ${selectedSize.translate}
          transition-transform duration-300 ease-in-out
        `} />
      </button>
      {!hideLabel && (
        <label
          id={`${toggleId}-label`}
          htmlFor={toggleId}
          className={`text-sm font-medium text-gray-700 dark:text-gray-300 ${disabled ? 'opacity-50' : ''}`}
        >
          {label}
        </label>
      )}
    </div>
  )
}