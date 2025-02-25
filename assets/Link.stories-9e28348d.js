var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { L as Link } from "./index-5f8583db.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Link_stories = {
  title: "Form/Link",
  component: Link,
  tags: ["autodocs"],
  args: {
    children: "Visualizar",
    url: "https://x.com",
    newPage: true,
    disabled: false
  },
  argTypes: {
    url: {
      control: {
        type: "string"
      }
    },
    newPage: {
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    }
  }
};
const Primary = {
  args: {}
};
const SamePage = {
  args: {
    newPage: false
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {}\n}",
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
SamePage.parameters = {
  ...SamePage.parameters,
  docs: {
    ...(_d = SamePage.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    newPage: false\n  }\n}",
      ...(_f = (_e = SamePage.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
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
const __namedExportsOrder = ["Primary", "SamePage", "Disabled"];
export {
  Disabled,
  Primary,
  SamePage,
  __namedExportsOrder,
  Link_stories as default
};
