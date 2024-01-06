import type { StoryObj, Meta } from '@storybook/react'
import { Form, FormProps, Text, Input, Button, TextInput } from '@koaris/bloom-ui'

export default {
  title: 'Form/Form',
  component: Form,
  tags: ['autodocs'],
  args: {
    variant: 'primary',
    orientation: 'col',
  }
} as Meta<FormProps>

export const Default: StoryObj<FormProps> = {
  args: {
    children: (
      <>
        <div>
          <Text color='neutral-800'>Testando o elemento Form</Text>
          <Input type='text' placeholder='Testando o elemento Form' error={false} />
        </div>
        <Button type='submit' className='w-30'>Finalizar</Button>
      </>
    )
  }
}

export const OrientationRow: StoryObj<FormProps> = {
  args: {
    orientation: 'row',
    children: (
      <>
        <div className='w-full'>
          <Text color='neutral-800'>Testando o elemento Form</Text>
          <TextInput type='text' prefix='koaris.com.br/' placeholder='Testando o elemento Form' error={false} />
        </div>
        <Button type='submit' className='w-30'>Finalizar</Button>
      </>
    )
  }
}
