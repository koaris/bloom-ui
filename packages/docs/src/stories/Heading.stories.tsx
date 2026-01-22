import type { Meta, StoryObj } from '@storybook/react';
import { Heading } from '@koaris/bloom-ui';

const meta: Meta<typeof Heading> = {
  title: 'Components/Typography/Heading',
  component: Heading,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    tag: {
      control: 'select',
      options: ['h1', 'h2', 'h3', 'h4', 'h5', 'h6'],
      description: 'HTML tag to use for the heading',
    },
    weight: {
      control: 'select',
      options: ['normal', 'medium', 'semibold', 'bold', 'extrabold'],
      description: 'Font weight of the heading',
    },
    tracking: {
      control: 'select',
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      description: 'Letter spacing of the heading',
    },
    alignment: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Text alignment of the heading',
    },
    truncate: {
      control: 'boolean',
      description: 'Whether to truncate the text with an ellipsis if it overflows',
    },
    uppercase: {
      control: 'boolean',
      description: 'Whether to transform the text to uppercase',
    },
    children: {
      control: 'text',
      description: 'Content of the heading',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Heading>;

export const Default: Story = {
  args: {
    children: 'Default Heading',
    color: 'neutral',
    // colorShade: '800',
    size: 'lg',
    tag: 'h2',
    weight: 'bold',
    tracking: 'normal',
    alignment: 'left',
    truncate: false,
    uppercase: false,
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary Heading',
    color: 'primary',
    // colorShade: '600',
    // size: '2xl',
    tag: 'h1',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary Heading',
    color: 'secondary',
    // colorShade: '600',
    // size: 'xl',
    tag: 'h2',
  },
};

export const Sizes: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading size="sm" tag="h6">Heading Size Small</Heading>
      <Heading size="md" tag="h5">Heading Size Medium</Heading>
      <Heading size="lg" tag="h4">Heading Size Large</Heading>
      <Heading size="xl" tag="h3">Heading Size XL</Heading>
      <Heading size="2xl" tag="h2">Heading Size 2XL</Heading>
      <Heading size="3xl" tag="h1">Heading Size 3XL</Heading>
      <Heading size="4xl" tag="h1">Heading Size 4XL</Heading>
      <Heading size="5xl" tag="h1">Heading Size 5XL</Heading>
    </div>
  ),
};

export const Colors: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading color="primary" className="text-neutral-600">Primary Heading</Heading>
      <Heading color="secondary" className="text-neutral-600">Secondary Heading</Heading>
      <Heading color="accent" className="text-neutral-600">Accent Heading</Heading>
      <Heading color="success" className="text-neutral-600">Success Heading</Heading>
      <Heading color="warning" className="text-neutral-600">Warning Heading</Heading>
      <Heading color="error" className="text-neutral-600">Error Heading</Heading>
      <Heading color="info" className="text-neutral-600">Info Heading</Heading>
      <Heading color="neutral" className="text-neutral-800">Neutral Heading</Heading>
    </div>
  ),
};

export const Weights: Story = {
  render: () => (
    <div className="space-y-2">
      <Heading weight="normal">Normal Weight Heading</Heading>
      <Heading weight="medium">Medium Weight Heading</Heading>
      <Heading weight="semibold">Semibold Weight Heading</Heading>
      <Heading weight="bold">Bold Weight Heading</Heading>
      <Heading weight="extrabold">Extrabold Weight Heading</Heading>
    </div>
  ),
};

export const Alignment: Story = {
  render: () => (
    <div className="space-y-4 w-full max-w-lg border p-4">
      <Heading alignment="left">Left Aligned Heading</Heading>
      <Heading alignment="center">Center Aligned Heading</Heading>
      <Heading alignment="right">Right Aligned Heading</Heading>
    </div>
  ),
};

export const Truncated: Story = {
  args: {
    children: 'This is a very long heading that will be truncated because it exceeds the available space and we have enabled the truncate prop to make sure it doesnt break the layout',
    truncate: true,
    className: 'max-w-xs',
  },
};

export const Uppercase: Story = {
  args: {
    children: 'This heading will be displayed in all uppercase letters',
    uppercase: true,
  },
};

export const CustomStyling: Story = {
  args: {
    children: 'Custom Styled Heading',
    className: 'italic underline decoration-wavy decoration-purple-500 underline-offset-4',
  },
};