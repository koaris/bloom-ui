import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import { FiCheck } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'

export interface CheckboxProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  disabled?: boolean
  required?: boolean
}

export const Checkbox = ({ className, required, disabled }: CheckboxProps) => {
  const [selected, setSelected] = useState(false)

  const handleCheckboxChange = (value: boolean) => {
    setSelected(!value)
  }

  return (
    <div className="flex items-center justify-center px-2">
      <label
        className={twMerge(
          className,
          'relative  border-2 w-5 h-5 flex items-center justify-center rounded-sm hover:border-orange-500 hover:cursor-pointer',
          selected
            ? 'bg-orange-500 border-orange-500'
            : 'border-neutral-500 hover:shadow-md hover:shadow-orange-500',
          disabled === true && 'opacity-50 cursor-not-allowed',
        )}
      >
        <input
          type="checkbox"
          required={required}
          checked={selected}
          onChange={() => handleCheckboxChange(selected)}
          disabled={disabled}
          className={twMerge(
            'relative z-10 hidden',
            selected
              ? 'bg-orange-500 border-orange-500'
              : 'border-neutral-500 hover:shadow-md hover:shadow-orange-500',
          )}
        />
        {selected && (
          <FiCheck color="#FFFFFF" size={14} style={{ strokeWidth: 4 }} />
        )}
      </label>
    </div>
  )
}
