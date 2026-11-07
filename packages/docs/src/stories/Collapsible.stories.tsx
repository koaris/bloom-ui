import type { StoryObj, Meta } from '@storybook/react'
import { Collapsible, CollapsibleProps, Text } from '@koaris/bloom-ui'

export default {
  title: 'Data/Collapsible',
  component: Collapsible,
  tags: ['autodocs'],
  args: {
    label: 'Advanced options',
    defaultOpen: false,
    children: (
      <Text size="sm">
        Sizes, padding and background colour for every icon.
      </Text>
    ),
  },
  argTypes: {
    onOpenChange: { action: 'toggled' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<CollapsibleProps>

export const Default: StoryObj<CollapsibleProps> = {}

export const Open: StoryObj<CollapsibleProps> = {
  args: { defaultOpen: true },
}
