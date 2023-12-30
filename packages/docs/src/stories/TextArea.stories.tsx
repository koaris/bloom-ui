import type { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'Placeholder',
    id: 'input01',
    name: 'input01'
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

export const Label: StoryObj<TextAreaProps> = {
  args: {
    label: "Observações",
  },
}

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
