import type { StoryObj, Meta } from '@storybook/react'
import { Button, ButtonProps } from '@koaris/bloom-ui'
import { GrLinkNext } from "react-icons/gr"

export default {
  title: 'Form/Button',
  component: Button,
  tags: ['autodocs'],
  args: {
    children: 'Visualizar',
    size: 'md',
    disabled: false,
    variant: 'primary',
    loading: false,
    fullWidth: false
  },
  argTypes: {
    size: {
      options: ['xs', 'sm', 'md', 'lg'],
      control: {
        type: 'select',
      },
      description: 'Defines the size of the button'
    },
    variant: {
      options: ['primary', 'secondary', 'outline', 'ghost', 'link'],
      control: {
        type: 'select',
      },
      description: 'Defines the visual style of the button'
    },
    disabled: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is disabled'
    },
    loading: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button is in loading state'
    },
    fullWidth: {
      control: {
        type: 'boolean',
      },
      description: 'Whether the button should take full width of its container'
    },
    startIcon: {
      control: false,
      description: 'Icon to display at the start of the button'
    },
    endIcon: {
      control: false,
      description: 'Icon to display at the end of the button'
    },
    onClick: {
      action: 'clicked',
    },
  },
  decorators: [
    (Story) => (
      <div className="p-4">
        <Story />
      </div>
    ),
  ]
} as Meta<ButtonProps>

export const Primary: StoryObj<ButtonProps> = {}

export const Secondary: StoryObj<ButtonProps> = {
  args: {
    variant: 'secondary',
    children: 'Ignorar',
  },
}

export const Outline: StoryObj<ButtonProps> = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Ghost: StoryObj<ButtonProps> = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const Link: StoryObj<ButtonProps> = {
  args: {
    variant: 'link',
    children: 'Link Style',
  },
}

export const ExtraSmall: StoryObj<ButtonProps> = {
  args: {
    size: 'xs',
    children: 'Extra Small',
  },
}

export const Small: StoryObj<ButtonProps> = {
  args: {
    size: 'sm',
    children: 'Small',
  },
}

export const Medium: StoryObj<ButtonProps> = {
  args: {
    size: 'md',
    children: 'Medium',
  },
}

export const Large: StoryObj<ButtonProps> = {
  args: {
    size: 'lg',
    children: 'Large',
  },
}

export const WithStartIcon: StoryObj<ButtonProps> = {
  args: {
    children: 'Start Icon',
    startIcon: <GrLinkNext />
  },
}

export const WithEndIcon: StoryObj<ButtonProps> = {
  args: {
    children: 'Próximo',
    endIcon: <GrLinkNext />
  },
}

export const WithBothIcons: StoryObj<ButtonProps> = {
  args: {
    children: 'Both Icons',
    startIcon: <GrLinkNext />,
    endIcon: <GrLinkNext />
  },
}

export const Disabled: StoryObj<ButtonProps> = {
  args: {
    disabled: true,
  },
}

export const Loading: StoryObj<ButtonProps> = {
  args: {
    loading: true,
  },
}

export const FullWidth: StoryObj<ButtonProps> = {
  args: {
    fullWidth: true,
    children: 'Full Width Button',
  },
  decorators: [
    (Story) => (
      <div className="w-full p-4">
        <Story />
      </div>
    ),
  ]
}