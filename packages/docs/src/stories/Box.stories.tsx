import type { StoryObj, Meta } from '@storybook/react'
import { Box, BoxProps, Text } from '@koaris/bloom-ui'

export default {
  title: 'Components/Box',
  component: Box,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'ghost', 'outline'],
      description: 'Visual style variant of the box'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'Size of the box affecting padding and text size'
    },
    tag: {
      control: 'select',
      options: ['div', 'section', 'article', 'aside', 'header', 'footer', 'main', 'nav'],
      description: 'HTML element used to render the box'
    },
    elevated: {
      control: 'boolean',
      description: 'Applies a shadow effect to the box'
    },
    hasBorder: {
      control: 'boolean',
      description: 'Controls the visibility of the border'
    },
    isInteractive: {
      control: 'boolean',
      description: 'Adds hover/active states to suggest interactivity'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Makes the box take the full width of its container'
    }
  },
  args: {
    variant: 'primary',
    size: 'md',
    tag: 'div',
    elevated: false,
    hasBorder: true,
    isInteractive: false,
    fullWidth: false
  }
} as Meta<BoxProps>

// Base template for consistent layout
const Template: StoryObj<BoxProps> = {
  render: (args) => (
    <div style={{ maxWidth: '600px' }}>
      <Box {...args} />
    </div>
  )
}

export const Primary: StoryObj<BoxProps> = {
  ...Template,
  args: {
    variant: 'primary',
    children: <Text color='neutral-800'>Primary box variant</Text>
  }
}

export const Secondary: StoryObj<BoxProps> = {
  ...Template,
  args: {
    variant: 'secondary',
    children: <Text color='neutral-200'>Secondary box variant</Text>
  }
}

export const Ghost: StoryObj<BoxProps> = {
  ...Template,
  args: {
    variant: 'ghost',
    children: <Text color='neutral-800'>Ghost box variant (transparent)</Text>
  }
}

export const Outline: StoryObj<BoxProps> = {
  ...Template,
  args: {
    variant: 'outline',
    children: <Text color='neutral-800'>Outline box variant</Text>
  }
}

export const Sizes: StoryObj<BoxProps> = {
  render: () => (
    <div className="space-y-4">
      <Box size="sm" variant="primary">
        <Text color='neutral-800'>Small size (sm)</Text>
      </Box>
      <Box size="md" variant="primary">
        <Text color='neutral-800'>Medium size (md)</Text>
      </Box>
      <Box size="lg" variant="primary">
        <Text color='neutral-800'>Large size (lg)</Text>
      </Box>
      <Box size="xl" variant="primary">
        <Text color='neutral-800'>Extra large size (xl)</Text>
      </Box>
    </div>
  )
}

export const Elevated: StoryObj<BoxProps> = {
  ...Template,
  args: {
    variant: 'primary',
    elevated: true,
    children: <Text color='neutral-800'>Elevated box with shadow</Text>
  }
}

export const Interactive: StoryObj<BoxProps> = {
  ...Template,
  args: {
    variant: 'primary',
    isInteractive: true,
    children: <Text color='neutral-800'>Interactive box (hover me)</Text>
  }
}

export const SemanticTags: StoryObj<BoxProps> = {
  render: () => (
    <div className="space-y-4">
      <Box tag="section" variant="outline">
        <Text color='neutral-800'>Section tag</Text>
      </Box>
      <Box tag="article" variant="outline">
        <Text color='neutral-800'>Article tag</Text>
      </Box>
      <Box tag="nav" variant="outline">
        <Text color='neutral-800'>Navigation tag</Text>
      </Box>
    </div>
  )
}

export const CustomizationExample: StoryObj<BoxProps> = {
  ...Template,
  args: {
    variant: 'primary',
    elevated: true,
    isInteractive: true,
    className: 'bg-blue-100 text-blue-800 border-blue-300',
    children: <Text color='blue-800'>Custom styled box with className</Text>
  }
}

export const ComplexContent: StoryObj<BoxProps> = {
  ...Template,
  args: {
    variant: 'outline',
    size: 'lg',
    children: (
      <div className="space-y-4">
        <Text tag="strong" size="lg" color='neutral-800'>Box with complex content</Text>
        <Text color='neutral-600'>Boxes can contain any React components, not just text. This makes them versatile containers for building complex UI components.</Text>
        <div className="flex gap-2">
          <Box size="sm" variant="primary" elevated>
            <Text color='neutral-800'>Nested box</Text>
          </Box>
          <Box size="sm" variant="secondary">
            <Text color='neutral-200'>Another nested box</Text>
          </Box>
        </div>
      </div>
    )
  }
}