import { twMerge } from 'tailwind-merge'

export interface HeadingProps {
    children: React.ReactNode;
    color?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    variant?: 'h1' | 'h2' | 'h3' | 'h4';
}

export const Heading = ({ 
    children,
    color = 'neutral-800',
    size = 'lg',
    variant = 'h2'
}: HeadingProps) => {

    const fontSize= {
        'sm': 'text-sm',
        'md': 'text-md',
        'lg': 'text-lg',
        'xl': 'text-xl',
        '2xl': 'text-2xl',
        '3xl': 'text-3xl',
        '4xl': 'text-4xl',
        '5xl': 'text-5xl',
        '6xl': 'text-6xl',
        '7xl': 'text-7xl',
        '8xl': 'text-8xl',
        '9xl': 'text-9xl',
    }[size];

    const Tag = variant;

    return (
        <Tag className={twMerge(`text-${color} ${fontSize}`)}>
            {children}
        </Tag>
    );
};
