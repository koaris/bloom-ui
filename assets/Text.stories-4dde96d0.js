var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { T as Text } from "./index-5f8583db.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Text_stories = {
  title: "Typography/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Example text"
  },
  argTypes: {
    size: {
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      control: {
        type: "select"
      }
    },
    variant: {
      options: ["p", "strong", "span", "label"],
      control: {
        type: "select"
      }
    }
  }
};
const Default = {};
const Strong = {
  args: {
    tag: "strong"
  }
};
const Span = {
  args: {
    tag: "span"
  }
};
const Label = {
  args: {
    tag: "label"
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
Strong.parameters = {
  ...Strong.parameters,
  docs: {
    ...(_d = Strong.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    tag: "strong"\n  }\n}',
      ...(_f = (_e = Strong.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Span.parameters = {
  ...Span.parameters,
  docs: {
    ...(_g = Span.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  args: {\n    tag: "span"\n  }\n}',
      ...(_i = (_h = Span.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Label.parameters = {
  ...Label.parameters,
  docs: {
    ...(_j = Label.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  args: {\n    tag: "label"\n  }\n}',
      ...(_l = (_k = Label.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Default", "Strong", "Span", "Label"];
export {
  Default,
  Label,
  Span,
  Strong,
  __namedExportsOrder,
  Text_stories as default
};
