import type { StoryObj, Meta } from '@storybook/react'
import { Input, InputProps } from '@koaris/bloom'

export default {
  title: 'Form/Input',
  component: Input,
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
    onClick: {
      action: 'click',
    },
  },
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {}

export const Label: StoryObj<InputProps> = {
  args: {
    label: "Nome Fantasia",
  },
}

export const Password: StoryObj<InputProps> = {
  args: {
    label: "Senha",
    type: "cnpj",
  },
}

export const Error: StoryObj<InputProps> = {
  args: {
    error: true,
  },
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    disabled: true,
  },
}
