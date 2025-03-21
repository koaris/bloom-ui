import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
  forwardRef,
  ChangeEvent,
} from 'react'
import { twMerge } from 'tailwind-merge'
import { FiCheck, FiX } from 'react-icons/fi'
import masks from '../Shared/masks'

export type InputType = 'text' | 'password' | 'date' | 'cpf' | 'phone' | 'cnpj' | 'cep'

export interface PasswordValidation {
  hasEightCharacters: boolean
  hasSpecialCharacters: boolean
  hasNumber: boolean
}

export interface InputProps
  extends Omit<
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>,
    'type'
  > {
  /** Whether the input is disabled */
  disabled?: boolean
  /** Placeholder text for the input */
  placeholder?: string
  /** Current value of the input */
  value?: string
  /** Whether the input has been validated */
  validated?: boolean
  /** Whether the input has an error */
  error?: boolean
  /** Whether the input is required */
  required?: boolean
  /** Type of input to render */
  type: InputType
  /** Custom error message to display */
  errorMessage?: string
  /** Callback when input value changes */
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  /** Label for the input field */
  label?: string
  /** Helper text to display below the input */
  helperText?: string
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      disabled,
      placeholder,
      value,
      validated,
      error,
      required,
      type,
      onClick,
      errorMessage,
      onChange: externalOnChange,
      label,
      helperText,
      id,
      ...rest
    }: InputProps,
    ref,
  ) => {
    const [selected, setSelected] = useState(false)
    const [inputValue, setInputValue] = useState(value)
    const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
      hasEightCharacters: false,
      hasSpecialCharacters: false,
      hasNumber: false,
    })

    const handleFocus = () => {
      setSelected(true)
    }

    const handleBlur = () => {
      setSelected(false)
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      const newValue = event.currentTarget.value
      setInputValue(newValue)
      externalOnChange?.(event)

      if (type === 'password') {
        checkPassword(newValue)
      }
    }

    useEffect(() => {
      setInputValue(value)
    }, [value])

    const checkPassword = (value: string) => {
      setPasswordValidation({
        hasEightCharacters: value?.match(masks.password[2]) !== null,
        hasSpecialCharacters: value?.match(masks.password[0]) !== null,
        hasNumber: value?.match(masks.password[1]) !== null,
      })
    }

    const inputClasses = twMerge(
      'flex items-center justify-center border-2 border-neutral rounded-sm w-full px-3 py-2 text-md hover:shadow-md hover:shadow-neutral-500 focus:outline-none transition-all duration-200',
      className,
      disabled && 'opacity-50 cursor-not-allowed',
      selected && 'border-2 border-orange-500',
      validated && 'border-2 border-green-900',
      error && 'border-2 border-red-900',
    )

    const renderPasswordValidation = () => {
      if (type !== 'password') return null

      return (
        <ul className="py-1 text-sm" role="list">
          <li className="flex items-center px-2" role="listitem">
            {passwordValidation.hasEightCharacters ? (
              <FiCheck className="text-green-500" />
            ) : (
              <FiX className="text-red-500" />
            )}
            <span className="px-1">Pelo menos 8 caracteres</span>
          </li>
          <li className="flex items-center px-2" role="listitem">
            {passwordValidation.hasSpecialCharacters ? (
              <FiCheck className="text-green-500" />
            ) : (
              <FiX className="text-red-500" />
            )}
            <span className="px-1">Pelo menos 1 símbolo (@, !, $, etc)</span>
          </li>
          <li className="flex items-center px-2" role="listitem">
            {passwordValidation.hasNumber ? (
              <FiCheck className="text-green-500" />
            ) : (
              <FiX className="text-red-500" />
            )}
            <span className="px-1">Deve conter 1 número</span>
          </li>
        </ul>
      )
    }

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            {label}
            {required && <span className="text-red-500 ml-1">*</span>}
          </label>
        )}
        <input
          type={type}
          required={required}
          disabled={disabled}
          ref={ref}
          id={id}
          className={inputClasses}
          onClick={onClick}
          onFocus={handleFocus}
          onChange={handleInput}
          onBlur={handleBlur}
          placeholder={placeholder}
          value={inputValue}
          aria-invalid={error}
          aria-describedby={error ? `${id}-error` : helperText ? `${id}-helper` : undefined}
          {...rest}
        />
        {renderPasswordValidation()}
        {error && (
          <p id={`${id}-error`} className="mt-1 text-sm text-red-900" role="alert">
            {errorMessage || 'Invalid field.'}
          </p>
        )}
        {helperText && !error && (
          <p id={`${id}-helper`} className="mt-1 text-sm text-gray-500">
            {helperText}
          </p>
        )}
      </div>
    )
  },
)

Input.displayName = 'Input'

export { Input }
