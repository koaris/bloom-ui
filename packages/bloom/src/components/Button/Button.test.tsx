import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ArrowRight } from 'lucide-react'
import { Button } from './index'

describe('Button', () => {
  it('renders children', () => {
    render(<Button>Click me</Button>)
    expect(screen.getByRole('button', { name: 'Click me' })).toBeInTheDocument()
  })

  it('applies semantic accent classes for the primary variant', () => {
    render(<Button variant="primary">Primary</Button>)
    expect(screen.getByRole('button')).toHaveClass('bg-accent')
    expect(screen.getByRole('button')).toHaveClass('text-accent-foreground')
  })

  it('applies size classes', () => {
    render(<Button size="lg">Large</Button>)
    expect(screen.getByRole('button')).toHaveClass('px-8')
    expect(screen.getByRole('button')).toHaveClass('py-3')
  })

  it('fires onClick when enabled', () => {
    const handleClick = vi.fn()
    render(<Button onClick={handleClick}>Clickable</Button>)
    fireEvent.click(screen.getByRole('button'))
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not fire onClick when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Button onClick={handleClick} disabled>
        Disabled
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('blocks clicks and sets aria-busy while loading', () => {
    const handleClick = vi.fn()
    render(
      <Button onClick={handleClick} loading>
        Loading
      </Button>,
    )
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveAttribute('aria-busy', 'true')
    fireEvent.click(button)
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders start and end icons', () => {
    render(
      <Button startIcon={<ArrowRight data-testid="start" />}>
        With icons
      </Button>,
    )
    expect(screen.getByTestId('start')).toBeInTheDocument()
  })

  it('takes the full width when fullWidth is set', () => {
    render(<Button fullWidth>Full width</Button>)
    expect(screen.getByRole('button')).toHaveClass('w-full')
  })
})
