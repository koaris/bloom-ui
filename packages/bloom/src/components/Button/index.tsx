import {
  DetailedHTMLProps,
  ButtonHTMLAttributes,
  ReactNode,
  forwardRef,
} from 'react'
import { cva } from 'class-variance-authority'
import { Loader2 } from 'lucide-react'
import { cn } from '../../lib/utils'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonVariant =
  'primary' | 'secondary' | 'outline' | 'ghost' | 'link'

const buttonVariants = cva(
  'relative inline-flex items-center justify-center gap-2 font-medium rounded-md transition-all duration-200 cursor-pointer focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-surface',
  {
    variants: {
      variant: {
        primary:
          'bg-accent text-accent-foreground hover:brightness-110 active:brightness-95',
        secondary:
          'border border-accent bg-surface text-accent hover:bg-accent hover:text-accent-foreground',
        outline:
          'border border-accent bg-transparent text-accent hover:bg-muted',
        ghost: 'bg-transparent text-accent hover:bg-muted',
        link: 'bg-transparent text-accent underline-offset-4 hover:underline p-0 h-auto shadow-none focus-visible:ring-0',
      },
      size: {
        xs: 'px-3 py-1 text-xs',
        sm: 'px-5 py-1.5 text-sm',
        md: 'px-6 py-2 text-md',
        lg: 'px-8 py-3 text-lg',
      },
      fullWidth: {
        true: 'w-full',
        false: 'max-w-[180px]',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
      fullWidth: false,
    },
  },
)

export interface ButtonProps extends DetailedHTMLProps<
  ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> {
  size?: ButtonSize
  variant?: ButtonVariant
  disabled?: boolean
  loading?: boolean
  startIcon?: ReactNode
  endIcon?: ReactNode
  fullWidth?: boolean
  children: ReactNode
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = 'primary',
      size = 'md',
      disabled = false,
      loading = false,
      startIcon,
      endIcon,
      fullWidth = false,
      onClick,
      type = 'button',
      children,
      ...rest
    },
    ref,
  ) => {
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading || disabled) return
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        className={cn(
          buttonVariants({ variant, size, fullWidth }),
          (disabled || loading) &&
            'opacity-50 cursor-not-allowed pointer-events-none',
          className,
        )}
        type={type}
        onClick={handleClick}
        disabled={disabled || loading}
        aria-busy={loading || undefined}
        {...rest}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <Loader2 className="h-5 w-5 animate-spin" aria-hidden />
          </span>
        )}
        {/* opacity-0 (not visibility:hidden) keeps the accessible name */}
        <span className={cn('flex items-center gap-2', loading && 'opacity-0')}>
          {startIcon && <span className="mr-1">{startIcon}</span>}
          {children}
          {endIcon && <span className="ml-1">{endIcon}</span>}
        </span>
      </button>
    )
  },
)

Button.displayName = 'Button'
