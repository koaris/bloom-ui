var _a, _b, _c;
import { j as jsxRuntimeExports } from "./jsx-runtime-x-ThabpI.js";
import { b as ColorField } from "./index-DPkWKMkH.js";
import { r as reactExports } from "./index-hC87BHQs.js";
import "./_commonjsHelpers-CUmg6egw.js";
const ColorFieldWrapper = (args) => {
  const [value, setValue] = reactExports.useState(args.value);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(ColorField, { ...args, value, onChange: setValue });
};
const ColorField_stories = {
  title: "Form/ColorField",
  component: ColorField,
  tags: ["autodocs"],
  args: {
    label: "Foreground",
    value: "#c13f27",
    disabled: false
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(ColorFieldWrapper, { ...args }),
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    padding: 16
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
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
  ColorField_stories as default
};
