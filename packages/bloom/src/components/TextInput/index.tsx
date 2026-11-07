import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
  forwardRef,
} from 'react'
import { cva } from 'class-variance-authority'
import { cn } from '../../lib/utils'

export interface TextInputProps extends DetailedHTMLProps<
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

const textInputVariants = cva(
  'flex items-baseline border-2 rounded-xs box-border transition-colors duration-200 focus-within:outline-hidden',
  {
    variants: {
      variant: {
        primary: 'border-rule bg-surface-sunken text-ink hover:shadow-md',
        secondary: 'border-neutral-800 bg-neutral-800 text-neutral',
      },
      error: {
        true: 'border-red-900',
        false: 'focus-within:border-accent',
      },
      disabled: {
        true: 'opacity-50 cursor-not-allowed',
        false: '',
      },
    },
    defaultVariants: {
      variant: 'primary',
      error: false,
      disabled: false,
    },
  },
)

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
    const [inputValue, setInputValue] = useState(value)

    const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
      setInputValue(event.currentTarget.value)
    }

    useEffect(() => {
      setInputValue(value)
    }, [value])

    return (
      <div
        className={cn(
          textInputVariants({ variant, error, disabled }),
          'px-4 py-2',
          className,
        )}
      >
        {!!prefix && (
          <span className="text-ink-muted sm:text-sm">{prefix}</span>
        )}
        <input
          type={type}
          required={rest.required}
          onClick={onClick}
          onChange={handleInput}
          value={inputValue}
          placeholder={placeholder}
          disabled={disabled}
          aria-invalid={error || undefined}
          ref={ref}
          className={cn(
            'flex items-center justify-center w-full px-1 py-2 text-md bg-transparent rounded-xs focus:outline-hidden',
            variant === 'primary' ? 'text-ink' : 'text-neutral',
            disabled && 'cursor-not-allowed',
          )}
          {...rest}
        />
      </div>
    )
  },
)

TextInput.displayName = 'TextInput'

export { TextInput }
