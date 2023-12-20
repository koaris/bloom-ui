import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { FiCheck } from "react-icons/fi";

const options = [
  { id: 1, value: 'option1', label: 'Opção 1' },
  { id: 2, value: 'option2', label: 'Opção 2' }
];

export interface RadioGroupProps extends DetailedHTMLProps<
    HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  > {
    variant?: 'primary',
    disabled?: boolean,
    options: typeof options,
    required?: boolean
}

export const RadioGroup = ({
  variant = 'primary',
  disabled,
  options = [
    { id: 1, value: 'option1', label: 'Opção 1' },
    { id: 2, value: 'option2', label: 'Opção 2' }
  ],
  required = false,
}: RadioGroupProps) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionChange = (value: any) => {
    setSelectedOption(value);
  };

  return (
    <div className="flex flex-col ">
      {options.map((option) => (
        <div className='flex py-2 items-center'>
          <label
            htmlFor={`radio${option.id}`}
            className={twMerge(
              'relative rounded-full border-2 w-6 h-6 flex items-center justify-center hover:border-orange-500 hover:cursor-pointer',
              disabled === true && 'opacity-50 cursor-not-allowed',
              selectedOption === option.value ? 'bg-orange-500 border-orange-500' : 'border-neutral-500 hover:shadow-md hover:shadow-orange-500'
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
            />
            {selectedOption === option.value && (
              <FiCheck color="#FFFFFF" style={{ strokeWidth: 4 }} />
            )}
          </label>
          <span
            className='px-2'
          >
            {option.label}
          </span>
        </div>
      ))}
    </div>
  )
}