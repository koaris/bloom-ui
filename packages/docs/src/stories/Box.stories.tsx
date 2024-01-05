import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@koaris/bloom-ui'

export default {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    
  }
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {
  args: {
    variant: 'primary',
    children: <Text color='neutral-800'>Testando o elemento box</Text>
  }
}
export const Secondary: StoryObj<BoxProps> = {
  args: {
    variant: 'secondary',
    children: <Text color='neutral'>Testando o elemento box</Text>
  }
}
