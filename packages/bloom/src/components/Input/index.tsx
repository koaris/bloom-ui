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

const passwordMask = {
  password: [/^(?=.*[!@#$%^&*])/, /(?=.*[0-9])/, /.{8,}$/],
}

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
  disabled?: boolean
  placeholder?: string
  value?: string
  validated?: boolean
  error?: boolean
  required?: boolean
  type: InputType
  errorMessage?: string
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void
  label?: string
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
    const [inputValue, setInputValue] = useState(value || '')
    const [passwordValidation, setPasswordValidation] = useState<PasswordValidation>({
      hasEightCharacters: false,
      hasSpecialCharacters: false,
      hasNumber: false,
    })
    const [isValid, setIsValid] = useState(false)

    const handleFocus = () => {
      setSelected(true)
    }

    const handleBlur = () => {
      setSelected(false)
      validateInput(inputValue || '')
    }

    const applyMask = (value: string, type: InputType): string => {
      let result = value

      switch (type) {
        case 'date':
          result = value.replace(/\D/g, '')
          if (result.length > 8) result = result.substring(0, 8)
          if (result.length > 4) result = result.replace(/(\d{2})(\d{2})(\d+)/, '$1/$2/$3')
          else if (result.length > 2) result = result.replace(/(\d{2})(\d+)/, '$1/$2')
          break
        case 'cpf':
          result = value.replace(/\D/g, '')
          if (result.length > 11) result = result.substring(0, 11)
          if (result.length > 9) result = result.replace(/(\d{3})(\d{3})(\d{3})(\d+)/, '$1.$2.$3-$4')
          else if (result.length > 6) result = result.replace(/(\d{3})(\d{3})(\d+)/, '$1.$2.$3')
          else if (result.length > 3) result = result.replace(/(\d{3})(\d+)/, '$1.$2')
          break
        case 'cnpj':
          result = value.replace(/\D/g, '')
          if (result.length > 14) result = result.substring(0, 14)
          if (result.length > 12)
            result = result.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d+)/, '$1.$2.$3/$4-$5')
          else if (result.length > 8)
            result = result.replace(/(\d{2})(\d{3})(\d{3})(\d+)/, '$1.$2.$3/$4')
          else if (result.length > 5)
            result = result.replace(/(\d{2})(\d{3})(\d+)/, '$1.$2.$3')
          else if (result.length > 2)
            result = result.replace(/(\d{2})(\d+)/, '$1.$2')
          break
        case 'cep':
          result = value.replace(/\D/g, '')
          if (result.length > 8) result = result.substring(0, 8)
          if (result.length > 5) result = result.replace(/(\d{5})(\d+)/, '$1-$2')
          break
        case 'phone':
          result = value.replace(/\D/g, '')
          if (result.length > 11) result = result.substring(0, 11)
          if (result.length > 10)
            result = result.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3')
          else if (result.length > 6)
            result = result.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3')
          else if (result.length > 2)
            result = result.replace(/(\d{2})(\d+)/, '($1) $2')
          break
        default:
          break
      }

      return result
    }

    const validateInput = (value: string): boolean => {
      if (!value) return false

      let valid = false

      switch (type) {
        case 'password':
          valid = passwordValidation.hasEightCharacters &&
            passwordValidation.hasSpecialCharacters &&
            passwordValidation.hasNumber
          break
        case 'date':
          valid = /^\d{2}\/\d{2}\/\d{4}$/.test(value)
          break
        case 'cpf':
          valid = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/.test(value)
          break
        case 'cnpj':
          valid = /^\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2}$/.test(value)
          break
        case 'cep':
          valid = /^\d{5}-\d{3}$/.test(value)
          break
        case 'phone':
          valid = /^\(\d{2}\) \d{5}-\d{4}$/.test(value)
          break
        default:
          valid = value.length > 0
          break
      }

      setIsValid(valid)
      return valid
    }

    const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
      let newValue = event.currentTarget.value

      if (['date', 'cpf', 'phone', 'cnpj', 'cep'].includes(type)) {
        newValue = applyMask(newValue, type)
      }

      const newEvent = {
        ...event,
        currentTarget: {
          ...event.currentTarget,
          value: newValue
        },
        target: {
          ...event.target,
          value: newValue
        }
      } as ChangeEvent<HTMLInputElement>

      setInputValue(newValue)

      if (type === 'password') {
        checkPassword(newValue)
      } else {
        validateInput(newValue)
      }

      externalOnChange?.(newEvent)
    }

    useEffect(() => {
      setInputValue(value || '')
      if (value && type === 'password') {
        checkPassword(value)
      } else if (value) {
        validateInput(value)
      }
    }, [value, type])

    const checkPassword = (value: string) => {
      const validationResult = {
        hasEightCharacters: value?.match(passwordMask.password[2]) !== null,
        hasSpecialCharacters: value?.match(passwordMask.password[0]) !== null,
        hasNumber: value?.match(passwordMask.password[1]) !== null,
      }

      setPasswordValidation(validationResult)
      setIsValid(
        validationResult.hasEightCharacters &&
        validationResult.hasSpecialCharacters &&
        validationResult.hasNumber
      )
    }

    const getInputType = (): string => {
      // Map our custom types to HTML input types
      switch (type) {
        case 'password':
          return 'password'
        case 'date':
        case 'cpf':
        case 'phone':
        case 'cnpj':
        case 'cep':
          return 'text'
        default:
          return 'text'
      }
    }

    const inputClasses = twMerge(
      'flex items-center justify-center border-2 border-neutral rounded-sm w-full px-3 py-2 text-md hover:shadow-md hover:shadow-neutral-500 focus:outline-none transition-all duration-200',
      className,
      disabled && 'opacity-50 cursor-not-allowed',
      selected && 'border-2 border-orange-500',
      validated && isValid && 'border-2 border-green-900',
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
          type={getInputType()}
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