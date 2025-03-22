import type { StoryObj, Meta } from '@storybook/react';
import { useState } from 'react';
import { Toast, ToastProps, ToastContainer, ToastProvider, useToast } from '@koaris/bloom-ui';
import { Button } from '@koaris/bloom-ui';

export default {
    title: 'Feedback/Toast',
    component: Toast,
    tags: ['autodocs'],
    args: {
        id: 'toast-1',
        message: 'This is a toast notification',
        title: 'Notification',
        variant: 'info',
        duration: 5000,
        showCloseButton: true,
    },
    argTypes: {
        id: {
            control: 'text',
            description: 'Unique identifier for the toast',
        },
        message: {
            control: 'text',
            description: 'Content message of the toast',
        },
        title: {
            control: 'text',
            description: 'Optional title for the toast',
        },
        variant: {
            options: ['success', 'error', 'warning', 'info'],
            control: {
                type: 'select',
            },
            description: 'Visual style variant of the toast',
        },
        duration: {
            control: 'number',
            description: 'Duration in milliseconds before auto-dismiss (0 for no auto-dismiss)',
        },
        showCloseButton: {
            control: 'boolean',
            description: 'Whether to show the close button',
        },
        onDismiss: {
            action: 'dismissed',
        },
    },
    decorators: [
        (Story) => (
            <div className="p-4">
                <Story />
            </div>
        ),
    ],
} as Meta<ToastProps>;

// Individual toast examples
export const Info: StoryObj<ToastProps> = {
    args: {
        variant: 'info',
        message: 'This is an informational message',
    },
};

export const Success: StoryObj<ToastProps> = {
    args: {
        variant: 'success',
        message: 'Operation completed successfully',
    },
};

export const Warning: StoryObj<ToastProps> = {
    args: {
        variant: 'warning',
        message: 'This action might cause issues',
    },
};

export const Error: StoryObj<ToastProps> = {
    args: {
        variant: 'error',
        message: 'An error occurred during the operation',
    },
};

export const WithTitle: StoryObj<ToastProps> = {
    args: {
        title: 'Profile Updated',
        message: 'Your profile has been successfully updated.',
        variant: 'success',
    },
};

export const LongDuration: StoryObj<ToastProps> = {
    args: {
        message: 'This toast will stay for 10 seconds',
        duration: 10000,
    },
};

export const NoDismiss: StoryObj<ToastProps> = {
    args: {
        message: 'This toast will not auto-dismiss',
        duration: 0,
    },
};

export const NoCloseButton: StoryObj<ToastProps> = {
    args: {
        message: 'This toast does not have a close button',
        showCloseButton: false,
    },
};

// Interactive example with ToastProvider
const ToastDemo = () => {
    const { showToast } = useToast();

    const handleShowToast = (variant: ToastProps['variant']) => {
        const messages = {
            success: 'Operation completed successfully!',
            error: 'An error occurred. Please try again.',
            warning: 'Warning: This action cannot be undone.',
            info: 'Here is some information you might find useful.',
        };

        const titles = {
            success: 'Success',
            error: 'Error',
            warning: 'Warning',
            info: 'Information',
        };

        showToast({
            title: titles[variant || 'info'],
            message: messages[variant || 'info'],
            variant,
            duration: 3000,
        });
    };

    return (
        <div className="space-y-4">
            <div className="flex flex-wrap gap-2">
                <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleShowToast('info')}
                >
                    Show Info Toast
                </Button>
                <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleShowToast('success')}
                >
                    Show Success Toast
                </Button>
                <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleShowToast('warning')}
                >
                    Show Warning Toast
                </Button>
                <Button
                    variant="primary"
                    size="sm"
                    onClick={() => handleShowToast('error')}
                >
                    Show Error Toast
                </Button>
            </div>
        </div>
    );
};

export const ToastManager: StoryObj = {
    render: () => (
        <ToastProvider position="top-right">
            <ToastDemo />
        </ToastProvider>
    ),
};

// Example showing different positions
const PositionDemo = () => {
    const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');
    const { showToast } = useToast();

    const handleShowToast = () => {
        showToast({
            title: `Toast - ${position}`,
            message: `This toast appears in the ${position} position`,
            variant: 'info',
            duration: 3000,
        });
    };

    return (
        <div className="space-y-4">
            <div className="mb-4">
                <label className="block text-sm font-medium mb-2">Toast Position:</label>
                <select
                    className="border border-gray-300 rounded-md p-2"
                    value={position}
                    onChange={(e) => setPosition(e.target.value as any)}
                >
                    <option value="top-right">Top Right</option>
                    <option value="top-left">Top Left</option>
                    <option value="bottom-right">Bottom Right</option>
                    <option value="bottom-left">Bottom Left</option>
                    <option value="top-center">Top Center</option>
                    <option value="bottom-center">Bottom Center</option>
                </select>
            </div>
            <Button
                variant="primary"

                onClick={handleShowToast}
            >
                Show Toast
            </Button>
        </div>
    );
};

export const ToastPositions: StoryObj = {
    render: () => {
        const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');

        return (
            <ToastProvider position={position}>
                <PositionDemo />
            </ToastProvider>
        );
    },
};