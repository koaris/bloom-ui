var _a, _b, _c, _d, _e, _f;
import { A as Avatar } from "./index-5f8583db.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Avatar_stories = {
  title: "Components/Avatar",
  component: Avatar,
  tags: ["autodocs"],
  args: {
    src: "https://avatars.githubusercontent.com/u/36766110?v=4",
    alt: "Guilherme"
  }
};
const Default = {};
const WithFallback = {
  args: {
    src: void 0
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
WithFallback.parameters = {
  ...WithFallback.parameters,
  docs: {
    ...(_d = WithFallback.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    src: undefined\n  }\n}",
      ...(_f = (_e = WithFallback.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Default", "WithFallback"];
export {
  Default,
  WithFallback,
  __namedExportsOrder,
  Avatar_stories as default
};
