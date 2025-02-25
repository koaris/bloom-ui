var _a, _b, _c;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { C as Checkbox, T as Text } from "./index-5f8583db.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Checkbox_stories = {
  title: "Form/Checkbox",
  component: Checkbox,
  tags: ["autodocs"],
  args: {
    required: true
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean"
      }
    },
    onClick: {
      action: "click"
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "flex gap-2",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}), /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      tag: "span",
      children: "Aceite os termos de uso."
    })]
  })]
};
const Default = {};
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
const __namedExportsOrder = ["Default"];
export {
  Default,
  __namedExportsOrder,
  Checkbox_stories as default
};
