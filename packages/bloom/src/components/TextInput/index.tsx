import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
  forwardRef,
} from 'react'
import { twMerge } from 'tailwind-merge'

export interface TextInputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  disabled?: boolean
  placeholder?: string
  prefix?: string
  value?: string
  variant?: 'primary' | 'secondary'
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
      type = 'text',
      variant = 'primary',
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
      <div
        className={twMerge(
          ' py-2 px-4 border-2 rounded-sm box-border flex items-baseline bg-neutral-200',
          'hover:shadow-md hover:shadow-neutral-500 focus:outline-none',
          variant === 'secondary' && 'bg-neutral-800 border-neutral-800 ',
          selected === true && 'border-2 border-orange-500',
          disabled === true && 'opacity-50 cursor-not-allowed',
          error === true && 'border-2 border-red-900',
        )}
      >
        {!!prefix && (
          <span className="text-neutral-500 sm:text-sm">{prefix}</span>
        )}
        <input
          type={type}
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
            'flex items-center justify-center bg-neutral-200 rounded-sm w-full px-1 py-2 text-md',
            'focus:outline-none text-neutral-800',
            disabled === true && 'cursor-not-allowed',
            variant === 'secondary' && 'bg-neutral-800 text-neutral',
            className,
          )}
          {...rest}
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'

export { TextInput }
