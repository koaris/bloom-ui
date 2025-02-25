var _a, _b, _c, _d, _e, _f;
import { H as Heading } from "./index-5f8583db.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Heading_stories = {
  title: "Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  args: {
    children: "Example Header"
  },
  argTypes: {
    size: {
      options: ["sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      control: {
        type: "select"
      }
    },
    variant: {
      options: ["h1", "h2", "h3", "h4"],
      control: {
        type: "select"
      }
    }
  }
};
const Default = {};
const CustomTag = {
  args: {
    tag: "h1",
    children: "H1 html tag",
    size: "3xl"
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
CustomTag.parameters = {
  ...CustomTag.parameters,
  docs: {
    ...(_d = CustomTag.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    tag: "h1",\n    children: "H1 html tag",\n    size: "3xl"\n  }\n}',
      ...(_f = (_e = CustomTag.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Default", "CustomTag"];
export {
  CustomTag,
  Default,
  __namedExportsOrder,
  Heading_stories as default
};
