import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@koaris/bloom-ui'

export default {
  title: 'Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: "Example text"
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['p', 'strong', 'span', 'label'],
      control: {
        type: 'select',
      },
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Strong: StoryObj<TextProps> = {
  args: {
    variant: "strong"
  }
}

export const Span: StoryObj<TextProps> = {
  args: {
    variant: "span"
  }
}

export const Label: StoryObj<TextProps> = {
  args: {
    variant: "label"
  }
}
