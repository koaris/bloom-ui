import { ReactNode, ComponentPropsWithoutRef } from 'react'
import * as Dialog from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export interface ModalProps
  extends Omit<
    ComponentPropsWithoutRef<typeof Dialog.Content>,
    'title' | 'children'
  > {
  isOpen: boolean
  onClose: () => void
  title?: string
  description?: string
  size?: 'sm' | 'md' | 'lg' | 'xl'
  children?: ReactNode
  showCloseButton?: boolean
  closeOnOutsideClick?: boolean
  closeOnEsc?: boolean
  footer?: ReactNode
}

const modalVariants = cva(
  // Fixed, centered and above the overlay (z-50). max-h lives here so the
  // body below is the only scrolling region (no double scrollbars).
  'fixed left-1/2 top-1/2 z-50 -translate-x-1/2 -translate-y-1/2 flex flex-col max-h-[85vh] bg-surface text-ink rounded-lg shadow-xl focus:outline-hidden',
  {
    variants: {
      size: {
        sm: 'max-w-sm w-[calc(100%-2rem)]',
        md: 'max-w-md w-[calc(100%-2rem)]',
        lg: 'max-w-lg w-[calc(100%-2rem)]',
        xl: 'max-w-xl w-[calc(100%-2rem)]',
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
  description,
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
          aria-describedby={undefined}
          {...rest}
        >
          {(title || showCloseButton) && (
            <div className="flex items-center justify-between px-6 py-4 border-b border-border shrink-0">
              {title ? (
                <Dialog.Title className="text-lg font-medium text-ink">
                  {title}
                </Dialog.Title>
              ) : (
                <Dialog.Title className="sr-only">Dialog</Dialog.Title>
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

          {!title && !showCloseButton && (
            <Dialog.Title className="sr-only">Dialog</Dialog.Title>
          )}

          <div className="px-6 py-4 overflow-y-auto">
            {description && (
              <Dialog.Description className="mb-2 text-sm text-muted-foreground">
                {description}
              </Dialog.Description>
            )}
            {children}
          </div>

          {footer ? (
            <div className="px-6 py-4 border-t border-border shrink-0">
              {footer}
            </div>
          ) : null}
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  )
}
