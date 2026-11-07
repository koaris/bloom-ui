var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { j as jsxRuntimeExports } from "./index-DPCO8D-R.js";
import { O as OutputPanel, i as OutputPanelStringsProvider } from "./index-DTqfm6Z4.js";
import "./_commonjsHelpers-CUmg6egw.js";
import "./index-D4iSnjfY.js";
import "./index-BUJ0C1Fr.js";
const OutputPanel_stories = {
  title: "Data/OutputPanel",
  component: OutputPanel,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Read-only result well with a Copy button and a character count. Wrap a localised screen in `OutputPanelStringsProvider` (`en` or `pt`); explicit props win over the provider."
      }
    }
  },
  args: {
    value: "https://koaris.com/?utm_source=newsletter&utm_medium=email"
  },
  argTypes: {
    onCopied: {
      action: "copied"
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    maxWidth: 560,
    padding: 16
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Default = {};
const Empty = {
  args: {
    value: ""
  }
};
const Portuguese = {
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx(OutputPanelStringsProvider, { locale: "pt-BR", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
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
Empty.parameters = {
  ...Empty.parameters,
  docs: {
    ...(_d = Empty.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    value: ''\n  }\n}",
      ...(_f = (_e = Empty.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Portuguese.parameters = {
  ...Portuguese.parameters,
  docs: {
    ...(_g = Portuguese.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  decorators: [Story => <OutputPanelStringsProvider locale="pt-BR">\n        <Story />\n      </OutputPanelStringsProvider>]\n}',
      ...(_i = (_h = Portuguese.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Default", "Empty", "Portuguese"];
export {
  Default,
  Empty,
  Portuguese,
  __namedExportsOrder,
  OutputPanel_stories as default
};
