import type { StoryObj, Meta } from '@storybook/react'
import { Card, CardProps } from '@koaris/bloom'
import image from '../images/koaris_gestao.svg';

export default {
  title: 'Form/Card',
  component: Card,
  args: {
    title: 'Gestão online',
    content: 'Otimize seus processos',
    variant: 'primary',
    image: image,
    disabled: false,
    selected: true,
  },
  argTypes: {
    variant: {
      options: ['primary', 'secondary'],
      control: {
        type: 'inline-radio',
      },
    },
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
    onClick: {
      action: 'click',
    },
  },
} as Meta<CardProps>

export const Primary: StoryObj<CardProps> = {}

export const Disabled: StoryObj<CardProps> = {
  args: {
    disabled: true,
  },
}
