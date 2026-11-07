var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./index-DPCO8D-R.js";
import { a as Collapsible, T as Text } from "./index-DTqfm6Z4.js";
import "./_commonjsHelpers-CUmg6egw.js";
import "./index-D4iSnjfY.js";
import "./index-BUJ0C1Fr.js";
const Collapsible_stories = {
  title: "Data/Collapsible",
  component: Collapsible,
  tags: ["autodocs"],
  args: {
    label: "Advanced options",
    defaultOpen: false,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { size: "sm", children: "Sizes, padding and background colour for every icon." })
  },
  argTypes: {
    onOpenChange: {
      action: "toggled"
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    maxWidth: 480,
    padding: 16
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Default = {};
const Open = {
  args: {
    defaultOpen: true
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
Open.parameters = {
  ...Open.parameters,
  docs: {
    ...(_d = Open.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    defaultOpen: true\n  }\n}",
      ...(_f = (_e = Open.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Default", "Open"];
export {
  Default,
  Open,
  __namedExportsOrder,
  Collapsible_stories as default
};
