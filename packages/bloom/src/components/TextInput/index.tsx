import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'


/**
 * Primary UI component for user interaction
 */
export interface TextInputProps extends 
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    prefix?: string;
    value?: string;
    validated?: boolean;
    error: boolean;
    required?: boolean;
    type: 'text' | 'password' | 'date' | 'cpf' | 'phone' | 'cnpj' | 'cep';
}

export const TextInput = ({
    className,
    disabled,
    value,
    prefix,
    onClick,
    ...rest
}: TextInputProps) => {
    const [selected, setSelected] = useState(false);
    const [inputValue, setInputValue] = useState(value);

    const handleFocus = (event: React.FocusEvent<HTMLInputElement>) => {
        setSelected(!selected);
    }
    
    const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
        setSelected(false);
    }

    const handleInput = (event: React.FocusEvent<HTMLInputElement>) => {
        setInputValue(event.currentTarget.value);
    };

    useEffect(() => {
        setInputValue(value);
    }, [value]);

    return (
        <>
            {rest.label && <label htmlFor={rest.id} className='leading-6'>{rest.label}</label>}
            <div className={twMerge(
                    "bg-neutral-800 py-2 px-4 rounded-sm box-border flex items-baseline",
                    "hover:shadow-md hover:shadow-neutral-500 focus:outline-none",
                    selected === true && 'border-2 border-orange-500',
                )}>
                {!!prefix && (
                    <span className="text-neutral-500 sm:text-sm">{prefix}</span>
                )}
                <input
                    id={rest.id}
                    name={rest.name}
                    type="text"
                    required={rest.required}
                    onClick={onClick}
                    onFocus={handleFocus}
                    onChange={handleInput}
                    onBlur={handleBlur}
                    value={inputValue}
                    className={twMerge(
                        'flex items-center justify-center bg-neutral-800 rounded-sm w-full px-2 py-2 text-md',
                        'focus:outline-none text-neutral-100',
                        className,
                        disabled === true && 'opacity-50 cursor-not-allowed',
                        
                    )}
                />
            </div>
        </>
    )
}
