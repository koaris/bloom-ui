import type { StoryObj, Meta } from '@storybook/react'
import { Input, InputProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'Placeholder',
    type: "text",
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
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {}

export const CNPJ: StoryObj<InputProps> = {
  args: {
    type: "cnpj",
  },
}

export const CPF: StoryObj<InputProps> = {
  args: {
    type: "cpf",
  },
}

export const CEP: StoryObj<InputProps> = {
  args: {
    type: "cep",
  },
}

export const Date: StoryObj<InputProps> = {
  args: {
    type: "date",
  },
}

export const Phone: StoryObj<InputProps> = {
  args: {
    type: "phone",
  },
}

export const Password: StoryObj<InputProps> = {
  args: {
    type: "password",
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
