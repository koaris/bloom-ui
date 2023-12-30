import type { StoryObj, Meta } from '@storybook/react'
import { Input, InputProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/Input',
  component: Input,
  tags: ['autodocs'],
  args: {
    value: '',
    placeholder: 'Placeholder',
    id: 'input01',
    name: 'input01',
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

export const Label: StoryObj<InputProps> = {
  args: {
    label: "Nome Fantasia",
  },
}

export const CNPJ: StoryObj<InputProps> = {
  args: {
    label: "CNPJ",
    type: "cnpj",
  },
}

export const CPF: StoryObj<InputProps> = {
  args: {
    label: "CPF",
    type: "cpf",
  },
}

export const CEP: StoryObj<InputProps> = {
  args: {
    label: "CEP",
    type: "cep",
  },
}

export const Date: StoryObj<InputProps> = {
  args: {
    label: "Date",
    type: "date",
  },
}

export const Phone: StoryObj<InputProps> = {
  args: {
    label: "Phone",
    type: "phone",
  },
}

export const Password: StoryObj<InputProps> = {
  args: {
    label: "Senha",
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
