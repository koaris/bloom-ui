import type { StoryObj, Meta } from '@storybook/react'
import { RadioGroup, RadioGroupProps } from '@koaris/bloom'

export default {
  title: 'Form/RadioGroup',
  component: RadioGroup,
  args: {
    variant: 'primary',
    disabled: false,
    required: true,
    options: [
      { id: 1, label: 'Option 1', value: '1' },
      { id: 2, label: 'Option 2', value: '2' },
      { id: 3, label: 'Option 3', value: '3' },
    ],
  },
  argTypes: {
    variant: {
      options: ['primary'],
      control: {
        type: 'inline-radio',
      },
    },
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

export const Primary: StoryObj<RadioGroupProps> = {}

export const Disabled: StoryObj<RadioGroupProps> = {
  args: {
    disabled: true,
  },
}
