import { describe, expect, it, vi } from 'vitest'
import { render, screen, fireEvent, waitFor } from '@testing-library/react'
import { Toast, toastService } from './index'

describe('Toast', () => {
  it('renders message and title', () => {
    render(<Toast id="t1" message="Saved!" title="Success" variant="success" />)
    expect(screen.getByText('Saved!')).toBeInTheDocument()
    expect(screen.getByText('Success')).toBeInTheDocument()
  })

  it('announces errors and warnings assertively, others politely', () => {
    render(<Toast id="t2" message="Boom" variant="error" duration={0} />)
    expect(screen.getByRole('alert')).toHaveTextContent('Boom')
    render(<Toast id="t2b" message="Heads up" variant="info" duration={0} />)
    expect(screen.getByRole('status')).toHaveTextContent('Heads up')
  })

  it('calls onDismiss when the close button is clicked', async () => {
    const handleDismiss = vi.fn()
    render(
      <Toast
        id="t3"
        message="Dismissable"
        duration={0}
        onDismiss={handleDismiss}
      />,
    )
    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    await waitFor(() => expect(handleDismiss).toHaveBeenCalledWith('t3'))
  })

  it('does not render the close button when showCloseButton is false', () => {
    render(
      <Toast
        id="t4"
        message="Stuck around"
        duration={0}
        showCloseButton={false}
      />,
    )
    expect(
      screen.queryByRole('button', { name: 'Close' }),
    ).not.toBeInTheDocument()
  })

  it('adds and removes toasts through the toast service', () => {
    const { unmount } = render(<Toast id="t5" message="Service" duration={0} />)
    const id = toastService.showToast({ message: 'From service', duration: 0 })
    expect(toastService.getToasts()).toHaveLength(1)
    toastService.hideToast(id)
    expect(toastService.getToasts()).toHaveLength(0)
    unmount()
  })

  it('closes itself even without onDismiss', async () => {
    render(<Toast id="t6" message="Self closing" duration={0} />)
    fireEvent.click(screen.getByRole('button', { name: 'Close' }))
    await waitFor(() =>
      expect(screen.queryByText('Self closing')).not.toBeInTheDocument(),
    )
  })

  it('generates unique ids for toasts created back to back', () => {
    const first = toastService.showToast({ message: 'One', duration: 0 })
    const second = toastService.showToast({ message: 'Two', duration: 0 })
    expect(first).not.toBe(second)
    toastService.clearToasts()
  })
})
