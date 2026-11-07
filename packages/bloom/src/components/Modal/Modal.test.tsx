import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Modal } from './index'

describe('Modal', () => {
  it('does not render when closed', () => {
    render(
      <Modal isOpen={false} onClose={() => {}}>
        Hidden content
      </Modal>,
    )
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('renders content when open', () => {
    render(
      <Modal isOpen onClose={() => {}} title="My modal">
        <p>Modal body</p>
      </Modal>,
    )
    expect(screen.getByText('Modal body')).toBeInTheDocument()
  })

  it('calls onClose via the close button', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen onClose={handleClose} title="Closable">
        Body
      </Modal>,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Close modal' }))
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('calls onClose on Escape when closeOnEsc is enabled', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen onClose={handleClose} title="Escapable">
        Body
      </Modal>,
    )
    fireEvent.keyDown(document.body, { key: 'Escape' })
    expect(handleClose).toHaveBeenCalledTimes(1)
  })

  it('does not close on Escape when closeOnEsc is disabled', () => {
    const handleClose = vi.fn()
    render(
      <Modal isOpen onClose={handleClose} closeOnEsc={false} title="Pinned">
        Body
      </Modal>,
    )
    fireEvent.keyDown(document.body, { key: 'Escape' })
    expect(handleClose).not.toHaveBeenCalled()
  })

  it('hides the close button when showCloseButton is false', () => {
    render(
      <Modal isOpen onClose={() => {}} showCloseButton={false} title="No X">
        Body
      </Modal>,
    )
    expect(
      screen.queryByRole('button', { name: 'Close modal' }),
    ).not.toBeInTheDocument()
  })

  it('renders the footer', () => {
    render(
      <Modal isOpen onClose={() => {}} footer={<p>Footer text</p>}>
        Body
      </Modal>,
    )
    expect(screen.getByText('Footer text')).toBeInTheDocument()
  })

  it('renders the visible title as a single Dialog.Title heading', () => {
    render(
      <Modal isOpen onClose={() => {}} title="My modal">
        Body
      </Modal>,
    )
    const headings = screen.getAllByRole('heading', { name: 'My modal' })
    expect(headings).toHaveLength(1)
    expect(headings[0]).not.toHaveClass('sr-only')
  })

  it('renders an sr-only title when no title is passed', () => {
    render(
      <Modal isOpen onClose={() => {}}>
        Body
      </Modal>,
    )
    expect(screen.getByRole('dialog', { name: 'Dialog' })).toBeInTheDocument()
  })

  it('renders the description as Dialog.Description', () => {
    render(
      <Modal isOpen onClose={() => {}} title="Titled" description="Extra info">
        Body
      </Modal>,
    )
    expect(screen.getByText('Extra info')).toBeInTheDocument()
  })

  it('moves focus into the dialog on open', async () => {
    render(
      <Modal isOpen onClose={() => {}} title="Focused">
        <button>Inside</button>
      </Modal>,
    )
    const dialog = screen.getByRole('dialog')
    await waitFor(() => {
      expect(document.activeElement).not.toBeNull()
      expect(dialog.contains(document.activeElement)).toBe(true)
    })
  })
})
