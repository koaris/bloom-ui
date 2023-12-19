import { DetailedHTMLProps, InputHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface RadioProps extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>, // Change the type to HTMLInputElement
    HTMLInputElement
  > {
    variant?: 'primary',
    selected?: boolean,
    disabled?: boolean,
}

export const Radio = ({
  className,
  variant = 'primary', 
  selected = false,
  disabled,
  ...rest
}: RadioProps) => {
  return (
    <input
      type='radio'
      className={twMerge(
        'form-radio bg-orange-500 text-orange-500 checked:border-orange-500',
        className,
        variant === 'primary' && 'border-2',
        disabled === true && 'opacity-50 cursor-not-allowed'
      )}
    >
    </input>
  )
}