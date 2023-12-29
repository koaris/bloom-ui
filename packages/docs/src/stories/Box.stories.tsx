import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@koaris/bloom'

export default {
  title: 'Components/Box',
  component: Box,
  args: {
    children: <Text color='neutral'>Testando o elemento box</Text>
  }
} as Meta<BoxProps>

export const Default: StoryObj<BoxProps> = {}
