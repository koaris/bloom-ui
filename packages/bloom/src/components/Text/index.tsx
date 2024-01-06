import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLLabelElement>,
    HTMLLabelElement
  > {
  children: ReactNode
  color?: string
  size?:
    | 'xxs'
    | 'xs'
    | 'sm'
    | 'md'
    | 'lg'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | '6xl'
    | '7xl'
    | '8xl'
    | '9xl'
  tag?: 'p' | 'strong' | 'span' | 'label'
  htmlFor?: string
}

export const Text = ({
  children,
  color = 'neutral-800',
  size = 'md',
  tag = 'p',
  className,
  ...rest
}: TextProps) => {
  const fontSize = {
    xxs: 'text-xxs',
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-md',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  }[size]

  const Tag = tag as React.ElementType

  return (
    <Tag {...rest} className={twMerge(`text-${color} ${fontSize}`, className)}>
      {children}
    </Tag>
  )
}
