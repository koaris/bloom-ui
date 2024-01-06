import { DetailedHTMLProps, FormHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface FormProps
  extends DetailedHTMLProps<
    FormHTMLAttributes<HTMLFormElement>,
    HTMLFormElement
  > {
  children: React.ReactNode
  variant?: 'primary' | 'secondary'
  orientation?: 'row' | 'col'
  handleSubmit?: (event: React.FormEvent<HTMLFormElement>) => void
}

export const Form = ({
  className,
  children,
  variant = 'secondary',
  orientation = 'row',
  ...rest
}: FormProps) => {
  return (
    <form
      className={twMerge(
        'flex flex-row gap-2 p-6 rounded-md border-2',
        variant === 'primary' &&
          'text-neutral-800 bg-neutral-200 border-neutral-300',
        variant === 'secondary' &&
          'text-neutral-200 bg-neutral-600 border-neutral-800',
        orientation === 'col' && 'flex-col',
        className,
      )}
      {...rest}
    >
      {children}
    </form>
  )
}
