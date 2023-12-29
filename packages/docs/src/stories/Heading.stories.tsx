import type { StoryObj, Meta } from '@storybook/react'
import { Heading, HeadingProps } from '@koaris/bloom'

export default {
  title: 'Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  args: {
    children: "Example Header"
  },
  argTypes: {
    size: {
      options: ['sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'select',
      },
    },
    variant: {
      options: ['h1', 'h2', 'h3', 'h4'],
      control: {
        type: 'select',
      },
    }
  }
} as Meta<HeadingProps>

export const Default: StoryObj<HeadingProps> = {}

export const CustomTag: StoryObj<HeadingProps> = {
  args: {
    variant: "h1",
    children: "H1 html tag",
    size: "3xl"
  }
}


