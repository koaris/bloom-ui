import { twMerge } from 'tailwind-merge'
import { UserIcon } from '../icons'

export interface AvatarProps {
  src?: string
  alt?: string
  className?: string
}

export const Avatar = ({ className, src, alt = '', ...rest }: AvatarProps) => {
  return (
    <div
      className={twMerge(
        `
            rounded-full w-16 h-16 overflow-hidden flex items-center
            bg-neutral-600 justify-center`,
        className,
      )}
    >
      {src ? (
        <img
          className="w-full h-full object-cover rounded-full"
          src={src}
          alt={alt}
          {...rest}
        />
      ) : (
        <UserIcon color="#FFFFFF" size={24} />
      )}
    </div>
  )
}
