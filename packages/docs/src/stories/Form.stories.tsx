import type { StoryObj, Meta } from '@storybook/react'
import { Form, FormProps, Text, Input, Button, TextInput, Checkbox } from '@koaris/bloom-ui'

export default {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    orientation: 'col',
  },
  argTypes: {
    orientation: {
      options: ['col', 'row'],
      control: {
        type: 'inline-radio',
      },
    },
    children: {
      type: 'symbol'
    },
  }
} as Meta<FormProps>

export const Default: StoryObj<FormProps> = {
  args: {
    children: (
        <>
          <Text color='neutral-800'>Nome</Text>
          <Input width="sm" type='text' placeholder='Nome Completo' error={false} />
          <Text color='neutral-800'>E-mail</Text>
        <Input width="sm" type='text' placeholder='guilhermesalviano177@gmail.com' error={false} />
        <div className='flex gap-2'>
          <Checkbox />
          <Text tag="span" children="Aceite os termos de uso." />
        </div>
        <Button type='submit'>Finalizar</Button>
        </>
    )
  }
}

export const OrientationRow: StoryObj<FormProps> = {
  args: {
    orientation: 'row',
    children: (
      <div className='flex flex-col'>
        <Text color='neutral-800'>Testando o elemento Form</Text>
        <div className='flex w-full'>
          <TextInput type='text' prefix='koaris.com.br/' placeholder='Testando o elemento Form' error={false} />
          <Button type='submit' size='sm' className='w-30'>Finalizar</Button>
        </div>
      </div>
    )
  }
}
