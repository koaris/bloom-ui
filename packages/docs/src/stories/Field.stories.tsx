import type { StoryObj, Meta } from '@storybook/react'
import { Field, FieldProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/Field',
  component: Field,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Labelled input or textarea in a sunken well. `hint` and `error` are wired to `aria-describedby`; `mono` is for code and data.',
      },
    },
  },
  args: {
    label: 'Name',
    placeholder: 'Your name',
    hint: 'As it should appear on the invoice.',
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 420, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<FieldProps>

export const Default: StoryObj<FieldProps> = {}

export const WithError: StoryObj<FieldProps> = {
  args: {
    label: 'Email',
    defaultValue: 'not-an-email',
    error: "That email doesn't look right.",
  },
}

export const MonoTextarea: StoryObj<FieldProps> = {
  args: {
    as: 'textarea',
    label: 'Input',
    mono: true,
    rows: 6,
    hint: undefined,
    defaultValue: '{\n  "hello": "world"\n}',
  },
}

export const Disabled: StoryObj<FieldProps> = {
  args: { disabled: true, defaultValue: 'Read only' },
}
