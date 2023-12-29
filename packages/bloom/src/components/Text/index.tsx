import { twMerge } from 'tailwind-merge'

export interface TextProps {
    children: React.ReactNode;
    color?: string;
    size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
    variant?: 'p' | 'h1' | 'h2' | 'h3' | 'h4';
}

export const Text = ({ 
    children,
    color = 'black',
    size = 'md',
    variant = 'p'
}: TextProps) => {

    const Tag = variant;

    return (
        <Tag className={twMerge(`text-${color} text-${size}`)}>
            {children}
        </Tag>
    );
};
