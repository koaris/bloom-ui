import type { StoryObj, Meta } from '@storybook/react'
import { Input, InputProps } from '@koaris/bloom'

export default {
  title: 'Form/Input',
  component: Input,
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

export const Cnpj: StoryObj<InputProps> = {
  args: {
    label: "Cnpj",
    type: "cnpj",
  },
}

export const Cpf: StoryObj<InputProps> = {
  args: {
    label: "Cpf",
    type: "cpf",
  },
}

export const Cep: StoryObj<InputProps> = {
  args: {
    label: "Cep",
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
