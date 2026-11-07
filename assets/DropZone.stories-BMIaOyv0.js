var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./index-DPCO8D-R.js";
import { D as DropZone } from "./index-DTqfm6Z4.js";
import "./_commonjsHelpers-CUmg6egw.js";
import "./index-D4iSnjfY.js";
import "./index-BUJ0C1Fr.js";
const DropZone_stories = {
  title: "Form/DropZone",
  component: DropZone,
  tags: ["autodocs"],
  args: {
    label: "Image"
  },
  argTypes: {
    onChange: {
      action: "changed"
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    maxWidth: 480,
    padding: 16
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Default = {};
const Documents = {
  args: {
    label: "Résumé",
    accept: ".pdf,.docx",
    hint: "PDF or DOCX, up to 5 MB"
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
Documents.parameters = {
  ...Documents.parameters,
  docs: {
    ...(_d = Documents.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    label: 'Résumé',\n    accept: '.pdf,.docx',\n    hint: 'PDF or DOCX, up to 5 MB'\n  }\n}",
      ...(_f = (_e = Documents.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Default", "Documents"];
export {
  Default,
  Documents,
  __namedExportsOrder,
  DropZone_stories as default
};
