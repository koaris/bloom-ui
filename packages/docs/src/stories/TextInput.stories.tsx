import type { StoryObj, Meta } from '@storybook/react'
import { Box, TextInput, TextInputProps } from '@koaris/bloom'

export default {
  title: 'Form/TextInput',
  component: TextInput,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'Placeholder',
    id: 'input01',
    name: 'input01',
    type: "text",
    prefix: 'koaris.com.br/appointment/',
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
  /*decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ]*/
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
