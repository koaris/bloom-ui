import { twMerge } from 'tailwind-merge'

export interface TextProps {
    children: React.ReactNode;
    color?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    variant?: 'p' | 'strong' | 'span';
}

export const Text = ({ 
    children,
    color = 'neutral-800',
    size = 'md',
    variant = 'p'
}: TextProps) => {

    const fontSize= {
        'xxs': 'text-xxs',
        'xs': 'text-xs',
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
