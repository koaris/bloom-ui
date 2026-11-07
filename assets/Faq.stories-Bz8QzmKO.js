var _a, _b, _c;
import { j as jsxRuntimeExports } from "./jsx-runtime-x-ThabpI.js";
import { F as Faq } from "./index-DPkWKMkH.js";
import "./index-hC87BHQs.js";
import "./_commonjsHelpers-CUmg6egw.js";
const Faq_stories = {
  title: "Data/Faq",
  component: Faq,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Questions as native `<details>` disclosures. Bare https:// URLs in plain-text answers become links, so the same strings can feed FAQPage JSON-LD."
      }
    }
  },
  args: {
    items: [{
      q: "Is it free?",
      a: "Yes. Everything runs in your browser and nothing is uploaded."
    }, {
      q: "Where can I build a résumé?",
      a: "Build one at https://resume.koaris.com, then check it here."
    }, {
      q: "Does it work offline?",
      a: "Once the page has loaded, yes."
    }]
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    maxWidth: 640,
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
  Faq_stories as default
};
