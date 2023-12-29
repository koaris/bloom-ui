import { twMerge } from 'tailwind-merge'

export interface BoxProps {
    children: React.ReactNode;
    color?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    variant?: 'p' | 'strong' | 'h1' | 'h2' | 'h3' | 'h4';
}

export const Box = ({ 
    children,
}: BoxProps) => {


    return (
        <div className={twMerge(`p-4 rounded-md bg-neutral-600 bottom-1 border-s-neutral-600`)}>
            {children}
        </div>
    );
};
