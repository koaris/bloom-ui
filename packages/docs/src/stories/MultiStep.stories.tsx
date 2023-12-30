import type { StoryObj, Meta } from '@storybook/react'
import { Box, MultiStep, MultiStepProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/Multi Step',
  component: MultiStep,
  tags: ['autodocs'],
  args: {
    size: 4,
    currentStep: 1,
  },
  argTypes: {
    
  },
  decorators: [
    (Story) => (
      <Box>
        <Story />
      </Box>
    ),
  ]
} as Meta<MultiStepProps>

export const Default: StoryObj<MultiStepProps> = {}
