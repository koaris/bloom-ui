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
  password: [/^(?=.*[!@#$%^&*])/, /(?=.*[0-9])/, /.{8,}$/]
}

export type InputType = 'text' | 'password' | 'date' | 'datePicker' | 'cpf' | 'phone' | 'cnpj' | 'cep' | 'email'

export interface PasswordValidation {
  hasEightCharacters: boolean
  hasSpecialCharacters: boolean
  hasNumber: boolean
}

export interface PhoneFormat {
  countryCode: string
  format: string
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
  countryCode?: string // For international phone numbers
}

// Common phone formats by country
const phoneFormats: Record<string, PhoneFormat> = {
  'BR': { countryCode: '+55', format: '($1) $2-$3' },
  'US': { countryCode: '+1', format: '($1) $2-$3' },
  'UK': { countryCode: '+44', format: '$1 $2 $3' },
  'DE': { countryCode: '+49', format: '$1 $2 $3' },
  'FR': { countryCode: '+33', format: '$1 $2 $3 $4' }
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
      countryCode = 'BR', // Default to Brazil
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
          result = applyPhoneMask(value, countryCode)
          break
        case 'email':
          // No special masking for email, just trim whitespace
          result = value.trim()
          break
        default:
          break
      }

      return result
    }

    const applyPhoneMask = (value: string, countryCode: string): string => {
      // Remove all non-digit characters
      let digits = value.replace(/\D/g, '')

      // Get format for country or use default (Brazil)
      const format = phoneFormats[countryCode] || phoneFormats['BR']

      // Different formatting logic based on country
      switch (countryCode) {
        case 'BR':
          if (digits.length > 11) digits = digits.substring(0, 11)
          if (digits.length > 10)
            return digits.replace(/(\d{2})(\d{5})(\d+)/, '($1) $2-$3')
          else if (digits.length > 6)
            return digits.replace(/(\d{2})(\d{4})(\d+)/, '($1) $2-$3')
          else if (digits.length > 2)
            return digits.replace(/(\d{2})(\d+)/, '($1) $2')
          return digits

        case 'US':
          if (digits.length > 10) digits = digits.substring(0, 10)
          if (digits.length > 6)
            return digits.replace(/(\d{3})(\d{3})(\d+)/, '($1) $2-$3')
          else if (digits.length > 3)
            return digits.replace(/(\d{3})(\d+)/, '($1) $2')
          return digits

        case 'UK':
          if (digits.length > 10) digits = digits.substring(0, 10)
          if (digits.length > 7)
            return digits.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3')
          else if (digits.length > 3)
            return digits.replace(/(\d{3})(\d+)/, '$1 $2')
          return digits

        default:
          // Generic international format for other countries
          if (digits.length > 10) digits = digits.substring(0, 10)
          if (digits.length > 6)
            return digits.replace(/(\d{3})(\d{3})(\d+)/, '$1 $2 $3')
          else if (digits.length > 3)
            return digits.replace(/(\d{3})(\d+)/, '$1 $2')
          return digits
      }
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
          // Validation depends on country code
          if (countryCode === 'BR') {
            valid = /^\(\d{2}\) \d{5}-\d{4}$/.test(value) || /^\(\d{2}\) \d{4}-\d{4}$/.test(value)
          } else if (countryCode === 'US') {
            valid = /^\(\d{3}\) \d{3}-\d{4}$/.test(value)
          } else {
            // More flexible validation for other countries
            valid = /^[\d\s()-]{8,}$/.test(value) // At least 8 digits plus formatting
          }
          break
        case 'email':
          // RFC 5322 compliant email regex
          valid = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(value)
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

      if (['date', 'cpf', 'phone', 'cnpj', 'cep', 'email'].includes(type)) {
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
        case 'email':
          return 'email'
        case 'datePicker':
          return 'date'
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

    const renderPhonePrefix = () => {
      if (type !== 'phone') return null

      const format = phoneFormats[countryCode] || phoneFormats['BR']
      return (
        <span className="absolute left-3 top-1.5 text-gray-500">
          {format.countryCode}
        </span>
      )
    }

    const inputClasses = twMerge(
      'flex items-center justify-center border-2 border-gray-400 rounded-sm w-full px-3 py-1 text-md hover:shadow-md hover:shadow-neutral-500 focus:outline-none transition-all duration-200',
      className,
      disabled && 'opacity-50 cursor-not-allowed',
      selected && 'border-2 border-orange-500',
      validated && isValid && 'border-2 border-green-900',
      (error || (!isValid && inputValue != '')) && 'border-2 border-red-900',
      type === 'phone' && 'pl-10'
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
        <div className="relative">
          {renderPhonePrefix()}
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
        </div>
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