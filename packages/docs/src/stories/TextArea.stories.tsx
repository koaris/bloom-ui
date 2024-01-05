import type { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'Placeholder',
  },
  argTypes: {
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    error: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
  decorators: [
    (Story) => (
      <Story />
    ),
  ]
} as Meta<TextAreaProps>

export const Default: StoryObj<TextAreaProps> = {}

export const Error: StoryObj<TextAreaProps> = {
  args: {
    error: true,
  },
}

export const Disabled: StoryObj<TextAreaProps> = {
  args: {
    disabled: true,
  },
}
