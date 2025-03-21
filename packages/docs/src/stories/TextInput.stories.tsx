import type { StoryObj, Meta } from '@storybook/react'
import { TextInput, TextInputProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    value: '',
    type: "text",
    prefix: 'koaris.com.br/appointment/',
    placeholder: 'seu-user',
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
  }
} as Meta<TextInputProps>

export const Primary: StoryObj<TextInputProps> = {}

export const secondary: StoryObj<TextInputProps> = {
  args: {
    variant: "secondary",
  },
}

export const Error: StoryObj<TextInputProps> = {
  args: {
    error: true,
  },
}

export const Disabled: StoryObj<TextInputProps> = {
  args: {
    disabled: true,
  },
}
