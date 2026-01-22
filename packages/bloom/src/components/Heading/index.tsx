import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export interface HeadingProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLHeadingElement>, HTMLHeadingElement> {
  children: React.ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error' | 'info';
  colorShade?: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  size?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  weight?: 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold';
  tracking?: 'tighter' | 'tight' | 'normal' | 'wide' | 'wider' | 'widest';
  alignment?: 'left' | 'center' | 'right';
  truncate?: boolean;
  uppercase?: boolean;
}

export const Heading = ({
  children,
  color = 'neutral',
  colorShade = '900',
  size = 'lg',
  tag = 'h2',
  weight = 'bold',
  tracking = 'normal',
  alignment = 'left',
  truncate = false,
  uppercase = false,
  className,
  ...rest
}: HeadingProps) => {
  const fontSize = {
    sm: 'text-sm',
    md: 'text-base',
    lg: 'text-lg',
    xl: 'text-xl',
    '2xl': 'text-2xl',
    '3xl': 'text-3xl',
    '4xl': 'text-4xl',
    '5xl': 'text-5xl',
    '6xl': 'text-6xl',
    '7xl': 'text-7xl',
    '8xl': 'text-8xl',
    '9xl': 'text-9xl',
  }[size];

  const fontWeight = {
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
  }[weight];

  const letterTracking = {
    tighter: 'tracking-tighter',
    tight: 'tracking-tight',
    normal: 'tracking-normal',
    wide: 'tracking-wide',
    wider: 'tracking-wider',
    widest: 'tracking-widest',
  }[tracking];

  const textAlignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  }[alignment];

  const colorClass = `text-${color}-${colorShade}`;

  const truncateClass = truncate ? 'truncate' : '';
  const uppercaseClass = uppercase ? 'uppercase' : '';

  const Tag = tag as React.ElementType;

  return (
    <Tag
      className={twMerge(
        colorClass,
        fontSize,
        fontWeight,
        letterTracking,
        textAlignment,
        truncateClass,
        uppercaseClass,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};