import type { StoryObj, Meta } from '@storybook/react';
import { Skeleton, SkeletonProps } from '@koaris/bloom-ui';

export default {
    title: 'Feedback/Skeleton',
    component: Skeleton,
    tags: ['autodocs'],
    args: {
        width: 'full',
        height: '16',
        rounded: false,
        circle: false,
        animate: true,
    },
    argTypes: {
        width: {
            control: 'text',
            description: 'Width of the skeleton (number for pixels or string for Tailwind classes)',
        },
        height: {
            control: 'text',
            description: 'Height of the skeleton (number for pixels or string for Tailwind classes)',
        },
        rounded: {
            control: 'boolean',
            description: 'Makes the skeleton have rounded corners',
        },
        circle: {
            control: 'boolean',
            description: 'Makes the skeleton fully rounded (circular)',
        },
        animate: {
            control: 'boolean',
            description: 'Adds pulse animation to the skeleton',
        },
        className: {
            control: 'text',
            description: 'Additional CSS classes',
        },
    },
    decorators: [
        (Story) => (
            <div className="p-4 max-w-md">
                <Story />
            </div>
        ),
    ],
} as Meta<SkeletonProps>;

export const Default: StoryObj<SkeletonProps> = {};

export const Text: StoryObj<SkeletonProps> = {
    args: {
        height: '4',
        rounded: true,
    },
};

export const Circle: StoryObj<SkeletonProps> = {
    args: {
        width: '12',
        height: '12',
        circle: true,
    },
};

export const Rectangle: StoryObj<SkeletonProps> = {
    args: {
        width: '64',
        height: '32',
    },
};

export const Rounded: StoryObj<SkeletonProps> = {
    args: {
        width: '64',
        height: '32',
        rounded: true,
    },
};

export const NoAnimation: StoryObj<SkeletonProps> = {
    args: {
        animate: false,
        rounded: true,
    },
};

export const CardSkeleton: StoryObj<SkeletonProps> = {
    render: () => (
        <div className="border border-gray-200 rounded-md p-4 max-w-sm w-full">
            <div className="flex space-x-4">
                <Skeleton width="12" height="12" circle />
                <div className="flex-1 space-y-2 py-1">
                    <Skeleton height="4" rounded />
                    <Skeleton height="4" width="3/4" rounded />
                </div>
            </div>
            <div className="space-y-3 mt-4">
                <Skeleton height="4" rounded />
                <Skeleton height="4" rounded />
                <Skeleton height="4" width="5/6" rounded />
            </div>
        </div>
    ),
};

export const TableSkeleton: StoryObj<SkeletonProps> = {
    render: () => (
        <div className="w-full">
            <div className="flex border-b border-gray-200 py-2">
                <Skeleton className="w-1/4 h-4 mr-2" rounded />
                <Skeleton className="w-1/4 h-4 mr-2" rounded />
                <Skeleton className="w-1/4 h-4 mr-2" rounded />
                <Skeleton className="w-1/4 h-4" rounded />
            </div>
            {[...Array(5)].map((_, i) => (
                <div key={i} className="flex border-b border-gray-200 py-3">
                    <Skeleton className="w-1/4 h-4 mr-2" rounded />
                    <Skeleton className="w-1/4 h-4 mr-2" rounded />
                    <Skeleton className="w-1/4 h-4 mr-2" rounded />
                    <Skeleton className="w-1/4 h-4" rounded />
                </div>
            ))}
        </div>
    ),
};