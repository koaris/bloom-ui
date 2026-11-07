import type { StoryObj, Meta } from '@storybook/react'
import { DropZone, DropZoneProps } from '@koaris/bloom-ui'

export default {
  title: 'Form/DropZone',
  component: DropZone,
  tags: ['autodocs'],
  args: {
    label: 'Image',
  },
  argTypes: {
    onChange: { action: 'changed' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 480, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<DropZoneProps>

export const Default: StoryObj<DropZoneProps> = {}

export const Documents: StoryObj<DropZoneProps> = {
  args: {
    label: 'Résumé',
    accept: '.pdf,.docx',
    hint: 'PDF or DOCX, up to 5 MB',
  },
}
