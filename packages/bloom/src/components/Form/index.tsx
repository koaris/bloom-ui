import { DetailedHTMLProps, FormHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface FormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {}

export const Form = ({
  className,
  ...rest
}: FormProps) => {
  return (
    <form
        {...rest} 
        onSubmit={rest.onSubmit}
    >
        {rest.children}
    </form>
  )
}
