import { twMerge } from 'tailwind-merge'

export interface BoxProps {
    children: React.ReactNode;
    color?: string;
}

export const Box = ({ 
    children,
    color = 'bg-neutral-800',
}: BoxProps) => {

    return (
        <div className={twMerge(`p-4 rounded-md ${color} bottom-1 border-s-neutral-600`)}>
            {children}
        </div>
    );
};
