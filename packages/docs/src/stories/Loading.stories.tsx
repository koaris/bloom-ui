import type { StoryObj, Meta } from '@storybook/react';
import { Loading, LoadingProps } from '@koaris/bloom-ui';

export default {
    title: 'Feedback/Loading',
    component: Loading,
    tags: ['autodocs'],
    args: {
        size: 'md',
        color: 'primary',
        withText: false,
        text: 'Loading...',
        centered: false,
    },
    argTypes: {
        size: {
            options: ['xs', 'sm', 'md', 'lg'],
            control: {
                type: 'select',
            },
            description: 'Controls the size of the loading spinner',
        },
        color: {
            options: ['primary', 'secondary', 'white', 'black', 'gray'],
            control: {
                type: 'select',
            },
            description: 'Controls the color of the loading spinner',
        },
        withText: {
            control: 'boolean',
            description: 'Whether to show loading text beside the spinner',
        },
        text: {
            control: 'text',
            description: 'Custom text to display next to the spinner',
        },
        centered: {
            control: 'boolean',
            description: 'Whether to center the loading spinner in its container',
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
} as Meta<LoadingProps>;

export const Default: StoryObj<LoadingProps> = {};

export const Small: StoryObj<LoadingProps> = {
    args: {
        size: 'sm',
    },
};

export const Large: StoryObj<LoadingProps> = {
    args: {
        size: 'lg',
    },
};

export const SecondaryColor: StoryObj<LoadingProps> = {
    args: {
        color: 'secondary',
    },
};

export const WithText: StoryObj<LoadingProps> = {
    args: {
        withText: true,
    },
};

export const CustomText: StoryObj<LoadingProps> = {
    args: {
        withText: true,
        text: 'Processing data...',
    },
};

export const Centered: StoryObj<LoadingProps> = {
    args: {
        centered: true,
    },
    decorators: [
        (Story) => (
            <div className="p-4 w-64 h-32 border border-gray-200 rounded">
                <Story />
            </div>
        ),
    ],
};

export const CenteredWithText: StoryObj<LoadingProps> = {
    args: {
        centered: true,
        withText: true,
    },
    decorators: [
        (Story) => (
            <div className="p-4 w-64 h-32 border border-gray-200 rounded">
                <Story />
            </div>
        ),
    ],
};

// Example of a loading overlay
export const LoadingOverlay: StoryObj<LoadingProps> = {
    render: () => (
        <div className="relative w-full h-64 border border-gray-200 rounded overflow-hidden">
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">
                <Loading size="lg" color="white" withText text="Loading content..." />
            </div>
            <div className="p-4">
                <p className="text-gray-500">Content underneath the overlay...</p>
            </div>
        </div>
    ),
};

// Example of loading in a card
export const LoadingCard: StoryObj<LoadingProps> = {
    render: () => (
        <div className="p-4 border border-gray-200 rounded shadow-sm">
            <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-medium">Data Dashboard</h3>
                <Loading size="sm" color="primary" />
            </div>
            <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-1/2"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
        </div>
    ),
};

// Example of inline loading with text
export const InlineLoading: StoryObj<LoadingProps> = {
    render: () => (
        <div className="p-4 border border-gray-200 rounded shadow-sm">
            <p className="mb-2">The system is currently:</p>
            <div className="flex items-center">
                <Loading size="xs" color="primary" />
                <span className="ml-2">Processing your request</span>
            </div>
        </div>
    ),
};