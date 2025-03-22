import type { StoryObj, Meta } from '@storybook/react'
import { TextArea, TextAreaProps } from '@koaris/bloom-ui'

export default {
  title: 'Components/TextArea',
  component: TextArea,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Controls the size of the textarea'
    },
    variant: {
      control: 'select',
      options: ['primary', 'secondary', 'outline'],
      description: 'Visual style variant of the textarea'
    },
    resize: {
      control: 'select',
      options: ['none', 'vertical', 'horizontal', 'both'],
      description: 'Controls how the textarea can be resized'
    },
    type: {
      control: 'select',
      options: ['text', 'markdown', 'code', 'json'],
      description: 'Specifies the type of content for the textarea'
    },
    disabled: {
      control: 'boolean',
      description: 'Disables the textarea'
    },
    required: {
      control: 'boolean',
      description: 'Marks the textarea as required'
    },
    error: {
      control: 'boolean',
      description: 'Shows the textarea in an error state'
    },
    validated: {
      control: 'boolean',
      description: 'Shows the textarea in a validated state'
    },
    showCount: {
      control: 'boolean',
      description: 'Shows character count when maxLength is specified'
    },
    autoGrow: {
      control: 'boolean',
      description: 'Automatically adjusts height based on content'
    },
    minRows: {
      control: 'number',
      description: 'Minimum number of rows to display'
    },
    maxRows: {
      control: 'number',
      description: 'Maximum number of rows when using autoGrow'
    },
    maxLength: {
      control: 'number',
      description: 'Maximum character limit'
    }
  },
  args: {
    size: 'md',
    variant: 'primary',
    resize: 'vertical',
    type: 'text',
    disabled: false,
    required: false,
    error: false,
    validated: false,
    showCount: false,
    autoGrow: false,
    minRows: 3,
    maxRows: 8
  }
} as Meta<TextAreaProps>

// Base template for consistent layout
const Template: StoryObj<TextAreaProps> = {
  render: (args) => (
    <div style={{ maxWidth: '600px' }}>
      <TextArea {...args} />
    </div>
  )
}

export const Default: StoryObj<TextAreaProps> = {
  ...Template,
  args: {
    placeholder: 'Enter your text here...',
    label: 'Message',
    helperText: 'Type your message in the field above'
  }
}

export const WithLabel: StoryObj<TextAreaProps> = {
  ...Template,
  args: {
    label: 'Your feedback',
    placeholder: 'Tell us what you think...',
    helperText: 'Your feedback helps us improve'
  }
}

export const Required: StoryObj<TextAreaProps> = {
  ...Template,
  args: {
    label: 'Description',
    required: true,
    placeholder: 'This field is required',
    helperText: 'This field cannot be left empty'
  }
}

export const WithError: StoryObj<TextAreaProps> = {
  ...Template,
  args: {
    label: 'Error state',
    error: true,
    errorMessage: 'Please provide a valid input',
    value: 'Invalid input'
  }
}

export const Disabled: StoryObj<TextAreaProps> = {
  ...Template,
  args: {
    label: 'Disabled textarea',
    disabled: true,
    value: 'This textarea is disabled',
    helperText: 'This control cannot be edited'
  }
}

export const WithCharacterCount: StoryObj<TextAreaProps> = {
  ...Template,
  args: {
    label: 'Character limit',
    maxLength: 100,
    showCount: true,
    placeholder: 'Limited to 100 characters...',
    helperText: 'Character count is shown below'
  }
}

export const Sizes: StoryObj<TextAreaProps> = {
  render: () => (
    <div className="space-y-4" style={{ maxWidth: '600px' }}>
      <TextArea
        size="sm"
        label="Small textarea"
        placeholder="Small size"
      />
      <TextArea
        size="md"
        label="Medium textarea"
        placeholder="Medium size (default)"
      />
      <TextArea
        size="lg"
        label="Large textarea"
        placeholder="Large size"
      />
    </div>
  )
}

export const Variants: StoryObj<TextAreaProps> = {
  render: () => (
    <div className="space-y-4" style={{ maxWidth: '600px' }}>
      <TextArea
        variant="primary"
        label="Primary variant"
        placeholder="Default variant"
      />
      <TextArea
        variant="secondary"
        label="Secondary variant"
        placeholder="With light background"
      />
      <TextArea
        variant="outline"
        label="Outline variant"
        placeholder="With transparent background"
      />
    </div>
  )
}

export const ResizeOptions: StoryObj<TextAreaProps> = {
  render: () => (
    <div className="space-y-4" style={{ maxWidth: '600px' }}>
      <TextArea
        resize="none"
        label="No resize"
        placeholder="This textarea cannot be resized"
      />
      <TextArea
        resize="vertical"
        label="Vertical resize (default)"
        placeholder="Can be resized vertically"
      />
      <TextArea
        resize="horizontal"
        label="Horizontal resize"
        placeholder="Can be resized horizontally"
      />
      <TextArea
        resize="both"
        label="Resize both directions"
        placeholder="Can be resized in any direction"
      />
    </div>
  )
}

export const AutoGrow: StoryObj<TextAreaProps> = {
  ...Template,
  args: {
    label: 'Auto-growing textarea',
    autoGrow: true,
    minRows: 2,
    maxRows: 10,
    placeholder: 'Type to see this textarea grow automatically...',
    helperText: 'This textarea will grow as you type, up to a maximum height'
  }
}

export const CodeEditor: StoryObj<TextAreaProps> = {
  ...Template,
  args: {
    label: 'Code editor',
    type: 'code',
    placeholder: 'function example() {\n  return "Write your code here";\n}',
    className: 'font-mono',
    helperText: 'Use for code snippets',
    minRows: 5
  }
}

export const JsonValidator: StoryObj<TextAreaProps> = {
  ...Template,
  args: {
    label: 'JSON Input',
    type: 'json',
    placeholder: '{\n  "key": "value"\n}',
    className: 'font-mono',
    helperText: 'Enter valid JSON. Will show error for invalid JSON.',
    minRows: 5
  }
}