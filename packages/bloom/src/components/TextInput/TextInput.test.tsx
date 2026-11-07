import { describe, expect, it } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { TextInput } from './index'

describe('TextInput', () => {
  it('renders an input with a placeholder', () => {
    render(<TextInput type="text" error={false} placeholder="Type here" />)
    expect(screen.getByPlaceholderText('Type here')).toBeInTheDocument()
  })

  it('renders the prefix text', () => {
    render(<TextInput type="text" error={false} prefix="https://" />)
    expect(screen.getByText('https://')).toBeInTheDocument()
  })

  it('marks the input as invalid when error is set', () => {
    render(<TextInput type="text" error placeholder="Broken" />)
    expect(screen.getByPlaceholderText('Broken')).toHaveAttribute(
      'aria-invalid',
      'true',
    )
  })

  it('disables the input', () => {
    render(<TextInput type="text" error={false} disabled placeholder="Off" />)
    expect(screen.getByPlaceholderText('Off')).toBeDisabled()
  })

  it('supports the secondary variant', () => {
    render(
      <TextInput
        type="text"
        error={false}
        variant="secondary"
        placeholder="S"
      />,
    )
    expect(screen.getByPlaceholderText('S').parentElement).toHaveClass(
      'bg-neutral-800',
    )
  })

  it('accepts user input', () => {
    render(<TextInput type="text" error={false} placeholder="Typable" />)
    const input = screen.getByPlaceholderText('Typable') as HTMLInputElement
    fireEvent.change(input, { target: { value: 'hello' } })
    expect(input).toHaveValue('hello')
  })
})
