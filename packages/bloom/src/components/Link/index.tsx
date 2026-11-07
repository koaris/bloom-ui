import { DetailedHTMLProps, AnchorHTMLAttributes, ReactNode } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface LinkProps extends DetailedHTMLProps<
  AnchorHTMLAttributes<HTMLAnchorElement>,
  HTMLAnchorElement
> {
  url: string
  /** Opens in a new tab with `rel="noopener noreferrer"`. Defaults to true. */
  newPage?: boolean
  disabled?: boolean
  children: ReactNode
}

export const Link = ({
  className,
  disabled,
  url,
  newPage = true,
  ...rest
}: LinkProps) => {
  return (
    <a
      className={twMerge(
        'font-bold text-accent underline-offset-2 hover:text-accent-hover hover:underline',
        typeof rest.children !== 'string' && 'px-4',
        disabled === true && 'opacity-50 cursor-not-allowed',
        className,
      )}
      href={url}
      {...(newPage && { target: '_blank', rel: 'noopener noreferrer' })}
      {...rest}
    />
  )
}
