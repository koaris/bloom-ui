import { ButtonHTMLAttributes, DetailedHTMLProps } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  size?: 'sm' | 'md'
  variant?: 'primary' | 'secondary' | 'tertiary'
}

export const Button = ({
  className,
  variant = 'primary',
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex items-center justify-center  rounded-full px-4  py-2 text-md',
        className,
        variant === 'primary' && 'bg-orange500 text-slate-100',
        variant === 'secondary' && 'bg-red-500 text-black',
        variant === 'tertiary' && 'bg-orange-500 text-green-400',
      )}
      {...rest}
    />
  )
}
