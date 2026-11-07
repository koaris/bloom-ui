import type { StoryObj, Meta } from '@storybook/react'
import { Faq, FaqProps } from '@koaris/bloom-ui'

export default {
  title: 'Data/Faq',
  component: Faq,
  tags: ['autodocs'],
  parameters: {
    docs: {
      description: {
        component:
          'Questions as native `<details>` disclosures. Bare https:// URLs in plain-text answers become links, so the same strings can feed FAQPage JSON-LD.',
      },
    },
  },
  args: {
    items: [
      {
        q: 'Is it free?',
        a: 'Yes. Everything runs in your browser and nothing is uploaded.',
      },
      {
        q: 'Where can I build a résumé?',
        a: 'Build one at https://resume.koaris.com, then check it here.',
      },
      {
        q: 'Does it work offline?',
        a: 'Once the page has loaded, yes.',
      },
    ],
  },
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 640, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<FaqProps>

export const Default: StoryObj<FaqProps> = {}
