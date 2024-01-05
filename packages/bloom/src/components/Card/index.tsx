import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface CardProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>, // Change the type to HTMLDivElement
    HTMLDivElement
  > {
  selected?: boolean
  disabled?: boolean
  direction?: string
  size?: string
  imageSize: string
  image?: string // Add the image property
  onClick?: () => void
}

export const Card = ({
  className,
  selected = false,
  direction,
  size,
  disabled,
  imageSize,
  onClick,
  ...rest
}: CardProps) => {
  return (
    <div
      className={twMerge(
        'flex items-center justify-center rounded-lg cursor-pointer bg-neutral',
        'hover:shadow-md hover:shadow-neutral-500 border border-neutral-500 text-neutral-1000',
        size === 'medium' && 'w-64 px-8 py-4',
        size === 'large' && 'w-96 pr-5',
        direction === 'col' && 'flex-col',
        selected === true && 'border-2 border-orange-500',
        disabled === true && 'opacity-50 cursor-not-allowed',
        className,
      )}
      onClick={onClick}
    >
      <img src={rest.image} alt={rest.title} width={imageSize} />
      <aside className={twMerge(direction === 'col' && 'text-center')}>
        <h1 className="text-xl font-bold font-default leading-tight">
          {rest.title}
        </h1>
        <p className="">{rest.content}</p>
      </aside>
    </div>
  )
}
