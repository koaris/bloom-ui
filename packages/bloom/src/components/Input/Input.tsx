import { DetailedHTMLProps, InputHTMLAttributes, useEffect, useState } from 'react'
import { twMerge } from 'tailwind-merge'
import InputMask from 'react-input-mask'
import masks from '../Shared/masks';

/**
 * Primary UI component for user interaction
 */
export interface InputProps extends 
    DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    disabled?: boolean;
    label?: string;
    placeholder?: string;
    value?: string;
    error: boolean;
    type: 'text' | 'password' | 'date' | 'cpf' | 'phone' | 'cnpj' | 'cep';
}

export const Input = ({
    className,
    disabled,
    label,
    placeholder,
    value,
    error,
    type,
    onClick,
    ...rest
}: InputProps) => {
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
            {label && <label htmlFor={rest.id}>{label}</label>}
            <InputMask
                id={rest.id}
                type={type}
                className={twMerge(
                    'flex items-center justify-center rounded-sm w-full px-3 py-2 text-md hover:shadow-md hover:shadow-neutral-500 focus:outline-none',
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
                mask={type as keyof typeof masks}
            />
            {error === true && <label htmlFor={rest.id} className='text-red-900'>Campo inválido</label>}
        </>
    )
}
