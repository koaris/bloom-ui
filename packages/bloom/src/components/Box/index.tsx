import { DetailedHTMLProps, HTMLAttributes, forwardRef } from 'react'
import { twMerge } from 'tailwind-merge'

export type BoxVariant = 'primary' | 'secondary' | 'ghost' | 'outline'
export type BoxSize = 'sm' | 'md' | 'lg' | 'xl'

export interface BoxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode
  tag?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer' | 'main' | 'nav'
  variant?: BoxVariant
  size?: BoxSize
  elevated?: boolean
  hasBorder?: boolean
  isInteractive?: boolean
  fullWidth?: boolean
}

const Box = forwardRef<HTMLDivElement, BoxProps>(({
  className,
  children,
  tag = 'div',
  variant = 'secondary',
  size = 'md',
  elevated = false,
  hasBorder = true,
  isInteractive = false,
  fullWidth = false,
  ...props
}, ref) => {
  const Tag = tag as React.ElementType

  const variantStyles = {
    primary: 'text-neutral-800 bg-neutral-200 border-neutral-300',
    secondary: 'text-neutral-200 bg-neutral-600 border-neutral-800',
    ghost: 'text-neutral-800 bg-transparent border-transparent',
    outline: 'text-neutral-800 bg-transparent border-neutral-300',
  }

  const sizeStyles = {
    sm: 'p-3 text-sm',
    md: 'p-6 text-base',
    lg: 'p-8 text-lg',
    xl: 'p-10 text-xl',
  }

  const elevationStyles = elevated
    ? 'shadow-md hover:shadow-lg transition-shadow duration-200'
    : ''

  const borderStyles = hasBorder
    ? 'border'
    : 'border-0'

  const interactiveStyles = isInteractive
    ? 'cursor-pointer hover:brightness-105 active:brightness-95 transition-all duration-200'
    : ''

  const widthStyles = fullWidth
    ? 'w-full'
    : ''

  return (
    <Tag
      ref={ref}
      className={twMerge(
        'rounded-md',
        borderStyles,
        sizeStyles[size],
        variantStyles[variant],
        elevationStyles,
        interactiveStyles,
        widthStyles,
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
})

Box.displayName = 'Box'

export { Box }