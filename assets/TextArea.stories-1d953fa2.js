var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { c as TextArea } from "./index-5f8583db.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const TextArea_stories = {
  title: "Form/TextArea",
  component: TextArea,
  tags: ["autodocs"],
  args: {
    value: "",
    placeholder: "Placeholder"
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean"
      }
    },
    error: {
      control: {
        type: "boolean"
      }
    },
    resize: {
      control: {
        type: "boolean"
      }
    },
    onClick: {
      action: "click"
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})]
};
const Default = {};
const Error = {
  args: {
    error: true
  }
};
const Disabled = {
  args: {
    disabled: true
  }
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
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...(_d = Error.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    error: true\n  }\n}",
      ...(_f = (_e = Error.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_g = Disabled.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...(_i = (_h = Disabled.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Default", "Error", "Disabled"];
export {
  Default,
  Disabled,
  Error,
  __namedExportsOrder,
  TextArea_stories as default
};
