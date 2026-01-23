var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { e as TextArea } from "./index-d1862f76.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const TextArea_stories = {
  title: "Components/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  argTypes: {
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Controls the size of the textarea"
    },
    variant: {
      control: "select",
      options: ["primary", "secondary", "outline"],
      description: "Visual style variant of the textarea"
    },
    resize: {
      control: "select",
      options: ["none", "vertical", "horizontal", "both"],
      description: "Controls how the textarea can be resized"
    },
    type: {
      control: "select",
      options: ["text", "markdown", "code", "json"],
      description: "Specifies the type of content for the textarea"
    },
    disabled: {
      control: "boolean",
      description: "Disables the textarea"
    },
    required: {
      control: "boolean",
      description: "Marks the textarea as required"
    },
    error: {
      control: "boolean",
      description: "Shows the textarea in an error state"
    },
    validated: {
      control: "boolean",
      description: "Shows the textarea in a validated state"
    },
    showCount: {
      control: "boolean",
      description: "Shows character count when maxLength is specified"
    },
    autoGrow: {
      control: "boolean",
      description: "Automatically adjusts height based on content"
    },
    minRows: {
      control: "number",
      description: "Minimum number of rows to display"
    },
    maxRows: {
      control: "number",
      description: "Maximum number of rows when using autoGrow"
    },
    maxLength: {
      control: "number",
      description: "Maximum character limit"
    }
  },
  args: {
    size: "md",
    variant: "primary",
    resize: "vertical",
    type: "text",
    disabled: false,
    required: false,
    error: false,
    validated: false,
    showCount: false,
    autoGrow: false,
    minRows: 3,
    maxRows: 8
  }
};
const Template = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    style: {
      maxWidth: "600px"
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      ...args
    })
  })
};
const Default = {
  ...Template,
  args: {
    placeholder: "Enter your text here...",
    label: "Message",
    helperText: "Type your message in the field above"
  }
};
const WithLabel = {
  ...Template,
  args: {
    label: "Your feedback",
    placeholder: "Tell us what you think...",
    helperText: "Your feedback helps us improve"
  }
};
const Required = {
  ...Template,
  args: {
    label: "Description",
    required: true,
    placeholder: "This field is required",
    helperText: "This field cannot be left empty"
  }
};
const WithError = {
  ...Template,
  args: {
    label: "Error state",
    error: true,
    errorMessage: "Please provide a valid input",
    value: "Invalid input"
  }
};
const Disabled = {
  ...Template,
  args: {
    label: "Disabled textarea",
    disabled: true,
    value: "This textarea is disabled",
    helperText: "This control cannot be edited"
  }
};
const WithCharacterCount = {
  ...Template,
  args: {
    label: "Character limit",
    maxLength: 100,
    showCount: true,
    placeholder: "Limited to 100 characters...",
    helperText: "Character count is shown below"
  }
};
const Sizes = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-4",
    style: {
      maxWidth: "600px"
    },
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      size: "sm",
      label: "Small textarea",
      placeholder: "Small size"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      size: "md",
      label: "Medium textarea",
      placeholder: "Medium size (default)"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      size: "lg",
      label: "Large textarea",
      placeholder: "Large size"
    })]
  })
};
const Variants = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-4",
    style: {
      maxWidth: "600px"
    },
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      variant: "primary",
      label: "Primary variant",
      placeholder: "Default variant"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      variant: "secondary",
      label: "Secondary variant",
      placeholder: "With light background"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      variant: "outline",
      label: "Outline variant",
      placeholder: "With transparent background"
    })]
  })
};
const ResizeOptions = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-4",
    style: {
      maxWidth: "600px"
    },
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      resize: "none",
      label: "No resize",
      placeholder: "This textarea cannot be resized"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      resize: "vertical",
      label: "Vertical resize (default)",
      placeholder: "Can be resized vertically"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      resize: "horizontal",
      label: "Horizontal resize",
      placeholder: "Can be resized horizontally"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(TextArea, {
      resize: "both",
      label: "Resize both directions",
      placeholder: "Can be resized in any direction"
    })]
  })
};
const AutoGrow = {
  ...Template,
  args: {
    label: "Auto-growing textarea",
    autoGrow: true,
    minRows: 2,
    maxRows: 10,
    placeholder: "Type to see this textarea grow automatically...",
    helperText: "This textarea will grow as you type, up to a maximum height"
  }
};
const CodeEditor = {
  ...Template,
  args: {
    label: "Code editor",
    type: "code",
    placeholder: 'function example() {\n  return "Write your code here";\n}',
    className: "font-mono",
    helperText: "Use for code snippets",
    minRows: 5
  }
};
const JsonValidator = {
  ...Template,
  args: {
    label: "JSON Input",
    type: "json",
    placeholder: '{\n  "key": "value"\n}',
    className: "font-mono",
    helperText: "Enter valid JSON. Will show error for invalid JSON.",
    minRows: 5
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    placeholder: 'Enter your text here...',\n    label: 'Message',\n    helperText: 'Type your message in the field above'\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
WithLabel.parameters = {
  ...WithLabel.parameters,
  docs: {
    ...(_d = WithLabel.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    label: 'Your feedback',\n    placeholder: 'Tell us what you think...',\n    helperText: 'Your feedback helps us improve'\n  }\n}",
      ...(_f = (_e = WithLabel.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Required.parameters = {
  ...Required.parameters,
  docs: {
    ...(_g = Required.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    label: 'Description',\n    required: true,\n    placeholder: 'This field is required',\n    helperText: 'This field cannot be left empty'\n  }\n}",
      ...(_i = (_h = Required.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
WithError.parameters = {
  ...WithError.parameters,
  docs: {
    ...(_j = WithError.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    label: 'Error state',\n    error: true,\n    errorMessage: 'Please provide a valid input',\n    value: 'Invalid input'\n  }\n}",
      ...(_l = (_k = WithError.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_m = Disabled.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    label: 'Disabled textarea',\n    disabled: true,\n    value: 'This textarea is disabled',\n    helperText: 'This control cannot be edited'\n  }\n}",
      ...(_o = (_n = Disabled.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
WithCharacterCount.parameters = {
  ...WithCharacterCount.parameters,
  docs: {
    ...(_p = WithCharacterCount.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    label: 'Character limit',\n    maxLength: 100,\n    showCount: true,\n    placeholder: 'Limited to 100 characters...',\n    helperText: 'Character count is shown below'\n  }\n}",
      ...(_r = (_q = WithCharacterCount.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...(_s = Sizes.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: `{
  render: () => <div className="space-y-4" style={{
    maxWidth: '600px'
  }}>
      <TextArea size="sm" label="Small textarea" placeholder="Small size" />
      <TextArea size="md" label="Medium textarea" placeholder="Medium size (default)" />
      <TextArea size="lg" label="Large textarea" placeholder="Large size" />
    </div>
}`,
      ...(_u = (_t = Sizes.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Variants.parameters = {
  ...Variants.parameters,
  docs: {
    ...(_v = Variants.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: `{
  render: () => <div className="space-y-4" style={{
    maxWidth: '600px'
  }}>
      <TextArea variant="primary" label="Primary variant" placeholder="Default variant" />
      <TextArea variant="secondary" label="Secondary variant" placeholder="With light background" />
      <TextArea variant="outline" label="Outline variant" placeholder="With transparent background" />
    </div>
}`,
      ...(_x = (_w = Variants.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
ResizeOptions.parameters = {
  ...ResizeOptions.parameters,
  docs: {
    ...(_y = ResizeOptions.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: `{
  render: () => <div className="space-y-4" style={{
    maxWidth: '600px'
  }}>
      <TextArea resize="none" label="No resize" placeholder="This textarea cannot be resized" />
      <TextArea resize="vertical" label="Vertical resize (default)" placeholder="Can be resized vertically" />
      <TextArea resize="horizontal" label="Horizontal resize" placeholder="Can be resized horizontally" />
      <TextArea resize="both" label="Resize both directions" placeholder="Can be resized in any direction" />
    </div>
}`,
      ...(_A = (_z = ResizeOptions.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
AutoGrow.parameters = {
  ...AutoGrow.parameters,
  docs: {
    ...(_B = AutoGrow.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    label: 'Auto-growing textarea',\n    autoGrow: true,\n    minRows: 2,\n    maxRows: 10,\n    placeholder: 'Type to see this textarea grow automatically...',\n    helperText: 'This textarea will grow as you type, up to a maximum height'\n  }\n}",
      ...(_D = (_C = AutoGrow.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
CodeEditor.parameters = {
  ...CodeEditor.parameters,
  docs: {
    ...(_E = CodeEditor.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: `{
  ...Template,
  args: {
    label: 'Code editor',
    type: 'code',
    placeholder: 'function example() {\\n  return "Write your code here";\\n}',
    className: 'font-mono',
    helperText: 'Use for code snippets',
    minRows: 5
  }
}`,
      ...(_G = (_F = CodeEditor.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
JsonValidator.parameters = {
  ...JsonValidator.parameters,
  docs: {
    ...(_H = JsonValidator.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: `{
  ...Template,
  args: {
    label: 'JSON Input',
    type: 'json',
    placeholder: '{\\n  "key": "value"\\n}',
    className: 'font-mono',
    helperText: 'Enter valid JSON. Will show error for invalid JSON.',
    minRows: 5
  }
}`,
      ...(_J = (_I = JsonValidator.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
const __namedExportsOrder = ["Default", "WithLabel", "Required", "WithError", "Disabled", "WithCharacterCount", "Sizes", "Variants", "ResizeOptions", "AutoGrow", "CodeEditor", "JsonValidator"];
export {
  AutoGrow,
  CodeEditor,
  Default,
  Disabled,
  JsonValidator,
  Required,
  ResizeOptions,
  Sizes,
  Variants,
  WithCharacterCount,
  WithError,
  WithLabel,
  __namedExportsOrder,
  TextArea_stories as default
};
