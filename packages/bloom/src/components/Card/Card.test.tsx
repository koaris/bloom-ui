import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { Card } from './index'

describe('Card', () => {
  it('renders title and content', () => {
    render(<Card title="My title" content="My content" />)
    expect(screen.getByText('My title')).toBeInTheDocument()
    expect(screen.getByText('My content')).toBeInTheDocument()
  })

  it('uses semantic surface/ink/border classes', () => {
    render(<Card title="Styled" content="Body" />)
    expect(screen.getByText('Styled').parentElement?.parentElement).toHaveClass(
      'bg-surface',
    )
    expect(screen.getByText('Styled').parentElement?.parentElement).toHaveClass(
      'text-ink',
    )
    expect(screen.getByText('Styled').parentElement?.parentElement).toHaveClass(
      'border-rule',
    )
  })

  it('fires onClick when enabled', () => {
    const handleClick = vi.fn()
    render(
      <Card title="Clickable" content="Body" onClick={handleClick}>
        Child
      </Card>,
    )
    const card = screen.getByRole('button')
    fireEvent.click(card)
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('does not fire onClick when disabled', () => {
    const handleClick = vi.fn()
    render(
      <Card title="Blocked" content="Body" onClick={handleClick} disabled />,
    )
    fireEvent.click(screen.getByText('Blocked'))
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('renders the footer', () => {
    render(<Card title="T" content="C" footer={<p>Foot</p>} />)
    expect(screen.getByText('Foot')).toBeInTheDocument()
  })

  it('supports the column direction', () => {
    render(<Card title="T" content="C" direction="col" />)
    expect(screen.getByText('T').parentElement?.parentElement).toHaveClass(
      'flex-col',
    )
  })
})
