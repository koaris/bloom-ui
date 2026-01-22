import { DetailedHTMLProps, HTMLAttributes, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

export interface TextProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  children: ReactNode;
  color?: 'primary' | 'secondary' | 'accent' | 'neutral' | 'success' | 'warning' | 'error' | 'info';
  colorShade?: '50' | '100' | '200' | '300' | '400' | '500' | '600' | '700' | '800' | '900';
  size?: 'xxs' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl' | '4xl' | '5xl' | '6xl' | '7xl' | '8xl' | '9xl';
  tag?: 'p' | 'span' | 'label' | 'strong' | 'em' | 'small' | 'div';
  weight?: 'thin' | 'extralight' | 'light' | 'normal' | 'medium' | 'semibold' | 'bold' | 'extrabold' | 'black';
  leading?: 'none' | 'tight' | 'snug' | 'normal' | 'relaxed' | 'loose';
  alignment?: 'left' | 'center' | 'right' | 'justify';
  truncate?: boolean;
  italic?: boolean;
  uppercase?: boolean;
  lowercase?: boolean;
  capitalize?: boolean;
  htmlFor?: string;
}

const Text = ({
  children,
  color = 'neutral',
  colorShade = '900',
  size = 'md',
  tag = 'p',
  weight = 'normal',
  leading = 'normal',
  alignment = 'left',
  truncate = false,
  italic = false,
  uppercase = false,
  lowercase = false,
  capitalize = false,
  className,
  ...rest
}: TextProps) => {
  const fontSize = {
    xxs: 'text-xs', // fallback to xs since xxs isn't standard in Tailwind
    xs: 'text-xs',
    sm: 'text-sm',
    md: 'text-base', // fixed from 'text-md' to 'text-base'
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
    thin: 'font-thin',
    extralight: 'font-extralight',
    light: 'font-light',
    normal: 'font-normal',
    medium: 'font-medium',
    semibold: 'font-semibold',
    bold: 'font-bold',
    extrabold: 'font-extrabold',
    black: 'font-black',
  }[weight];

  const lineHeight = {
    none: 'leading-none',
    tight: 'leading-tight',
    snug: 'leading-snug',
    normal: 'leading-normal',
    relaxed: 'leading-relaxed',
    loose: 'leading-loose',
  }[leading];

  const textAlignment = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
    justify: 'text-justify',
  }[alignment];

  const colorClass = `text-${color}-${colorShade}`;

  const truncateClass = truncate ? 'truncate' : '';
  const italicClass = italic ? 'italic' : '';

  // Text transformation classes (only apply one)
  let transformClass = '';
  if (uppercase) transformClass = 'uppercase';
  else if (lowercase) transformClass = 'lowercase';
  else if (capitalize) transformClass = 'capitalize';

  const Tag = tag as React.ElementType;

  return (
    <Tag
      className={twMerge(
        colorClass,
        fontSize,
        fontWeight,
        lineHeight,
        textAlignment,
        truncateClass,
        italicClass,
        transformClass,
        className
      )}
      {...rest}
    >
      {children}
    </Tag>
  );
};


Text.displayName = 'Text'

export { Text }