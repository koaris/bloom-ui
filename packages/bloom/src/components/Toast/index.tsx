'use client'
import React, { useCallback, useEffect, useRef, useState } from 'react'
import { twMerge } from 'tailwind-merge'

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
      onDismiss: (toastId) => this.hideToast(toastId),
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

// Keep in sync with the toast-out animation in src/styles/tailwind.css
const EXIT_DURATION = 200

const variantStyles: Record<ToastVariant, { badge: string; progress: string }> =
  {
    success: {
      badge:
        'bg-emerald-100 text-emerald-600 ring-emerald-50 dark:bg-emerald-500/15 dark:text-emerald-400 dark:ring-emerald-500/10',
      progress: 'bg-emerald-500',
    },
    error: {
      badge:
        'bg-rose-100 text-rose-600 ring-rose-50 dark:bg-rose-500/15 dark:text-rose-400 dark:ring-rose-500/10',
      progress: 'bg-rose-500',
    },
    warning: {
      badge:
        'bg-amber-100 text-amber-600 ring-amber-50 dark:bg-amber-500/15 dark:text-amber-400 dark:ring-amber-500/10',
      progress: 'bg-amber-500',
    },
    info: {
      badge:
        'bg-sky-100 text-sky-600 ring-sky-50 dark:bg-sky-500/15 dark:text-sky-400 dark:ring-sky-500/10',
      progress: 'bg-sky-500',
    },
  }

const iconPaths: Record<ToastVariant, string[]> = {
  success: ['M20 6 9 17l-5-5'],
  error: ['M12 5.5v8', 'M12 18.5h.01'],
  warning: [
    'M10.29 3.86 1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z',
    'M12 9v4',
    'M12 17h.01',
  ],
  info: ['M12 18.5v-8', 'M12 5.5h.01'],
}

// The bare "!" and "i" glyphs need a heavier stroke to match the other icons
const ToastIcon = ({ variant }: { variant: ToastVariant }) => (
  <svg
    className="size-[18px]"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={variant === 'error' || variant === 'info' ? 3 : 2.25}
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {iconPaths[variant].map((d) => (
      <path key={d} d={d} />
    ))}
  </svg>
)

export const Toast: React.FC<ToastProps> = ({
  id,
  message,
  title,
  variant = 'info',
  duration = 5000,
  showCloseButton = true,
  onDismiss,
  className,
}) => {
  const [isRemoving, setIsRemoving] = useState(false)
  const [isHovered, setIsHovered] = useState(false)
  const [isFocused, setIsFocused] = useState(false)
  const remainingRef = useRef(duration)
  const removingRef = useRef(false)
  const onDismissRef = useRef(onDismiss)
  onDismissRef.current = onDismiss

  const isPaused = isHovered || isFocused

  const dismiss = useCallback(() => {
    if (removingRef.current) return
    removingRef.current = true
    setIsRemoving(true)
    window.setTimeout(() => onDismissRef.current?.(id), EXIT_DURATION)
  }, [id])

  // Restart the countdown whenever the duration changes
  useEffect(() => {
    remainingRef.current = duration
  }, [duration])

  // Count down while visible; hovering or focusing the toast pauses it
  useEffect(() => {
    if (duration <= 0 || isPaused || isRemoving) return
    const startedAt = Date.now()
    const timer = window.setTimeout(dismiss, remainingRef.current)
    return () => {
      window.clearTimeout(timer)
      remainingRef.current -= Date.now() - startedAt
    }
  }, [duration, isPaused, isRemoving, dismiss])

  const styles = variantStyles[variant]
  const isUrgent = variant === 'error' || variant === 'warning'

  return (
    <div
      role={isUrgent ? 'alert' : 'status'}
      aria-atomic="true"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onFocus={() => setIsFocused(true)}
      onBlur={(e) => {
        if (!e.currentTarget.contains(e.relatedTarget as Node | null)) {
          setIsFocused(false)
        }
      }}
      className={twMerge(
        'pointer-events-auto relative flex w-[22rem] max-w-[calc(100vw-2rem)] items-start gap-3 overflow-hidden rounded-xl bg-white p-4',
        'shadow-lg shadow-gray-900/10 ring-1 ring-gray-900/5',
        'dark:bg-gray-900 dark:shadow-black/40 dark:ring-white/10',
        isRemoving ? 'animate-toast-out' : 'animate-toast-in',
        className,
      )}
    >
      <span
        aria-hidden="true"
        className={twMerge(
          'flex size-8 shrink-0 items-center justify-center rounded-full ring-4',
          styles.badge,
        )}
      >
        <ToastIcon variant={variant} />
      </span>

      <div className="min-w-0 flex-1 pt-1.5">
        {title && (
          <p className="text-sm leading-5 font-semibold text-gray-900 dark:text-gray-50">
            {title}
          </p>
        )}
        <p
          className={twMerge(
            'text-sm leading-5 break-words',
            title
              ? 'mt-0.5 text-gray-600 dark:text-gray-300'
              : 'font-medium text-gray-800 dark:text-gray-100',
          )}
        >
          {message}
        </p>
      </div>

      {showCloseButton && (
        <button
          type="button"
          onClick={dismiss}
          aria-label="Close"
          className="-mr-1 mt-1 shrink-0 rounded-md p-1 text-gray-400 transition-colors hover:cursor-pointer hover:bg-gray-100 hover:text-gray-700 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-orange-500 dark:hover:bg-white/10 dark:hover:text-gray-200"
        >
          <svg
            className="size-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M18 6 6 18M6 6l12 12" />
          </svg>
        </button>
      )}

      {duration > 0 && (
        <span
          key={duration}
          aria-hidden="true"
          className={twMerge(
            'absolute inset-x-0 bottom-0 h-1 origin-left animate-toast-progress',
            styles.progress,
          )}
          style={{
            animationDuration: `${duration}ms`,
            animationPlayState: isPaused || isRemoving ? 'paused' : 'running',
          }}
        />
      )}
    </div>
  )
}

// Newest toast sits closest to the screen edge; bottom toasts rise into view
const positionClasses: Record<ToastPosition, string> = {
  'top-right': 'top-0 right-0 flex-col-reverse',
  'top-left': 'top-0 left-0 flex-col-reverse',
  'top-center': 'top-0 left-1/2 -translate-x-1/2 flex-col-reverse',
  'bottom-right': 'bottom-0 right-0 flex-col [--toast-enter-y:0.75rem]',
  'bottom-left': 'bottom-0 left-0 flex-col [--toast-enter-y:0.75rem]',
  'bottom-center':
    'bottom-0 left-1/2 -translate-x-1/2 flex-col [--toast-enter-y:0.75rem]',
}

export const ToastContainer: React.FC<ToastContainerProps> = ({
  position = 'top-right',
  className,
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isMounted, setIsMounted] = useState(false)
  const [toasts, setToasts] = useState<ToastProps[]>([])

  useEffect(() => {
    const container = document.createElement('div')
    container.id = 'toast-root'
    container.className = 'fixed z-50 p-4'
    document.body.appendChild(container)
    containerRef.current = container
    setIsMounted(true)

    const unsubscribe = toastService.subscribe(setToasts)

    return () => {
      unsubscribe()
      container.remove()
    }
  }, [])

  if (!isMounted || !containerRef.current) return null

  return (
    <div
      className={twMerge(
        'pointer-events-none fixed z-50 flex gap-3 p-4',
        positionClasses[position],
        className,
      )}
    >
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} />
      ))}
    </div>
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

// Toast provider component (simpler without context)
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
