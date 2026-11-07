var _a, _b, _c;
import { j as jsxRuntimeExports } from "./jsx-runtime-x-ThabpI.js";
import { j as Range } from "./index-DPkWKMkH.js";
import { r as reactExports } from "./index-hC87BHQs.js";
import "./_commonjsHelpers-CUmg6egw.js";
const RangeWrapper = (args) => {
  const [value, setValue] = reactExports.useState(Number(args.defaultValue ?? 80));
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Range, { ...args, defaultValue: void 0, value, display: `${value}%`, onChange: (e) => setValue(Number(e.target.value)) });
};
const Range_stories = {
  title: "Form/Range",
  component: Range,
  tags: ["autodocs"],
  args: {
    label: "Quality",
    min: 0,
    max: 100,
    defaultValue: 80,
    hint: "Lower values make smaller files."
  },
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx(RangeWrapper, { ...args }),
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    maxWidth: 320,
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
  Range_stories as default
};
