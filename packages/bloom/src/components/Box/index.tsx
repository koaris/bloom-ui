import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge'

export interface BoxProps extends 
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>  {
    children: React.ReactNode;
    color?: string;
}

export const Box = ({
    className,
    children,
    color = 'bg-neutral-800',
}: BoxProps) => {

    return (
        <div className={twMerge(`p-6 rounded-md ${color} bottom-1 border-s-neutral-600`, className)}>
            {children}
        </div>
    );
};
