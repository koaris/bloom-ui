import type { StoryObj, Meta } from '@storybook/react'
import { Toggle, ToggleProps } from '@koaris/bloom-ui'
import { useState } from 'react'

type ToggleWrapperProps = Omit<ToggleProps, "setActive">; 

// A wrapper component to manage state for the Toggle in Storybook
const ToggleWrapper = (args: ToggleWrapperProps) => {
  const [active, setActive] = useState(args.active)
  return (
    <Toggle
      {...args}
      active={active}
      setActive={setActive}
    />
  )
}

export default {
  title: 'Form/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component: 'A customizable toggle switch component that can be used to switch between two states.'
      },
    },
    controls: { sort: 'requiredFirst' },
    backgrounds: {
      default: 'light',
      values: [
        { name: 'light', value: '#fff' },
        { name: 'dark', value: '#1f2937' },
      ],
    },
  },
  args: {
    disabled: false,
    active: false,
    label: 'Toggle switch',
    size: 'md',
    hideLabel: false,
  },
  argTypes: {
    disabled: {
      control: 'boolean',
      description: 'Disables the toggle switch',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    active: {
      control: 'boolean',
      description: 'Controls the toggle state',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    label: {
      control: 'text',
      description: 'Label text for the toggle',
      table: {
        type: { summary: 'string' },
      },
    },
    setActive: {
      description: 'Function to handle toggle state changes',
      table: {
        type: { summary: '(active: boolean) => void' },
      },
      action: 'toggled',
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Size of the toggle switch',
      table: {
        type: { summary: 'sm | md | lg' },
        defaultValue: { summary: 'md' },
      },
    },
    hideLabel: {
      control: 'boolean',
      description: 'Whether to hide the visual label (still accessible via ARIA)',
      table: {
        type: { summary: 'boolean' },
        defaultValue: { summary: false },
      },
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
      table: {
        type: { summary: 'string' },
      },
    },
    id: {
      control: 'text',
      description: 'Optional ID for the toggle (auto-generated if not provided)',
      table: {
        type: { summary: 'string' },
      },
    },
  },
  decorators: [
    (Story) => (
      <div className="p-6 max-w-md">
        <Story />
      </div>
    ),
  ],
  render: (args) => <ToggleWrapper {...args} />,
} as Meta<ToggleProps>

// Default story showing basic usage
export const Default: StoryObj<ToggleProps> = {}

// Showcase different sizes
export const Sizes: StoryObj<ToggleProps> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ToggleWrapper label="Small toggle" size="sm" active={false} />
      <ToggleWrapper label="Medium toggle (default)" size="md" active={false} />
      <ToggleWrapper label="Large toggle" size="lg" active={false} />
    </div>
  ),
}

// Show states (active/disabled)
export const States: StoryObj<ToggleProps> = {
  render: () => (
    <div className="flex flex-col gap-4">
      <ToggleWrapper label="Active toggle" active={true} />
      <ToggleWrapper label="Disabled toggle (off)" disabled={true} active={false} />
      <ToggleWrapper label="Disabled toggle (on)" disabled={true} active={true} />
    </div>
  ),
}

// Show with hidden label
export const HiddenLabel: StoryObj<ToggleProps> = {
  args: {
    hideLabel: true,
    label: "Screen reader only label",
  },
}

// Example in a form context
export const InForm: StoryObj<ToggleProps> = {
  render: () => (
    <form className="p-4 border border-gray-200 rounded-md">
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-medium">Notification Settings</h3>
        <ToggleWrapper label="Email notifications" active={true} />
        <ToggleWrapper label="Push notifications" active={false} />
        <ToggleWrapper label="SMS notifications" active={false} />
        <div className="mt-4">
          <button
            type="button"
            className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700"
          >
            Save Settings
          </button>
        </div>
      </div>
    </form>
  ),
}