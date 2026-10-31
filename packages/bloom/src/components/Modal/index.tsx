import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export interface ModalProps extends DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> {
  isOpen: boolean
  onClose: () => void
  title?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children: ReactNode
  showCloseButton?: boolean
  closeOnOutsideClick?: boolean
  closeOnEsc?: boolean
  footer?: ReactNode
}

const modalVariants = cva(
  'relative bg-surface text-ink rounded-lg shadow-xl w-full max-h-[70vh] overflow-y-auto focus:outline-hidden',
  {
    variants: {
      size: {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
      },
    },
    defaultVariants: {
      size: 'md',
    },
  },
)

export const Modal = ({
  className,
  isOpen,
  onClose,
  title,
  size = 'md',
  children,
  showCloseButton = true,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  footer,
  ...rest
}: ModalProps) => {
  const handleOpenChange = (open: boolean) => {
    if (!open) onClose()
  }

  return (
    <Dialog.Root open={isOpen} onOpenChange={handleOpenChange}>
      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 transition-opacity duration-300" />
        <Dialog.Content
          className={cn(modalVariants({ size }), className)}
          onEscapeKeyDown={(e) => {
            if (!closeOnEsc) e.preventDefault()
          }}
          onInteractOutside={(e) => {
            if (!closeOnOutsideClick) e.preventDefault()
          }}
          onOpenAutoFocus={(e) => e.preventDefault()}
          {...(rest as Record<string, unknown>)}
        >
          <Dialog.Title className="sr-only">{title ?? 'Dialog'}</Dialog.Title>

          {(title || showCloseButton) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-border">
              {title && (
                <h3 className="text-lg font-medium text-ink">{title}</h3>
              )}
              {showCloseButton && (
                <Dialog.Close
                  type="button"
                  aria-label="Close modal"
                  className="p-1 text-muted-foreground hover:text-ink focus:outline-hidden focus-visible:ring-2 focus-visible:ring-accent rounded-full cursor-pointer"
                >
                  <X className="h-5 w-5" aria-hidden />
                </Dialog.Close>
              )}
            </div>
          )}

          <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
            {children}
          </div>

          {footer ? (
            <div className="px-6 py-4 border-t border-border">{footer}</div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
