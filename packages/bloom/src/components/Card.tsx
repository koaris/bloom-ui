import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface CardProps extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>, // Change the type to HTMLDivElement
    HTMLDivElement
  > {
    variant?: 'primary',
    selected?: boolean,
    disabled?: boolean,
    image?: string // Add the image property
}

export const Card = ({
  className,
  variant = 'primary', 
  selected = false,
  disabled,
  ...rest
}: CardProps) => {
  return (
    <div
      className={twMerge(
        'flex flex-col items-center justify-center rounded-lg px-8 py-4 w-64',
        className,
        variant === 'primary' && 'bg-neutral text-neutral-1000',
        selected === true && 'border-2 border-orange-500',
        disabled === true && 'opacity-50 cursor-not-allowed'
      )}
    >
      <img src={rest.image} alt={rest.title} />
      <h1 className='text-xl font-bold font-default leading-tight'>{rest.title}</h1>
      <p className=''>{rest.content}</p>
    </div>
  )
}