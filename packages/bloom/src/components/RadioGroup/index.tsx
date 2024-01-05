/* @client */
import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { FiCheck } from 'react-icons/fi'

const options = [
  { id: 1, value: 'option1', label: 'Opção 1' },
  { id: 2, value: 'option2', label: 'Opção 2' },
]

export interface RadioGroupProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  disabled?: boolean
  options: typeof options
  required?: boolean
}

export const RadioGroup = ({
  disabled,
  options = [
    { id: 1, value: 'option1', label: 'Opção 1' },
    { id: 2, value: 'option2', label: 'Opção 2' },
  ],
  required = false,
  className,
}: RadioGroupProps) => {
  const [selectedOption, setSelectedOption] = useState('')

  const handleOptionChange = (value: string) => {
    setSelectedOption(value)
  }

  return (
    <div className="flex flex-col ">
      {options.map((option) => (
        <div key={option.id} className="flex py-2 items-center">
          <label
            htmlFor={`radio${option.id}`}
            className={twMerge(
              'relative rounded-full border-2 w-5 h-5 flex items-center justify-center hover:border-orange-500 hover:cursor-pointer',
              selectedOption === option.value
                ? 'bg-orange-500 border-orange-500'
                : 'border-neutral-500 hover:shadow-md hover:shadow-orange-500',
              disabled === true && 'opacity-50 cursor-not-allowed',
              className
            )}
          >
            <input
              type="radio"
              id={`radio${option.id}`}
              name="radioGroup"
              value={option.value}
              required={required}
              className="hidden"
              checked={selectedOption === option.value}
              onChange={() => handleOptionChange(option.value)}
              disabled={disabled}
            />
            {selectedOption === option.value && (
              <FiCheck color="#FFFFFF" size={12} style={{ strokeWidth: 4 }} />
            )}
          </label>
          <span className="px-2">{option.label}</span>
        </div>
      ))}
    </div>
  )
}
