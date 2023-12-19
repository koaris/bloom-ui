import type { StoryObj, Meta } from '@storybook/react'
import { Radio, RadioProps } from '@koaris/bloom'

export default {
  title: 'Form/Radio',
  component: Radio,
  args: {
    variant: 'primary',
    disabled: false,
    selected: true,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
    selected: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<RadioProps>

export const Primary: StoryObj<RadioProps> = {}

export const Disabled: StoryObj<RadioProps> = {
  args: {
    disabled: true,
  },
}
