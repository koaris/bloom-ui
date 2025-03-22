import type { Meta, StoryObj } from '@storybook/react'
import { Input, InputProps } from '@koaris/bloom-ui'


export default {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'date', 'cpf', 'phone', 'cnpj', 'cep'],
      description: 'Type of input to render',
    },
    countryCode: {
      control: 'select',
      options: ['BR', 'US', 'UK', 'DE', 'FR'],
      description: 'Whether the input is phone',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the input is disabled',
    },
    required: {
      control: 'boolean',
      description: 'Whether the input is required',
    },
    error: {
      control: 'boolean',
      description: 'Whether the input has an error',
    },
    validated: {
      control: 'boolean',
      description: 'Whether the input has been validated',
    },
    label: {
      control: 'text',
      description: 'Label for the input field',
    },
    helperText: {
      control: 'text',
      description: 'Helper text to display below the input',
    },
    errorMessage: {
      control: 'text',
      description: 'Custom error message to display',
    },
  },
} as Meta<InputProps>

export const Default: StoryObj<InputProps> = {
  args: {
    type: 'text',
    placeholder: 'Enter text...',
  },
}

export const WithLabel: StoryObj<InputProps> = {
  args: {
    type: 'text',
    label: 'Username',
    placeholder: 'Enter your username',
  },
}

export const Required: StoryObj<InputProps> = {
  args: {
    type: 'email',
    label: 'Email',
    required: true,
    placeholder: 'Enter your email',
  },
}

export const WithHelperText: StoryObj<InputProps> = {
  args: {
    type: 'text',
    label: 'Username',
    helperText: 'Username must be at least 3 characters long',
    placeholder: 'Enter your username',
  },
}

export const WithError: StoryObj<InputProps> = {
  args: {
    type: 'text',
    label: 'Email',
    error: true,
    errorMessage: 'Please enter a valid email address',
    placeholder: 'Enter your email',
  },
}

export const Validated: StoryObj<InputProps> = {
  args: {
    type: 'text',
    label: 'Username',
    validated: true,
    placeholder: 'Enter your username',
  },
}

export const Disabled: StoryObj<InputProps> = {
  args: {
    type: 'text',
    label: 'Username',
    disabled: true,
    placeholder: 'Enter your username',
  },
}

export const Password: StoryObj<InputProps> = {
  args: {
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
  },
}

export const Date: StoryObj<InputProps> = {
  args: {
    type: 'date',
    label: 'Birth Date',
    placeholder: 'Select your birth date',
  },
}

export const CPF: StoryObj<InputProps> = {
  args: {
    type: 'cpf',
    label: 'CPF',
    placeholder: 'Enter your CPF',
  },
}

export const Phone: StoryObj<InputProps> = {
  args: {
    type: 'phone',
    label: 'Phone Number',
    placeholder: 'Enter your phone number',
  },
}

export const CNPJ: StoryObj<InputProps> = {
  args: {
    type: 'cnpj',
    label: 'CNPJ',
    placeholder: 'Enter your CNPJ',
  },
}

export const CEP: StoryObj<InputProps> = {
  args: {
    type: 'cep',
    label: 'CEP',
    placeholder: 'Enter your CEP',
  },
}

export const FullExample: StoryObj<InputProps> = {
  args: {
    type: 'text',
    label: 'Full Name',
    required: true,
    placeholder: 'Enter your full name',
    helperText: 'Please enter your legal name as it appears on your documents',
  },
}

export const WithErrorAndHelper: StoryObj<InputProps> = {
  args: {
    type: 'text',
    label: 'Email',
    required: true,
    error: true,
    errorMessage: 'Please enter a valid email address',
    helperText: 'We will use this email to send you important updates',
    placeholder: 'Enter your email',
  },
} 