import { DetailedHTMLProps, AnchorHTMLAttributes } from 'react'
import { twMerge } from 'tailwind-merge'

/**
 * Primary UI component for user interaction
 */
export interface LinkProps
  extends DetailedHTMLProps<
    AnchorHTMLAttributes<HTMLAnchorElement>,
    HTMLAnchorElement
  > {
  url: string
  newPage: boolean
  disabled?: boolean
  children: string | JSX.Element
}

export const Link = ({
  className,
  disabled,
  url,
  newPage = true,
  onClick,
  ...rest
}: LinkProps) => {
  return (
    <a
      className={twMerge(
        'text-blue-800 font-bold',
        typeof rest.children !== 'string' && 'px-4',
        disabled === true && 'opacity-50 cursor-not-allowed',
        className,
      )}
      href={url}
      {...newPage && { target: "_blank", rel: "noopener noreferrer" }}
      {...rest}
    />
  )
}
