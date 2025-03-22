import type { StoryObj, Meta } from '@storybook/react'
import { Card, CardProps } from '@koaris/bloom-ui'
import image from '../images/koaris_gestao.svg'

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'Card components are flexible containers that can display content, images, and actions in various layouts. They are commonly used for presenting information in a structured and visually appealing way.',
      },
    },
  },
  args: {
    title: 'Online Management',
    content: 'Optimize your processes with our integrated online management solution. Monitor, analyze, and improve your results in real-time with our user-friendly platform.',
    image: image,
    disabled: false,
    selected: false,
    direction: 'col',
    imageSize: '184px',
    size: 'medium',
    hoverable: true,
  },
  argTypes: {
    image: {
      control: {
        type: 'file',
      },
      description: 'The image source URL or path',
    },
    imageAlt: {
      control: 'text',
      description: 'Alternative text for the image for accessibility',
    },
    title: {
      control: 'text',
      description: 'Title text or ReactNode for the card',
    },
    content: {
      control: 'text',
      description: 'Main content text or ReactNode for the card',
    },
    selected: {
      control: 'boolean',
      description: 'Whether the card appears in a selected state',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the card is disabled and non-interactive',
    },
    direction: {
      options: ['row', 'col'],
      control: 'inline-radio',
      description: 'Layout direction of the card content',
    },
    size: {
      options: ['small', 'medium', 'large', 'full'],
      control: 'inline-radio',
      description: 'Size preset for the card',
    },
    imageSize: {
      control: 'text',
      description: 'Width of the image (CSS value like px, %, etc.)',
    },
    hoverable: {
      control: 'boolean',
      description: 'Whether the card shows hover effects',
    },
    onClick: {
      action: 'clicked',
      description: 'Function called when the card is clicked',
    },
    className: {
      control: 'text',
      description: 'Additional CSS classes to apply to the card',
    },
    footer: {
      control: null,
      description: 'Optional footer content for the card',
    },
  },
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {
  args: {
    direction: 'col',
    size: 'medium',
    title: 'Online Management',
    content: 'Optimize your processes with our integrated online management solution.'
  },
  parameters: {
    docs: {
      description: {
        story: 'The default card style with column layout and medium size.',
      },
    },
  },
}

export const WithFooter: StoryObj<CardProps> = {
  args: {
    direction: 'col',
    size: 'medium',
    title: 'Online Management',
    content: 'Optimize your processes with our integrated online management solution.'
    /*footer: (
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Saiba mais</span>
        <FiArrowRight className="text-orange-500" />
      </div>
    ),*/
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with a custom footer that includes an action prompt and icon.',
      },
    },
  },
}

export const Small: StoryObj<CardProps> = {
  args: {
    direction: 'row',
    size: 'small',
    title: 'Tip',
    content: 'Quick tip to improve your productivity.',
    imageSize: '60px',
  },
  parameters: {
    docs: {
      description: {
        story: 'A compact card suitable for tips or notifications.',
      },
    },
  },
}

export const Medium: StoryObj<CardProps> = {
  args: {
    direction: 'col',
    size: 'medium',
    title: 'Online Management',
    content: 'Optimize your processes with our integrated online management solution.',
    selected: false,
  },
  parameters: {
    docs: {
      description: {
        story: 'Medium-sized card with column layout, suitable for feature showcases.',
      },
    },
  },
}

export const Large: StoryObj<CardProps> = {
  args: {
    direction: 'row',
    size: 'large',
    title: 'Online Management',
    content: 'Optimize your processes with our integrated online management solution. Monitor, analyze, and improve your results in real-time with our user-friendly platform.',
    imageSize: '200px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Large card with row layout, ideal for detailed content or primary features.',
      },
    },
  },
}

export const FullWidth: StoryObj<CardProps> = {
  args: {
    direction: 'row',
    size: 'full',
    title: 'Integrated Business Management',
    content: 'Our solution provides a complete view of your business by integrating all departments into a single platform.',
    imageSize: '250px',
  },
  parameters: {
    docs: {
      description: {
        story: 'Full-width card that spans the entire container width.',
      },
    },
  },
}

export const Selected: StoryObj<CardProps> = {
  args: {
    direction: 'col',
    size: 'medium',
    selected: true,
    title: 'Selected Plan',
    content: 'This is the currently selected plan with all features available.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card in selected state, highlighted with an orange border.',
      },
    },
  },
}

export const Disabled: StoryObj<CardProps> = {
  args: {
    direction: 'row',
    size: 'medium',
    disabled: true,
    title: 'Unavailable Feature',
    content: 'This feature is temporarily unavailable in your current plan.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled card that cannot be interacted with.',
      },
    },
  },
}

export const WithIcon: StoryObj<CardProps> = {
  args: {
    direction: 'col',
    size: 'medium',
    /*title: (
      <div className="flex items-center gap-2">
        <FiSettings className="text-orange-500" />
        <span>Advanced Settings</span>
      </div>
    ),*/
    content: 'Customize your experience with our advanced management configuration options.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with an icon in the title for visual emphasis.',
      },
    },
  },
}

export const FeatureCard: StoryObj<CardProps> = {
  args: {
    direction: 'col',
    size: 'medium',
    title: 'Reports in real-time',
    /*content: (
      <div className="space-y-2">
        <p>Acesse relatórios detalhados instantaneamente:</p>
        <ul className="list-inside space-y-1">
          <li className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <span>Análise de vendas</span>
          </li>
          <li className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <span>Desempenho de equipe</span>
          </li>
          <li className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <span>Métricas financeiras</span>
          </li>
        </ul>
      </div>
    ),
    footer: (
      <button className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition-colors">
        Ativar recurso
      </button>
    ),*/
  },
  parameters: {
    docs: {
      description: {
        story: 'Feature highlight card with structured content and a call-to-action button.',
      },
    },
  },
}

export const NonInteractive: StoryObj<CardProps> = {
  args: {
    direction: 'col',
    size: 'medium',
    hoverable: false,
    onClick: undefined,
    title: 'System Message',
    content: 'This is an informational system notification that requires no user interaction.',
  },
  parameters: {
    docs: {
      description: {
        story: 'Non-interactive card without hover effects, used for displaying information only.',
      },
    },
  },
}