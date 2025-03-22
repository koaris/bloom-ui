import React from 'react';
import { twMerge } from 'tailwind-merge';

export type LoadingSize = 'xs' | 'sm' | 'md' | 'lg';
export type LoadingColor = 'primary' | 'secondary' | 'white' | 'black' | 'gray';

export interface LoadingProps {
    size?: LoadingSize;
    color?: LoadingColor;
    withText?: boolean;
    text?: string;
    centered?: boolean;
    className?: string;
}

export const Loading: React.FC<LoadingProps> = ({
    size = 'md',
    color = 'primary',
    withText = false,
    text = 'Loading...',
    centered = false,
    className,
}) => {
    const sizeClasses = {
        xs: 'h-4 w-4',
        sm: 'h-6 w-6',
        md: 'h-8 w-8',
        lg: 'h-12 w-12',
    };

    const colorClasses = {
        primary: 'text-orange-500',
        secondary: 'text-neutral',
        white: 'text-white',
        black: 'text-black',
        gray: 'text-gray-400',
    };

    const textSizeClasses = {
        xs: 'text-xs',
        sm: 'text-sm',
        md: 'text-base',
        lg: 'text-lg',
    };

    return (
        <div
            className={twMerge(
                'inline-flex items-center',
                centered && 'justify-center',
                className
            )}
            role="status"
        >
            <svg
                className={twMerge(
                    'animate-spin',
                    sizeClasses[size],
                    colorClasses[color]
                )}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
            >
                <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                />
                <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                />
            </svg>

            {withText && (
                <span className={twMerge(
                    'ml-3',
                    textSizeClasses[size],
                    colorClasses[color]
                )}>
                    {text}
                </span>
            )}

            <span className="sr-only">Loading</span>
        </div>
    );
};

Loading.displayName = 'Loading';

export default Loading;