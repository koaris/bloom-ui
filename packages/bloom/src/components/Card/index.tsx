import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export type CardSize = 'small' | 'medium' | 'large' | 'full'
export type CardDirection = 'row' | 'col'

export interface CardProps
  extends Omit<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>,
    'title' | 'content'
  > {
  selected?: boolean
  disabled?: boolean
  direction?: CardDirection
  size?: CardSize
  image?: string
  imageSize?: string
  imageAlt?: string
  title?: ReactNode
  content?: ReactNode
  onClick?: () => void
  footer?: ReactNode
  hoverable?: boolean
}

const Card = ({
  className,
  selected = false,
  direction = 'row',
  size = 'medium',
  disabled = false,
  image,
  imageSize = '100px',
  imageAlt = '',
  title,
  content,
  onClick,
  footer,
  hoverable = true,
  ...rest
}: CardProps) => {
  const handleClick = () => {
    if (!disabled && onClick) {
      onClick()
    }
  }

  const cardSizeClasses = {
    small: 'max-w-xs p-3',
    medium: 'max-w-md p-4',
    large: 'max-w-lg p-5',
    full: 'w-full p-5',
  }

  return (
    <div
      className={twMerge(
        'flex items-center  rounded-lg bg-orange-500 text-neutral-100 transition-all duration-200',
        direction === 'col' ? 'flex-col' : 'flex-row',
        cardSizeClasses[size],
        hoverable && !disabled && 'hover:shadow-md hover:shadow-neutral-500',
        // selected && 'border-2 border-orange-500',
        disabled && 'opacity-50 cursor-not-allowed',
        onClick && !disabled && 'cursor-pointer',
        className,
      )}
      onClick={handleClick}
      role={onClick && !disabled ? 'button' : undefined}
      tabIndex={onClick && !disabled ? 0 : undefined}
      onKeyDown={(e) => {
        if ((e.key === 'Enter' || e.key === ' ') && onClick && !disabled) {
          e.preventDefault()
          onClick()
        }
      }}
      aria-disabled={disabled}
      {...rest}
    >
      {image && (
        <div
          className={twMerge(
            'flex-shrink-0',
            direction === 'row' ? 'mr-4' : 'mb-4',
            size === 'small' && direction === 'row' ? 'mr-3' : '',
            size === 'small' && direction === 'col' ? 'mb-3' : '',
          )}
        >
          <img
            src={image}
            alt={imageAlt}
            width={imageSize}
            height="auto"
            className="rounded object-cover"
          />
        </div>
      )}

      <div
        className={twMerge(
          'flex flex-col',
          direction === 'col' && 'text-center w-full',
          direction === 'row' && 'flex-1',
        )}
      >
        {title && (
          <h3 className="text-md text-left font-bold font-default leading-tight mb-1">
            {title}
          </h3>
        )}

        {content && (
          <div className={twMerge(
            'text-sm text-left',
            // direction === 'col' ? 'text-left' : 'text-left'
          )}>
            {content}
          </div>
        )}

        {footer && (
          <div className={twMerge(
            'pt-2 text-sm border-t border-neutral-300 text-left',
          )}>
            {footer}
          </div>
        )}
      </div>
    </div>
  )
}

Card.displayName = 'Card'

export { Card }