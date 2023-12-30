import type { StoryObj, Meta } from '@storybook/react'
import { RadioGroup, RadioGroupProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  tags: ['autodocs'],
  args: {
    disabled: false,
    required: true,
    options: [
      { id: 1, label: 'Option 1', value: '1' },
      { id: 2, label: 'Option 2', value: '2' },
      { id: 3, label: 'Option 3', value: '3' },
    ],
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    required: {
      control: {
        type: 'boolean',
      },
    },
    options: {
      control: {
        type: 'object',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<RadioGroupProps>

export const Default: StoryObj<RadioGroupProps> = {}

export const Disabled: StoryObj<RadioGroupProps> = {
  args: {
    disabled: true,
  },
}
