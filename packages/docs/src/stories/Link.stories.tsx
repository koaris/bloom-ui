import type { StoryObj, Meta } from '@storybook/react'
import { Link, LinkProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/Link',
  component: Link,
  tags: ['autodocs'],
  args: {
    children: 'Visualizar',
    url: 'https://x.com',
    newPage: true,
    disabled: false,
  },
  argTypes: {
    url: {
      control: {
        type: 'string',
      },
    },
    newPage: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
  },
} as Meta<LinkProps>

export const Primary: StoryObj<LinkProps> = {
  args: {
  },
}
export const SamePage: StoryObj<LinkProps> = {
  args: {
    newPage: false
  },
}

export const Disabled: StoryObj<LinkProps> = {
  args: {
    disabled: true,
  },
}
