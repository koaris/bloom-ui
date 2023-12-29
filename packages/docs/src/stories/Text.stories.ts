import type { StoryObj, Meta } from '@storybook/react'
import { Text, TextProps } from '@koaris/bloom'

export default {
  title: 'Form/Text',
  component: Text,
  args: {
    children: "Example text"
  },
  argTypes: {
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'select',
      },
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const Title: StoryObj<TextProps> = {
  args: {
    variant: "h1",
    size: "2xl"
  }
}

export const Subtitle: StoryObj<TextProps> = {
  args: {
    variant: "h2",
    size: "xl"
  }
}

export const Strong: StoryObj<TextProps> = {
  args: {
    variant: "strong"
  }
}
