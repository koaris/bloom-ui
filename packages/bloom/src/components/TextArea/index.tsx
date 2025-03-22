import {
  DetailedHTMLProps,
  TextareaHTMLAttributes,
  useEffect,
  useState,
  forwardRef,
  ChangeEvent,
} from 'react'
import { twMerge } from 'tailwind-merge'

export type TextAreaSize = 'sm' | 'md' | 'lg'
export type TextAreaVariant = 'primary' | 'secondary' | 'outline'
export type TextAreaType = 'text' | 'markdown' | 'code' | 'json'

export interface TextAreaProps
  extends Omit<
    DetailedHTMLProps<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      HTMLTextAreaElement
    >,
    'type'
  > {
  disabled?: boolean
  placeholder?: string
  value?: string
  validated?: boolean
  error?: boolean
  required?: boolean
  resize?: 'none' | 'vertical' | 'horizontal' | 'both'
  type?: TextAreaType
  errorMessage?: string
  onChange?: (event: ChangeEvent<HTMLTextAreaElement>) => void
  label?: string
  helperText?: string
  maxLength?: number
  minRows?: number
  maxRows?: number
  size?: TextAreaSize
  variant?: TextAreaVariant
  showCount?: boolean
  autoGrow?: boolean
}

const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  (
    {
      className,
      disabled,
      placeholder,
      value,
      validated,
      error,
      required,
      resize = 'vertical',
      type = 'text',
      onClick,
      errorMessage,
      onChange: externalOnChange,
      label,
      helperText,
      id,
      maxLength,
      minRows = 3,
      maxRows = 8,
      size = 'md',
      variant = 'primary',
      showCount = false,
      autoGrow = false,
      ...rest
    }: TextAreaProps,
    ref,
  ) => {
    const [selected, setSelected] = useState(false)
    const [inputValue, setInputValue] = useState(value || '')
    const [isValid, setIsValid] = useState(true)
    const [rows, setRows] = useState(minRows)

    // Size styles mapping
    const sizeStyles = {
      sm: 'px-2 py-1 text-sm',
      md: 'px-3 py-2 text-base',
      lg: 'px-4 py-3 text-lg',
    }

    // Variant styles mapping
    const variantStyles = {
      primary: 'border-gray-400 focus:border-orange-500',
      secondary: 'border-neutral-500 bg-neutral-100 focus:border-orange-500',
      outline: 'border-gray-300 bg-transparent focus:border-orange-500',
    }

    // Resize styles mapping
    const resizeStyles = {
      none: 'resize-none',
      vertical: 'resize-y',
      horizontal: 'resize-x',
      both: 'resize',
    }

    const handleFocus = () => {
      setSelected(true)
    }

    const handleBlur = () => {
      setSelected(false)
      validateInput(inputValue)
    }

    const validateInput = (value: string): boolean => {
      if (required && (!value || value.trim().length === 0)) {
        setIsValid(false)
        return false
      }

      if (maxLength && value.length > maxLength) {
        setIsValid(false)
        return false
      }

      // Additional validation for specific types
      if (type === 'json' && value.trim().length > 0) {
        try {
          JSON.parse(value)
          setIsValid(true)
          return true
        } catch (e) {
          setIsValid(false)
          return false
        }
      }

      setIsValid(true)
      return true
    }

    const handleInput = (event: ChangeEvent<HTMLTextAreaElement>) => {
      const newValue = event.currentTarget.value
      setInputValue(newValue)
      validateInput(newValue)

      if (autoGrow) {
        const textareaLineHeight = 24; // Approximate line height in pixels
        const newRows = Math.max(
          minRows,
          Math.min(
            maxRows,
            Math.floor(event.currentTarget.scrollHeight / textareaLineHeight)
          )
        )
        setRows(newRows)
      }

      if (externalOnChange) {
        externalOnChange(event)
      }
    }

    useEffect(() => {
      setInputValue(value || '')
      if (value) {
        validateInput(value)
      }
    }, [value, required, maxLength])

    // Calculate character count and limit display
    const characterCount = inputValue?.length || 0
    const hasMaxLength = maxLength !== undefined && maxLength > 0
    const isOverLimit = hasMaxLength && characterCount > maxLength

    const textareaClasses = twMerge(
      'w-full border-2 rounded-sm focus:outline-none transition-all duration-200',
      'hover:shadow-md hover:shadow-neutral-500',
      sizeStyles[size],
      variantStyles[variant],
      resizeStyles[resize],
      disabled && 'opacity-50 cursor-not-allowed',
      selected && 'border-orange-500',
      validated && isValid && 'border-green-500',
      (error || (!isValid && inputValue !== '')) && 'border-red-900',
      className
    )

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
        <textarea
          ref={ref}
          id={id}
          rows={rows}
          disabled={disabled}
          required={required}
          className={textareaClasses}
          onClick={onClick}
          onFocus={handleFocus}
          onChange={handleInput}
          onBlur={handleBlur}
          placeholder={placeholder}
          value={inputValue}
          maxLength={hasMaxLength && !showCount ? maxLength : undefined}
          aria-invalid={error || !isValid}
          aria-describedby={
            error || !isValid
              ? `${id}-error`
              : helperText
                ? `${id}-helper`
                : undefined
          }
          {...rest}
        />
        <div className="flex justify-between mt-1">
          {(error || (!isValid && inputValue !== '')) && (
            <p id={`${id}-error`} className="text-sm text-red-900" role="alert">
              {errorMessage || 'This field is invalid.'}
            </p>
          )}
          {helperText && isValid && !error && (
            <p id={`${id}-helper`} className="text-sm text-gray-500">
              {helperText}
            </p>
          )}
          {showCount && hasMaxLength && (
            <p
              className={`text-sm ml-auto ${isOverLimit ? 'text-red-600' : 'text-gray-500'
                }`}
            >
              {characterCount}/{maxLength}
            </p>
          )}
        </div>
      </div>
    )
  }
)

TextArea.displayName = 'TextArea'

export { TextArea }