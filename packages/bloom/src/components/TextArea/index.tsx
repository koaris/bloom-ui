import {
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  useEffect,
  useState,
} from 'react'
import { twMerge } from 'tailwind-merge'
import { Text } from '../Text'

/**
 * Primary UI component for user interaction
 */
export interface TextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  disabled?: boolean
  label?: string
  placeholder?: string
  value?: string
  validated?: boolean
  error: boolean
  required?: boolean
  type: 'text' | 'password' | 'date' | 'cpf' | 'phone' | 'cnpj' | 'cep'
}

export const TextArea = ({
  className,
  disabled,
  value,
  error,
  required,
  placeholder,
  onClick,
  ...rest
}: TextAreaProps) => {
  const [selected, setSelected] = useState(false)
  const [inputValue, setInputValue] = useState(value)

  const handleFocus = () => {
    setSelected(!selected)
  }

  const handleBlur = () => {
    setSelected(false)
  }

  const handleInput = (event: React.FocusEvent<HTMLTextAreaElement>) => {
    setInputValue(event.currentTarget.value)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  return (
    <>
      {rest.label && (
        <Text
          htmlFor={rest.id}
          variant="label"
          color={rest.color}
          className="leading-8"
        >
          {rest.label}
        </Text>
      )}
      <textarea
        id={rest.id}
        name={rest.name}
        required={required}
        disabled={disabled}
        className={twMerge(
          'rounded-sm w-full px-3 py-2 border-2 border-neutral text-md hover:shadow-md hover:shadow-neutral-500 focus:outline-none',
          'resize-y h-32',
          className,
          disabled === true && 'opacity-50 cursor-not-allowed',
          selected === true && 'border-2 border-orange-500',
          error === true && 'border-2 border-red-900',
        )}
        onClick={onClick}
        onFocus={handleFocus}
        onChange={handleInput}
        onBlur={handleBlur}
        placeholder={placeholder}
        value={inputValue}
      />
    </>
  )
}
