var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./jsx-runtime-x-ThabpI.js";
import { S as Select } from "./index-8Wn-1ut5.js";
import "./index-hC87BHQs.js";
import "./_commonjsHelpers-CUmg6egw.js";
const Select_stories = {
  title: "Form/Select",
  component: Select,
  tags: ["autodocs"],
  args: {
    label: "Format",
    hint: "Lossless formats keep transparency.",
    options: [{
      value: "png",
      label: "PNG"
    }, {
      value: "jpeg",
      label: "JPEG"
    }, {
      value: "webp",
      label: "WebP"
    }]
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    maxWidth: 320,
    padding: 16
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Default = {};
const WithError = {
  args: {
    hint: void 0,
    error: "Pick a format."
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
WithError.parameters = {
  ...WithError.parameters,
  docs: {
    ...(_d = WithError.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    hint: undefined,\n    error: 'Pick a format.'\n  }\n}",
      ...(_f = (_e = WithError.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Default", "WithError"];
export {
  Default,
  WithError,
  __namedExportsOrder,
  Select_stories as default
};
