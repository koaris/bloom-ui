import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface ButtonProps extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'sm' | 'md'
  variant?: 'primary' | 'secondary'
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center rounded-lg px-8 py-2 text-md font-medium',
        className,
        variant === 'primary' && 'bg-orange-300 text-white-100',
        variant === 'secondary' && 'bg-white-100 text-orange-300 border border-orange-300',
        size === 'sm' && 'px-6 py-1',
      )}
      {...rest}
    />
  )
}
