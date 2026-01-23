var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { h as Toggle } from "./index-d1862f76.js";
import { r as reactExports } from "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const ToggleWrapper = (args) => {
  const [active, setActive] = reactExports.useState(args.active);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Toggle, {
    ...args,
    active,
    setActive
  });
};
const Toggle_stories = {
  title: "Form/Toggle",
  component: Toggle,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A customizable toggle switch component that can be used to switch between two states."
      }
    },
    controls: {
      sort: "requiredFirst"
    },
    backgrounds: {
      default: "light",
      values: [{
        name: "light",
        value: "#fff"
      }, {
        name: "dark",
        value: "#1f2937"
      }]
    }
  },
  args: {
    disabled: false,
    active: false,
    label: "Toggle switch",
    size: "md",
    hideLabel: false
  },
  argTypes: {
    disabled: {
      control: "boolean",
      description: "Disables the toggle switch",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: false
        }
      }
    },
    active: {
      control: "boolean",
      description: "Controls the toggle state",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: false
        }
      }
    },
    label: {
      control: "text",
      description: "Label text for the toggle",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    setActive: {
      description: "Function to handle toggle state changes",
      table: {
        type: {
          summary: "(active: boolean) => void"
        }
      },
      action: "toggled"
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg"],
      description: "Size of the toggle switch",
      table: {
        type: {
          summary: "sm | md | lg"
        },
        defaultValue: {
          summary: "md"
        }
      }
    },
    hideLabel: {
      control: "boolean",
      description: "Whether to hide the visual label (still accessible via ARIA)",
      table: {
        type: {
          summary: "boolean"
        },
        defaultValue: {
          summary: false
        }
      }
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply",
      table: {
        type: {
          summary: "string"
        }
      }
    },
    id: {
      control: "text",
      description: "Optional ID for the toggle (auto-generated if not provided)",
      table: {
        type: {
          summary: "string"
        }
      }
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "p-6 max-w-md",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})
  })],
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
    ...args
  })
};
const Default = {};
const Sizes = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "flex flex-col gap-4",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
      label: "Small toggle",
      size: "sm",
      active: false
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
      label: "Medium toggle (default)",
      size: "md",
      active: false
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
      label: "Large toggle",
      size: "lg",
      active: false
    })]
  })
};
const States = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "flex flex-col gap-4",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
      label: "Active toggle",
      active: true
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
      label: "Disabled toggle (off)",
      disabled: true,
      active: false
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
      label: "Disabled toggle (on)",
      disabled: true,
      active: true
    })]
  })
};
const HiddenLabel = {
  args: {
    hideLabel: true,
    label: "Screen reader only label"
  }
};
const InForm = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx("form", {
    className: "p-4 border border-gray-200 rounded-md",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex flex-col gap-4",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
        className: "text-lg font-medium",
        children: "Notification Settings"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
        label: "Email notifications",
        active: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
        label: "Push notifications",
        active: false
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ToggleWrapper, {
        label: "SMS notifications",
        active: false
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "mt-4",
        children: /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
          type: "button",
          className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
          children: "Save Settings"
        })
      })]
    })
  })
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...(_d = Sizes.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <div className="flex flex-col gap-4">\n      <ToggleWrapper label="Small toggle" size="sm" active={false} />\n      <ToggleWrapper label="Medium toggle (default)" size="md" active={false} />\n      <ToggleWrapper label="Large toggle" size="lg" active={false} />\n    </div>\n}',
      ...(_f = (_e = Sizes.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
States.parameters = {
  ...States.parameters,
  docs: {
    ...(_g = States.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  render: () => <div className="flex flex-col gap-4">\n      <ToggleWrapper label="Active toggle" active={true} />\n      <ToggleWrapper label="Disabled toggle (off)" disabled={true} active={false} />\n      <ToggleWrapper label="Disabled toggle (on)" disabled={true} active={true} />\n    </div>\n}',
      ...(_i = (_h = States.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
HiddenLabel.parameters = {
  ...HiddenLabel.parameters,
  docs: {
    ...(_j = HiddenLabel.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  args: {\n    hideLabel: true,\n    label: "Screen reader only label"\n  }\n}',
      ...(_l = (_k = HiddenLabel.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
InForm.parameters = {
  ...InForm.parameters,
  docs: {
    ...(_m = InForm.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <form className="p-4 border border-gray-200 rounded-md">\n      <div className="flex flex-col gap-4">\n        <h3 className="text-lg font-medium">Notification Settings</h3>\n        <ToggleWrapper label="Email notifications" active={true} />\n        <ToggleWrapper label="Push notifications" active={false} />\n        <ToggleWrapper label="SMS notifications" active={false} />\n        <div className="mt-4">\n          <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">\n            Save Settings\n          </button>\n        </div>\n      </div>\n    </form>\n}',
      ...(_o = (_n = InForm.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
const __namedExportsOrder = ["Default", "Sizes", "States", "HiddenLabel", "InForm"];
export {
  Default,
  HiddenLabel,
  InForm,
  Sizes,
  States,
  __namedExportsOrder,
  Toggle_stories as default
};
