import { SVGProps } from 'react'

/**
 * Inline icons, so the package has no icon dependency. `react-icons` v4 ships
 * directory imports (`react-icons/fi`) that Node's ESM loader rejects with
 * ERR_UNSUPPORTED_DIR_IMPORT, which broke importing bloom-ui in tests and
 * other non-bundled runtimes.
 */
export type IconProps = Omit<SVGProps<SVGSVGElement>, 'ref'> & {
  size?: number | string
}

const stroked = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 2,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
} as const

export const CheckIcon = ({ size = '1em', ...props }: IconProps) => (
  <svg
    {...stroked}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
)

export const XIcon = ({ size = '1em', ...props }: IconProps) => (
  <svg
    {...stroked}
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
)

export const UserIcon = ({ size = '1em', ...props }: IconProps) => (
  <svg
    viewBox="0 0 448 512"
    fill="currentColor"
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
  </svg>
)

export const CopyIcon = ({ size = '1em', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm0 16H8V7h11v14z" />
  </svg>
)

export const CopiedIcon = ({ size = '1em', ...props }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    width={size}
    height={size}
    aria-hidden="true"
    focusable="false"
    {...props}
  >
    <path d="M9 16.17 4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z" />
  </svg>
)

export const Spinner = ({ className = '' }: { className?: string }) => (
  <svg
    className={`animate-spin ${className}`}
    viewBox="0 0 24 24"
    fill="none"
    aria-hidden="true"
    focusable="false"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="currentColor"
      strokeWidth="4"
    />
    <path
      className="opacity-75"
      fill="currentColor"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
    />
  </svg>
)
