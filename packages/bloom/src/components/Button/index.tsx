import { DetailedHTMLProps, ButtonHTMLAttributes } from 'react'
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
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  children: string | JSX.Element
}

export const Button = ({
  className,
  variant = 'primary',
  size = 'md',
  disabled,
  onClick,
  ...rest
}: ButtonProps) => {
  return (
    <button
      className={twMerge(
        'flex gap-4 items-center justify-center rounded-sm px-8 py-2 text-md font-medium hover:shadow-md hover:shadow-neutral-500 w-full max-w-[180px]',
        variant === 'primary' &&
          'bg-orange-500 text-neutral hover:bg-orange-700',
        variant === 'secondary' &&
          'bg-neutral text-orange-500 border border-orange-500 hover:text-orange-100 hover:bg-orange-500',
        size === 'sm' && 'px-6 py-1',
        typeof rest.children !== 'string' && 'px-4',
        disabled === true && 'opacity-50 cursor-not-allowed',
        className,
      )}
      onClick={onClick}
      {...rest}
    />
  )
}
