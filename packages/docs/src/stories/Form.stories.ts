import type { StoryObj, Meta } from '@storybook/react'
import { Form, FormProps, Input, InputProps, Button, ButtonProps } from '@koaris/bloom'

export default {
  title: 'Form/Form',
  component: Form,
  argTypes: {
    onSubmit: { action: 'submit' },
  },
} as Meta<FormProps>

// Define props for Input and Button separately
const inputProps: InputProps = {
  // Define Input props as needed
  // For example:
  type: 'text',
  placeholder: 'Enter text',
  error: false,
};

const buttonProps: ButtonProps = {
  // Define Button props as needed
  // For example:
  onClick: () => alert('Button clicked'),
};

const Template = (args: FormProps) => {
  const { children, ...rest } = args;
  return (
    <Form {...rest}>
      {children}
      <Button name="submit" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: <Input name="firstName" label="Name" />,
};