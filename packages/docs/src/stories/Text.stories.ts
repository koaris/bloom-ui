import type { Meta, StoryObj } from '@storybook/react';
import { Text, TextProps } from '@koaris/bloom-ui';


const meta: Meta<typeof Text> = {
  title: 'Components/Typography/Text',
  component: Text,
  tags: ['autodocs'],
  args: {
    children: 'Sample Text',
    color: 'neutral',
    colorShade: '800',
    size: 'md',
    tag: 'p',
    weight: 'normal',
    tracking: 'normal',
    leading: 'normal',
    alignment: 'left',
    truncate: false,
    italic: false,
    uppercase: false,
    lowercase: false,
    capitalize: false,
  },
  argTypes: {
    children: {
      control: 'text',
      description: 'Text content to be displayed',
    },
    color: {
      options: ['primary', 'secondary', 'accent', 'neutral', 'success', 'warning', 'error', 'info'],
      control: {
        type: 'select',
      },
      description: 'Color theme of the text',
    },
    colorShade: {
      options: ['50', '100', '200', '300', '400', '500', '600', '700', '800', '900'],
      control: {
        type: 'select',
      },
      description: 'Shade of the selected color',
    },
    size: {
      options: ['xxs', 'xs', 'sm', 'md', 'lg', 'xl', '2xl', '3xl', '4xl', '5xl', '6xl', '7xl', '8xl', '9xl'],
      control: {
        type: 'select',
      },
      description: 'Size of the text (xxs falls back to xs)',
    },
    tag: {
      options: ['p', 'span', 'label', 'strong', 'em', 'small', 'div'],
      control: {
        type: 'select',
      },
      description: 'HTML tag to be used for the text element',
    },
    weight: {
      options: ['thin', 'extralight', 'light', 'normal', 'medium', 'semibold', 'bold', 'extrabold', 'black'],
      control: {
        type: 'select',
      },
      description: 'Font weight of the text',
    },
    tracking: {
      options: ['tighter', 'tight', 'normal', 'wide', 'wider', 'widest'],
      control: {
        type: 'select',
      },
      description: 'Letter spacing (tracking) of the text',
    },
    leading: {
      options: ['none', 'tight', 'snug', 'normal', 'relaxed', 'loose'],
      control: {
        type: 'select',
      },
      description: 'Line height (leading) of the text',
    },
    alignment: {
      options: ['left', 'center', 'right', 'justify'],
      control: {
        type: 'select',
      },
      description: 'Text alignment',
    },
    truncate: {
      control: 'boolean',
      description: 'Whether to truncate text with ellipsis when overflowing',
    },
    italic: {
      control: 'boolean',
      description: 'Whether to display text in italic style',
    },
    uppercase: {
      control: 'boolean',
      description: 'Whether to transform text to uppercase',
    },
    lowercase: {
      control: 'boolean',
      description: 'Whether to transform text to lowercase',
    },
    capitalize: {
      control: 'boolean',
      description: 'Whether to capitalize the first letter of each word',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply',
    },
    htmlFor: {
      control: 'text',
      description: 'For label elements, specifies which form element it is bound to',
    },
  }
};

export default meta;

type Story = StoryObj<typeof Text>;

// Base Story
export const Default: Story = {
  args: {
    children: 'Default text styling with neutral color and normal weight',
  },
};

export const Playground: StoryObj<TextProps> = {
  args: {},
};

export const InteractiveDemo: StoryObj<TextProps> = {
  args: {
    children: 'Edit me in Controls panel →',
    truncate: false,
    italic: false,
    uppercase: false,
    lowercase: false,
    capitalize: false,
    className: '',
  },
  parameters: {
    controls: { expanded: true },
  },
};