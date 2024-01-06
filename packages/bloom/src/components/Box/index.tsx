import { DetailedHTMLProps, HTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

export interface BoxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  children: React.ReactNode
  tag?: 'div' | 'section' | 'article' | 'aside' | 'header' | 'footer'
  variant?: 'primary' | 'secondary'
}

export const Box = ({
  className,
  children,
  tag = 'div',
  variant = 'secondary',
}: BoxProps) => {
  const Tag = tag as React.ElementType

  return (
    <Tag
      className={twMerge(
        'p-6 rounded-md bottom-1 border-2',
        variant === 'primary' &&
          'text-neutral-800 bg-neutral-200 border-neutral-300',
        variant === 'secondary' &&
          'text-neutral-200 bg-neutral-600 border-neutral-800',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
