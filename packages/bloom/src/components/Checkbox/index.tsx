import { DetailedHTMLProps, HTMLAttributes, useState } from 'react'
import * as RadixCheckbox from '@radix-ui/react-checkbox'
import { FiCheck } from 'react-icons/fi'
import { twMerge } from 'tailwind-merge'

export interface CheckboxProps extends 
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
    disabled?: boolean
    required?: boolean
    onClick?: () => void
}

export const Checkbox = ({
    className,
    required,
    disabled,
    onClick,
    ...rest
}: CheckboxProps) => {
    const [selected, setSelected] = useState(false);

    const handleCheckboxChange = (value: boolean) => {
        setSelected(!value);
    }

    return (
    <RadixCheckbox.Root 
        className={twMerge(className, 'h-6 w-6 border-2 border-orange-500 flex items-center justify-center rounded mr-2',
            'hover:border-orange-500 hover:cursor-pointer hover:shadow-md hover:shadow-neutral-500 focus:outline-none',
            selected ? 'bg-orange-500' : 'bg-neutral',
            disabled === true && 'opacity-50 cursor-not-allowed',
        )}
        required={required}
        disabled={disabled}
        onClick={() => handleCheckboxChange(selected)}
    >
        <RadixCheckbox.Indicator
            asChild
        >
            <FiCheck color='#FFFFFF' style={{ strokeWidth: 3 }} />
        </RadixCheckbox.Indicator>
    </RadixCheckbox.Root>
  )
}
