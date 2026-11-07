import type { StoryObj, Meta } from '@storybook/react'
import {
  OutputPanel,
  OutputPanelProps,
  OutputPanelStringsProvider,
} from '@koaris/bloom-ui'

export default {
  title: 'Data/OutputPanel',
  component: OutputPanel,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Read-only result well with a Copy button and a character count. Wrap a localised screen in `OutputPanelStringsProvider` (`en` or `pt`); explicit props win over the provider.',
      },
    },
  },
  args: {
    value: 'https://koaris.com/?utm_source=newsletter&utm_medium=email',
  },
  argTypes: {
    onCopied: { action: 'copied' },
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 560, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<OutputPanelProps>

export const Default: StoryObj<OutputPanelProps> = {}

export const Empty: StoryObj<OutputPanelProps> = {
  args: { value: '' },
}

export const Portuguese: StoryObj<OutputPanelProps> = {
  decorators: [
    (Story) => (
      <OutputPanelStringsProvider locale="pt-BR">
        <Story />
      </OutputPanelStringsProvider>
    ),
  ],
}
