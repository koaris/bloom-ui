import type { StoryObj, Meta } from '@storybook/react'
import { Select, SelectProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/Select',
  component: Select,
  tags: ['autodocs'],
  args: {
    label: 'Format',
    hint: 'Lossless formats keep transparency.',
    options: [
      { value: 'png', label: 'PNG' },
      { value: 'jpeg', label: 'JPEG' },
      { value: 'webp', label: 'WebP' },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<SelectProps>

export const Default: StoryObj<SelectProps> = {}

export const WithError: StoryObj<SelectProps> = {
  args: { hint: undefined, error: 'Pick a format.' },
}
