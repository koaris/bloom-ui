import { DetailedHTMLProps, ButtonHTMLAttributes, ReactNode, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg'
export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'link'

export interface ButtonProps
  extends DetailedHTMLProps<
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
      children,
      ...rest
    },
    ref
  ) => {
    const sizeClasses = {
      xs: 'px-3 py-1 text-xs',
      sm: 'px-5 py-1.5 text-sm',
      md: 'px-6 py-2 text-md',
      lg: 'px-8 py-3 text-lg',
    }

    const variantClasses = {
      primary: 'bg-orange-500 text-neutral hover:bg-orange-700 focus:ring-orange-500',
      secondary: 'bg-neutral text-orange-500 border border-orange-500 hover:text-neutral hover:bg-orange-500 focus:ring-orange-500',
      outline: 'bg-transparent text-orange-500 border border-orange-500 hover:bg-orange-50 focus:ring-orange-500',
      ghost: 'bg-transparent text-orange-500 hover:bg-orange-50 focus:ring-orange-500',
      link: 'bg-transparent text-orange-500 hover:underline p-0 h-auto shadow-none focus:ring-0',
    }

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (loading || disabled) return
      onClick?.(e)
    }

    return (
      <button
        ref={ref}
        className={twMerge(
          'relative font-medium rounded-sm transition-all duration-200',
          'focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-md focus:ring-opacity-50',
          variantClasses[variant],
          sizeClasses[size],
          fullWidth ? 'w-full' : 'max-w-[180px]',
          'inline-flex items-center justify-center gap-2',
          (disabled || loading) && 'opacity-50 cursor-not-allowed hover:shadow-none hover:bg-opacity-100',
          className,
        )}
        onClick={handleClick}
        disabled={disabled || loading}
        {...rest}
      >
        {loading && (
          <span className="absolute inset-0 flex items-center justify-center">
            <svg
              className="animate-spin h-5 w-5"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                className="opacity-25"
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                className="opacity-75"
                fill="currentColor"
                d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
              />
            </svg>
          </span>
        )}

        {/* Button content with loading state handling */}
        <span className={loading ? 'invisible' : 'flex items-center gap-2'}>
          {startIcon && <span className="mr-1">{startIcon}</span>}
          {children}
          {endIcon && <span className="ml-1">{endIcon}</span>}
        </span>
      </button>
    )
  }
)

Button.displayName = 'Button'

export default Button