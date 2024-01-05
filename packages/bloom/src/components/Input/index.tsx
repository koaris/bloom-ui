/* @client */
import {
  DetailedHTMLProps,
  InputHTMLAttributes,
  useEffect,
  useState,
} from 'react'
import { twMerge } from 'tailwind-merge'
import { FiCheck, FiX } from 'react-icons/fi'
import masks from '../Shared/masks'
import { Text } from '../Text'

/**
 * Primary UI component for user interaction
 */
export interface InputProps
  extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  disabled?: boolean
  placeholder?: string
  value?: string
  validated?: boolean
  error: boolean
  required?: boolean
  type: 'text' | 'password' | 'date' | 'cpf' | 'phone' | 'cnpj' | 'cep'
}

export const Input = ({
  className,
  disabled,
  placeholder,
  value,
  validated,
  error,
  required,
  type,
  onClick,
  ...rest
}: InputProps) => {
  const [selected, setSelected] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const [hasNumber, setHasNumber] = useState(false)
  const [hasSpecialCharacteres, setHasSpecialCharacteres] = useState(false)
  const [hasEightCharacteres, setHasEightCharacteres] = useState(false)

  const handleFocus = () => {
    setSelected(!selected)
  }

  const handleBlur = () => {
    setSelected(false)
  }

  const handleInput = (event: React.FocusEvent<HTMLInputElement>) => {
    setInputValue(event.currentTarget.value)
    checkPassword(event.currentTarget.value as string)
  }

  useEffect(() => {
    setInputValue(value)
  }, [value])

  const checkPassword = (value: string) => {
    setHasSpecialCharacteres(value?.match(masks.password[0]) !== null)
    setHasNumber(value?.match(masks.password[1]) !== null)
    setHasEightCharacteres(value?.match(masks.password[2]) !== null)
  }

  return (
    <>
      {type === 'text' || type === 'password' || type === 'date' ? (
        <>
          <input
            type={type}
            required={required}
            className={twMerge(
              'flex items-center justify-center border-2 border-neutral rounded-sm w-full px-3 py-2 text-md hover:shadow-md hover:shadow-neutral-500 focus:outline-none',
              className,
              disabled === true && 'opacity-50 cursor-not-allowed',
              selected === true && 'border-2 border-orange-500',
              validated === true && 'border-2 border-green-900',
              error === true && 'border-2 border-red-900',
            )}
            onClick={onClick}
            onFocus={handleFocus}
            onChange={handleInput}
            onBlur={handleBlur}
            placeholder={placeholder}
            value={inputValue}
            {...rest}
          />
          {type === 'password' &&
            (!hasEightCharacteres || !hasSpecialCharacteres || !hasNumber) && (
              <ul className="py-1">
                <li className="flex items-center px-2">
                  {hasEightCharacteres ? <FiCheck /> : <FiX />}
                  <span className="px-1">Pelo menos 8 caracteres</span>
                </li>
                <li className="flex items-center px-2">
                  {hasSpecialCharacteres ? <FiCheck /> : <FiX />}
                  <span className="px-1">
                    Pelo menos 1 símbolo (@, !, $, etc)
                  </span>
                </li>
                <li className="flex items-center px-2">
                  {hasNumber ? <FiCheck /> : <FiX />}
                  <span className="px-1">Deve conter 1 número</span>
                </li>
              </ul>
            )}
        </>
      ) : (
        <input
          type={type}
          required={required}
          className={twMerge(
            'flex items-center justify-center border-2 border-neutral rounded-sm w-full px-3 py-2 text-md hover:shadow-md hover:shadow-neutral-500 focus:outline-none',
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
          {...rest}
          /* mask={masks[type as keyof typeof masks]} */
        />
      )}
      {error === true && (
        <label htmlFor={rest.id} className="text-red-900">
          Campo inválido.
        </label>
      )}
    </>
  )
}
