import type { StoryObj, Meta } from '@storybook/react'
import { ColorField, ColorFieldProps } from '@koaris/bloom-ui'
import { useState } from 'react'

const ColorFieldWrapper = (args: ColorFieldProps) => {
  const [value, setValue] = useState(args.value)
  return <ColorField {...args} value={value} onChange={setValue} />
}

export default {
  title: 'Form/ColorField',
  component: ColorField,
  tags: ['autodocs'],
  args: {
    label: 'Foreground',
    value: '#c13f27',
    disabled: false,
  },
  render: (args) => <ColorFieldWrapper {...args} />,
  decorators: [
    (Story) => (
      <div style={{ padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<ColorFieldProps>

export const Default: StoryObj<ColorFieldProps> = {}
