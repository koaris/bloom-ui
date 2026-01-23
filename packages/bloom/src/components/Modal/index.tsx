import { DetailedHTMLProps, HTMLAttributes, ReactNode, useEffect, useState, useRef } from 'react'
import { twMerge } from 'tailwind-merge'

export interface ModalProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    children: ReactNode;
    showCloseButton?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnEsc?: boolean;
    footer?: ReactNode;
}

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
    const modalRef = useRef<HTMLDivElement>(null)
    const portalRoot = useRef<HTMLElement | null>(null)
    const [mounted, setMounted] = useState(false)

    // Create portal root and manage body styles
    useEffect(() => {
        portalRoot.current = document.createElement('div')
        portalRoot.current.id = 'bloom-ui-portal-root'
        document.body.appendChild(portalRoot.current)
        setMounted(true)

        return () => {
            portalRoot.current?.remove()
            document.body.style.overflow = ''
        }
    }, [])

    // Handle body overflow
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = ''
        }
    }, [isOpen])

    // Handle ESC key press
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (isOpen && closeOnEsc && e.key === 'Escape') onClose()
        }

        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [isOpen, onClose, closeOnEsc])

    // Handle outside click
    const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
        if (closeOnOutsideClick && modalRef.current && !modalRef.current.contains(e.target as Node)) {
            onClose()
        }
    }

    // Size variants
    const sizeClasses = {
        sm: 'max-w-sm',
        md: 'max-w-md',
        lg: 'max-w-lg',
        xl: 'max-w-xl',
    }

    if (!isOpen || !mounted || !portalRoot.current) return null

    return (
        <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black bg-opacity-50 transition-opacity duration-300"
            onClick={handleBackdropClick}
            aria-modal="true"
            role="dialog"
            {...rest}
        >
            <div
                ref={modalRef}
                className={twMerge(
                    `relative bg-white dark:bg-gray-800 rounded-lg shadow-xl w-full 
                    ${sizeClasses[size]} opacity-100 scale-100 
                    transition-all duration-300 ease-in-out`,
                    className
                )}
            >
                {(title || showCloseButton) && (
                    <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-700">
                        {title && (
                            <h3 className="text-lg font-medium text-gray-900 dark:text-gray-100">
                                {title}
                            </h3>
                        )}
                        {showCloseButton && (
                            <button
                                type="button"
                                aria-label="Close modal"
                                onClick={onClose}
                                className="p-1 text-gray-400 hover:text-gray-500 focus:outline-hidden focus:ring-2 focus:ring-blue-500 rounded-full"
                            >
                                <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                    <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
                                </svg>
                            </button>
                        )}
                    </div>
                )}

                <div className="px-6 py-4 max-h-[70vh] overflow-y-auto">
                    {children}
                </div>

                {footer && (
                    <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-700">
                        {footer}
                    </div>
                )}
            </div>
        </div>
    )
}