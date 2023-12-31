/* @client */
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
  forwardRef,
} from 'react'
import { twMerge } from 'tailwind-merge'
import { Text } from '../Text'

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  disabled?: boolean
  label?: string
  placeholder?: string
  prefix?: string
  value?: string
  validated?: boolean
  error: boolean
  required?: boolean
  type: 'text' | 'password' | 'date' | 'cpf' | 'phone' | 'cnpj' | 'cep'
}

const TextInput = forwardRef<HTMLInputElement, TextInputProps>(
  (
    {
      className,
      disabled,
      value,
      prefix,
      placeholder,
      error,
      onClick,
      ...rest
    }: TextInputProps,
    ref,
  ) => {
    const [selected, setSelected] = useState(false)
    const [inputValue, setInputValue] = useState(value)

    const handleFocus = () => {
      setSelected(!selected)
    }

    const handleBlur = () => {
      setSelected(false)
    }

    const handleInput = (event: React.FocusEvent<HTMLInputElement>) => {
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
        <div
          className={twMerge(
            'bg-neutral-800 py-2 px-4 border-2 border-neutral-800 rounded-sm box-border flex items-baseline',
            'hover:shadow-md hover:shadow-neutral-500 focus:outline-none',
            selected === true && 'border-2 border-orange-500',
            disabled === true && 'opacity-50 cursor-not-allowed',
            error === true && 'border-2 border-red-900',
          )}
        >
          {!!prefix && (
            <span className="text-neutral-500 sm:text-sm">{prefix}</span>
          )}
          <input
            id={rest.id}
            name={rest.name}
            type="text"
            required={rest.required}
            onClick={onClick}
            onFocus={handleFocus}
            onChange={handleInput}
            onBlur={handleBlur}
            value={inputValue}
            placeholder={placeholder}
            disabled={disabled}
            ref={ref}
            className={twMerge(
              'flex items-center justify-center bg-neutral-800 rounded-sm w-full px-1 py-2 text-md',
              'focus:outline-none text-neutral',
              className,
              disabled === true && 'cursor-not-allowed',
            )}
          />
        </div>
      </>
    )
  },
)

TextInput.displayName = 'TextInput'

export { TextInput }
