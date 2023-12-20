import { DetailedHTMLProps, InputHTMLAttributes, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import { FiCheck } from "react-icons/fi";

/**
 * Primary UI component for user interaction
 */
export interface RadioGroupProps extends DetailedHTMLProps<
    InputHTMLAttributes<HTMLInputElement>, // Change the type to HTMLInputElement
    HTMLInputElement
  > {
    variant?: 'primary',
    disabled?: boolean,
}

export const RadioGroup = ({
  className,
  variant = 'primary',
  disabled,
  ...rest
}: RadioGroupProps) => {
  const [selected, setSelected] = useState(true);

  const handleClick = () => {
    if (!disabled) {
      setSelected(!selected);
    }
  };

  return (
    <label onClick={handleClick}  className={twMerge(
      'inline-flex items-center cursor-pointer hover:shadow-md rounded-full hover:shadow-orange-500 ',
      disabled === true && 'opacity-50 cursor-not-allowed',
    )}>
      <span className={`relative rounded-full border-2 w-6 h-6 flex items-center justify-center hover:border-orange-500 ${selected ? 'bg-orange-500 border-orange-500' : 'border-neutral-500'}`}>
        {selected && (
          <FiCheck color="#FFFFFF" style={{ strokeWidth: 4 }} />
        )}
      </span>
    </label>
  )
}