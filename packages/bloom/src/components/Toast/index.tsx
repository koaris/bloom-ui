'use client'
import React, { useEffect, useState } from 'react'
import * as ToastPrimitive from '@radix-ui/react-toast'
import { cva } from 'class-variance-authority'
import { CircleAlert, CircleCheck, TriangleAlert, Info, X } from 'lucide-react'
import { cn } from '../../lib/utils'

export type ToastVariant = 'success' | 'error' | 'warning' | 'info'
export type ToastPosition =
  | 'top-right'
  | 'top-left'
  | 'bottom-right'
  | 'bottom-left'
  | 'top-center'
  | 'bottom-center'

export interface ToastProps {
  id: string
  message: string
  title?: string
  variant?: ToastVariant
  duration?: number
  showCloseButton?: boolean
  onDismiss?: (id: string) => void
  className?: string
}

export interface ToastContainerProps {
  position?: ToastPosition
  className?: string
}

type ToastListener = (nextToasts: ToastProps[]) => void

// Toast service for global state management
class ToastService {
  private listeners = new Set<ToastListener>()
  private toasts: ToastProps[] = []

  public subscribe(listener: ToastListener): () => void {
    this.listeners.add(listener)
    return () => {
      this.listeners.delete(listener)
    }
  }

  private notify() {
    this.listeners.forEach((listener) => listener([...this.toasts]))
  }

  public showToast(toast: Omit<ToastProps, 'id' | 'onDismiss'>): string {
    const id = `toast-${Date.now()}`
    this.toasts.push({
      ...toast,
      id,
    })
    this.notify()
    return id
  }

  public hideToast(id: string): void {
    this.toasts = this.toasts.filter((toast) => toast.id !== id)
    this.notify()
  }

  public clearToasts(): void {
    this.toasts = []
    this.notify()
  }

  public getToasts(): ToastProps[] {
    return [...this.toasts]
  }
}

export const toastService = new ToastService()

const toastVariants = cva(
  'flex items-start p-4 w-full max-w-xs rounded-md shadow-md border-l-4 bg-surface text-ink transition-all duration-300',
  {
    variants: {
      variant: {
        success: 'border-success',
        error: 'border-danger',
        warning: 'border-orange-400',
        info: 'border-blue-500',
      },
    },
    defaultVariants: {
      variant: 'info',
    },
  },
)

const variantIcons: Record<ToastVariant, React.ReactNode> = {
  success: <CircleCheck className="w-5 h-5 text-success" aria-hidden />,
  error: <CircleAlert className="w-5 h-5 text-danger" aria-hidden />,
  warning: <TriangleAlert className="w-5 h-5 text-orange-400" aria-hidden />,
  info: <Info className="w-5 h-5 text-blue-500" aria-hidden />,
}

const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-0 right-0',
  'top-left': 'top-0 left-0',
  'bottom-right': 'bottom-0 right-0',
  'bottom-left': 'bottom-0 left-0',
  'top-center': 'top-0 left-1/2 -translate-x-1/2',
  'bottom-center': 'bottom-0 left-1/2 -translate-x-1/2',
}

const RadixViewport: React.FC<{
  position: ToastPosition
  className?: string
}> = ({ position, className }) => (
  <ToastPrimitive.Viewport
    className={cn(
      'fixed z-50 p-4 flex flex-col gap-3 outline-none',
      positionClasses[position],
      className,
    )}
  />
)

const ToastItem: React.FC<ToastProps> = ({
  id,
  message,
  title,
  variant = 'info',
  duration = 5000,
  showCloseButton = true,
  onDismiss,
  className,
}) => (
  <ToastPrimitive.Root
    open
    duration={duration > 0 ? duration : Infinity}
    onOpenChange={(open) => {
      if (!open) onDismiss?.(id)
    }}
    className={cn(toastVariants({ variant }), className)}
  >
    <span className="shrink-0 mr-3 mt-0.5">{variantIcons[variant]}</span>
    <div className="flex-1">
      {title && (
        <ToastPrimitive.Title className="font-medium text-sm">
          {title}
        </ToastPrimitive.Title>
      )}
      <ToastPrimitive.Description className="text-sm">
        {message}
      </ToastPrimitive.Description>
    </div>
    {showCloseButton && (
      <ToastPrimitive.Close
        className="ml-3 text-muted-foreground hover:text-ink cursor-pointer"
        aria-label="Close"
      >
        <X className="w-4 h-4" aria-hidden />
      </ToastPrimitive.Close>
    )}
  </ToastPrimitive.Root>
)

export const Toast: React.FC<ToastProps> = (props) => {
  return (
    <ToastPrimitive.Provider swipeDirection="right" label="Notification">
      <RadixViewport position="bottom-right" />
      <ToastItem {...props} />
    </ToastPrimitive.Provider>
  )
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  className,
}) => {
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    const unsubscribe = toastService.subscribe(setToasts)
    return () => {
      unsubscribe()
    }
  }, [])

  return (
    <ToastPrimitive.Provider swipeDirection="right" label="Notification">
      <RadixViewport position={position} className={className} />
      {toasts.map((toast) => (
        <ToastItem
          key={toast.id}
          {...toast}
          onDismiss={(id) => {
            toastService.hideToast(id)
            toast.onDismiss?.(id)
          }}
        />
      ))}
    </ToastPrimitive.Provider>
  )
}

// Hook for using toast service
export const useToast = () => {
  return {
    showToast: (toast: Omit<ToastProps, 'id' | 'onDismiss'>) =>
      toastService.showToast(toast),
    hideToast: (id: string) => toastService.hideToast(id),
    clearToasts: () => toastService.clearToasts(),
  }
}

// Toast provider component
export const ToastProvider: React.FC<{
  position?: ToastPosition
  children: React.ReactNode
}> = ({ position = 'top-right', children }) => {
  return (
    <>
      {children}
      <ToastContainer position={position} />
    </>
  )
}

Toast.displayName = 'Toast'
ToastContainer.displayName = 'ToastContainer'
