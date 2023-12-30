import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    value: '',
    id: 'input01',
    name: 'input01',
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

export const Default: StoryObj<TextInputProps> = {}

export const Label: StoryObj<TextInputProps> = {
  args: {
    label: "Nome Fantasia",
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
