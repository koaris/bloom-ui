import { twMerge } from 'tailwind-merge'
import { FaUser } from 'react-icons/fa'

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
        <FaUser color="#FFFFFF" size={24} />
      )}
    </div>
  )
}
