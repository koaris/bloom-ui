import type { StoryObj, Meta } from '@storybook/react'
import { Avatar, AvatarProps } from '@koaris/bloom'

export default {
  title: 'Components/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  args: {
    src: "https://avatars.githubusercontent.com/u/36766110?v=4",
    alt: 'Guilherme',
  },
} as Meta<AvatarProps>

export const Default: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}


