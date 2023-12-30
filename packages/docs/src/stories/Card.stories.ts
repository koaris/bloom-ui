import type { StoryObj, Meta } from '@storybook/react'
import { Card, CardProps } from '@koaris/bloom-ui'
import image from '../images/koaris_gestao.svg';

export default {
  title: 'Components/Card',
  component: Card,
  tags: ['autodocs'],
  args: {
    title: 'Gestão online',
    content: 'Otimize seus processos',
    image: image,
    disabled: false,
    selected: true,
    direction: 'col',
    imageSize: '184px',
  },
  argTypes: {
    image: {
      control: {
        type: 'file',
      },
    },
    selected: {
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      control: {
        type: 'boolean',
      },
    },
    direction: {
      options: ['col', 'row'],
      control: {
        type: 'inline-radio',
      },
    },
    size: {
      options: ['medium', 'large'],
      control: {
        type: 'inline-radio',
      },
    },
    onClick: {
      action: 'click',
    },
  },
} as Meta<CardProps>

export const Default: StoryObj<CardProps> = {
  args: {
    direction: 'col',
    size: 'medium',
  },
}

export const Large: StoryObj<CardProps> = {
  args: {
    direction: 'row',
    size: 'large',
  },
}

export const Disabled: StoryObj<CardProps> = {
  args: {
    direction: 'row',
    size: 'large',
    disabled: true,
  },
}
