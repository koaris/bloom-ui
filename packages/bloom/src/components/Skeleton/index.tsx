import React from 'react';
import { twMerge } from 'tailwind-merge';

export interface SkeletonProps {
    width?: string | number;
    height?: string | number;
    rounded?: boolean;
    circle?: boolean;
    animate?: boolean;
    className?: string;
}

export const Skeleton: React.FC<SkeletonProps> = ({
    width = 'full',
    height = '16',
    rounded = false,
    circle = false,
    animate = true,
    className,
}) => {
    const widthClass = typeof width === 'string'
        ? width.includes('px') || width.includes('%') || width.includes('rem') || width.includes('em')
            ? `w-[${width}]`
            : `w-${width}`
        : `w-[${width}px]`;

    const heightClass = typeof height === 'string'
        ? height.includes('px') || height.includes('%') || height.includes('rem') || height.includes('em')
            ? `h-[${height}]`
            : `h-${height}`
        : `h-[${height}px]`;

    const safeWidthClass = widthClass.includes('[') ? 'w-full' : widthClass;
    const safeHeightClass = heightClass.includes('[') ? 'h-16' : heightClass;

    return (
        <div
            className={twMerge(
                'bg-gray-200',
                safeWidthClass,
                safeHeightClass,
                rounded && !circle && 'rounded-md',
                circle && 'rounded-full',
                animate && 'animate-pulse',
                className
            )}
            aria-hidden="true"
        />
    );
};

Skeleton.displayName = 'Skeleton';

export default Skeleton;