import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Modal } from '@koaris/bloom-ui';

// Define the props type for our wrapper component
interface ModalWrapperProps {
    initialOpen?: boolean;
    title?: string;
    size?: 'sm' | 'md' | 'lg' | 'xl';
    showCloseButton?: boolean;
    closeOnOutsideClick?: boolean;
    closeOnEsc?: boolean;
    footer?: React.ReactNode;
    children?: React.ReactNode;
}

// A wrapper component to manage state for the Modal in Storybook
const ModalWrapper = ({
    initialOpen = false,
    title = 'Modal Title',
    size = 'md',
    showCloseButton = true,
    closeOnOutsideClick = true,
    closeOnEsc = true,
    footer,
    children = 'Modal content goes here.',
}: ModalWrapperProps) => {
    const [isOpen, setIsOpen] = useState(initialOpen);

    return (
        <>
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
                Open Modal
            </button>

            <Modal
                isOpen={isOpen}
                onClose={() => setIsOpen(false)}
                title={title}
                size={size}
                showCloseButton={showCloseButton}
                closeOnOutsideClick={closeOnOutsideClick}
                closeOnEsc={closeOnEsc}
                footer={footer}
            >
                {children}
            </Modal>
        </>
    );
};

// This is the default export that Storybook requires
const meta: Meta<typeof ModalWrapper> = {
    title: 'Components/Modal',
    component: ModalWrapper,
    tags: ['autodocs'],
    parameters: {
        docs: {
            description: {
                component: 'A customizable modal dialog component that can be used to display content in a layer above the page.'
            },
        },
        controls: { sort: 'requiredFirst' },
    },
    argTypes: {
        initialOpen: {
            control: 'boolean',
            description: 'Whether the modal is initially open',
            defaultValue: false,
        },
        title: {
            control: 'text',
            description: 'Title text for the modal header',
        },
        size: {
            control: 'select',
            options: ['sm', 'md', 'lg', 'xl'],
            description: 'Size of the modal dialog',
            defaultValue: 'md',
        },
        showCloseButton: {
            control: 'boolean',
            description: 'Whether to show the close button in the header',
            defaultValue: true,
        },
        closeOnOutsideClick: {
            control: 'boolean',
            description: 'Whether to close the modal when clicking outside of it',
            defaultValue: true,
        },
        closeOnEsc: {
            control: 'boolean',
            description: 'Whether to close the modal when pressing the Escape key',
            defaultValue: true,
        },
        children: {
            control: 'text',
            description: 'Content to be displayed inside the modal',
        },
        footer: {
            control: null,
            description: 'Optional footer content for the modal',
        },
    },
    decorators: [
        (Story) => (
            <div className="p-6">
                <Story />
            </div>
        ),
    ],
};

export default meta;
type Story = StoryObj<typeof ModalWrapper>;

// Default story showing basic usage
export const Default: Story = {
    args: {
        title: 'Default Modal',
        children: 'This is a basic modal with default settings.',
    },
};

// Showcase different sizes
export const Sizes: Story = {
    render: () => (
        <div className="flex flex-wrap gap-4">
            <ModalWrapper
                size="sm"
                title="Small Modal"
                children="This is a small modal dialog."
            />
            <ModalWrapper
                size="md"
                title="Medium Modal (default)"
                children="This is a medium modal dialog."
            />
            <ModalWrapper
                size="lg"
                title="Large Modal"
                children="This is a large modal dialog."
            />
            <ModalWrapper
                size="xl"
                title="Extra Large Modal"
                children="This is an extra large modal dialog."
            />
        </div>
    ),
};

// Show without header
export const NoHeader: Story = {
    args: {
        title: undefined,
        showCloseButton: false,
        children: 'A modal with no header or close button.',
    },
};

// With footer
export const WithFooter: Story = {
    args: {
        title: 'Modal with Footer',
        children: 'This modal has a custom footer with action buttons.',
        footer: (
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                    Confirm
                </button>
            </div>
        ),
    },
};

// Example with longer content
export const LongContent: Story = {
    args: {
        title: 'Terms and Conditions',
        children: (
            <div className="space-y-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                <p>Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                <p>Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
        ),
    },
};

// Example in a form context
export const FormModal: Story = {
    args: {
        title: 'Edit Profile',
        children: (
            <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                    </label>
                    <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="John Doe"
                    />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="john@example.com"
                    />
                </div>
                <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Bio
                    </label>
                    <textarea
                        id="bio"
                        rows={3}
                        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                        defaultValue="Product designer at Acme Inc."
                    />
                </div>
            </form>
        ),
        footer: (
            <div className="flex justify-end gap-2">
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200"
                >
                    Cancel
                </button>
                <button
                    type="button"
                    className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
                >
                    Save Changes
                </button>
            </div>
        ),
    },
};