import { ReactNode, useId, useState } from 'react'

export interface CollapsibleProps {
  label: ReactNode
  children: ReactNode
  defaultOpen?: boolean
  /** Controlled open state; pair with `onOpenChange`. */
  open?: boolean
  onOpenChange?: (open: boolean) => void
}

/** Accessible disclosure: a full-width button that reveals a bordered panel. */
export function Collapsible({
  label,
  children,
  defaultOpen = false,
  open: controlledOpen,
  onOpenChange,
}: CollapsibleProps) {
  const [uncontrolledOpen, setUncontrolledOpen] = useState(defaultOpen)
  const isControlled = controlledOpen !== undefined
  const open = isControlled ? controlledOpen : uncontrolledOpen
  const buttonId = useId()
  const panelId = useId()

  const toggle = () => {
    const next = !open
    if (!isControlled) setUncontrolledOpen(next)
    onOpenChange?.(next)
  }

  return (
    <div className="rounded border border-rule">
      <button
        type="button"
        id={buttonId}
        onClick={toggle}
        className="flex w-full cursor-pointer items-center justify-between gap-2 px-4 py-3 text-sm font-medium text-ink transition-colors hover:bg-surface-sunken focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-accent/40 focus-visible:ring-offset-1 focus-visible:ring-offset-bg"
        aria-expanded={open}
        aria-controls={panelId}
      >
        <span>{label}</span>
        <svg
          className={`h-4 w-4 shrink-0 text-ink-muted transition-transform duration-200 ${open ? 'rotate-180' : ''}`}
          viewBox="0 0 16 16"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="4 6 8 10 12 6" />
        </svg>
      </button>
      {open && (
        <div
          id={panelId}
          role="region"
          aria-labelledby={buttonId}
          className="border-t border-rule px-4 py-4"
        >
          {children}
        </div>
      )}
    </div>
  )
}
