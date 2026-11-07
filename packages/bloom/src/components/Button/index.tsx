import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react'
import { twMerge } from 'tailwind-merge'
import { Spinner } from '../icons'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonVariant =
  'primary' | 'secondary' | 'outline' | 'ghost' | 'link'

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  size?: ButtonSize
  /**
   * `primary` is the one accent action on a screen; everything else stays
   * `secondary` (the default) or `ghost`.
   */
  variant?: ButtonVariant
  disabled?: boolean
  /** Shows a spinner, disables the button and keeps the label visible. */
  loading?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
  children: ReactNode
}

const base =
  'inline-flex cursor-pointer items-center justify-center gap-2 rounded font-medium transition-colors ' +
  'focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-1 focus-visible:ring-offset-bg ' +
  'disabled:cursor-not-allowed disabled:opacity-50'

const variantClasses: Record<ButtonVariant, string> = {
  primary: 'bg-accent text-accent-contrast hover:bg-accent-hover',
  secondary: 'bg-surface text-ink border border-rule hover:bg-surface-sunken',
  outline:
    'bg-transparent text-accent border border-accent hover:bg-accent-wash',
  ghost: 'bg-transparent text-ink-muted hover:bg-surface-sunken hover:text-ink',
  link: 'bg-transparent text-accent underline-offset-2 hover:underline hover:text-accent-hover',
}

const sizeClasses: Record<ButtonSize, string> = {
  xs: 'px-2 py-1 text-xs',
  sm: 'px-3 py-1.5 text-sm',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-base',
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'secondary',
      size = 'md',
      disabled = false,
      loading = false,
      startIcon,
      endIcon,
      fullWidth = false,
      children,
      ...rest
    },
    ref,
  ) => {
    return (
      <button
        ref={ref}
        className={twMerge(
          base,
          variantClasses[variant],
          sizeClasses[size],
          variant === 'link' && 'p-0',
          fullWidth && 'w-full',
          className,
        )}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading ? (
          <Spinner className="h-4 w-4 motion-reduce:hidden" />
        ) : (
          startIcon
        )}
        {children}
        {endIcon}
      </button>
    )
  },
)

Button.displayName = 'Button'
