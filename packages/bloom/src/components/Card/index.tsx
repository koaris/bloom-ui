import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export type CardSize = 'small' | 'medium' | 'large' | 'full'
export type CardDirection = 'row' | 'col'

export interface CardProps extends Omit<
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

const cardVariants = cva(
  'flex rounded-lg bg-surface text-ink border border-border shadow-md transition-all duration-200',
  {
    variants: {
      direction: {
        row: 'flex-row',
        col: 'flex-col',
      },
      size: {
        small: 'max-w-xs p-3',
        medium: 'max-w-md p-4',
        large: 'max-w-lg p-5',
        full: 'w-full p-5',
      },
      hoverable: {
        true: 'hover:shadow-lg hover:border-accent',
        false: '',
      },
      selected: {
        true: 'border-2 border-accent',
        false: '',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
      clickable: {
        true: 'cursor-pointer',
        false: '',
      },
    },
    defaultVariants: {
      direction: 'row',
      size: 'medium',
      hoverable: true,
      selected: false,
      disabled: false,
      clickable: false,
    },
  },
)

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

  return (
    <div
      className={cn(
        cardVariants({
          direction,
          size,
          hoverable: hoverable && !disabled,
          selected,
          disabled,
          clickable: !!onClick && !disabled,
        }),
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
      aria-disabled={disabled || undefined}
      {...rest}
    >
      {image && (
        <div
          className={cn(
            'shrink-0',
            direction === 'row' ? 'mr-4' : 'mb-4',
            size === 'small' && direction === 'row' && 'mr-3',
            size === 'small' && direction === 'col' && 'mb-3',
          )}
        >
          <img
            src={image}
            alt={imageAlt}
            width={imageSize}
            height="auto"
            className="rounded-sm object-cover"
          />
        </div>
      )}

      <div
        className={cn(
          'flex flex-col',
          direction === 'col' && 'text-center w-full',
          direction === 'row' && 'flex-1',
        )}
      >
        {title ? (
          <h3 className="text-md text-left font-bold leading-tight mb-1">
            {title}
          </h3>
        ) : null}

        {content ? <div className="text-sm text-left">{content}</div> : null}

        {footer ? (
          <div className="pt-2 text-sm border-t border-border text-left">
            {footer}
          </div>
        ) : null}
      </div>
    </div>
  )
}

Card.displayName = 'Card'

export { Card }
