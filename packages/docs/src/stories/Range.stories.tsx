import type { StoryObj, Meta } from '@storybook/react'
import { Range, RangeProps } from '@koaris/bloom-ui'
import { useState } from 'react'

const RangeWrapper = (args: RangeProps) => {
  const [value, setValue] = useState(Number(args.defaultValue ?? 80))
  return (
    <Range
      {...args}
      defaultValue={undefined}
      value={value}
      display={`${value}%`}
      onChange={(e) => setValue(Number(e.target.value))}
    />
  )
}

export default {
  title: 'Form/Range',
  component: Range,
  tags: ['autodocs'],
  args: {
    label: 'Quality',
    min: 0,
    max: 100,
    defaultValue: 80,
    hint: 'Lower values make smaller files.',
  },
  render: (args) => <RangeWrapper {...args} />,
  decorators: [
    (Story) => (
      <div style={{ maxWidth: 320, padding: 16 }}>
        <Story />
      </div>
    ),
  ],
} as Meta<RangeProps>

export const Default: StoryObj<RangeProps> = {}
