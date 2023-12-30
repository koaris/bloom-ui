import type { StoryObj, Meta } from '@storybook/react'
import { Checkbox, CheckboxProps, Text, TextProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  args: {
    required: true,
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
  decorators: [
    (Story) => (
      <div className='flex'>
        <Story />
        <Text variant="span" children="Aceite os termos de uso." />
      </div>
    ),
  ]
} as Meta<CheckboxProps>

export const Default: StoryObj<CheckboxProps> = {}
