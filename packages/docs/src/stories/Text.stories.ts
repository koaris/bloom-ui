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
        type: 'multi-select',
      },
    }
  }
} as Meta<TextProps>

export const Default: StoryObj<TextProps> = {}

export const h1: StoryObj<TextProps> = {
  args: {
    variant: "h1",
    size: "4xl"
  }
}

export const h2: StoryObj<TextProps> = {
  args: {
    variant: "h2",
    size: "2xl"
  }
}

export const h3: StoryObj<TextProps> = {
  args: {
    variant: "h3",
    size: "xl"
  }
}

export const h4: StoryObj<TextProps> = {
  args: {
    variant: "h4",
    size: "lg"
  }
}
