var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { S as Skeleton } from "./index-d1862f76.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Skeleton_stories = {
  title: "Feedback/Skeleton",
  component: Skeleton,
  tags: ["autodocs"],
  args: {
    width: "full",
    height: "16",
    rounded: false,
    circle: false,
    animate: true
  },
  argTypes: {
    width: {
      control: "text",
      description: "Width of the skeleton (number for pixels or string for Tailwind classes)"
    },
    height: {
      control: "text",
      description: "Height of the skeleton (number for pixels or string for Tailwind classes)"
    },
    rounded: {
      control: "boolean",
      description: "Makes the skeleton have rounded corners"
    },
    circle: {
      control: "boolean",
      description: "Makes the skeleton fully rounded (circular)"
    },
    animate: {
      control: "boolean",
      description: "Adds pulse animation to the skeleton"
    },
    className: {
      control: "text",
      description: "Additional CSS classes"
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "p-4 max-w-md",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})
  })]
};
const Default = {};
const Text = {
  args: {
    height: "4",
    rounded: true
  }
};
const Circle = {
  args: {
    width: "12",
    height: "12",
    circle: true
  }
};
const Rectangle = {
  args: {
    width: "64",
    height: "32"
  }
};
const Rounded = {
  args: {
    width: "64",
    height: "32",
    rounded: true
  }
};
const NoAnimation = {
  args: {
    animate: false,
    rounded: true
  }
};
const CardSkeleton = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "border border-gray-200 rounded-md p-4 max-w-sm w-full",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex space-x-4",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        width: "12",
        height: "12",
        circle: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "flex-1 space-y-2 py-1",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
          height: "4",
          rounded: true
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
          height: "4",
          width: "3/4",
          rounded: true
        })]
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "space-y-3 mt-4",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        height: "4",
        rounded: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        height: "4",
        rounded: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        height: "4",
        width: "5/6",
        rounded: true
      })]
    })]
  })
};
const TableSkeleton = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "w-full",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex border-b border-gray-200 py-2",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        className: "w-1/4 h-4 mr-2",
        rounded: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        className: "w-1/4 h-4 mr-2",
        rounded: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        className: "w-1/4 h-4 mr-2",
        rounded: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        className: "w-1/4 h-4",
        rounded: true
      })]
    }), [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex border-b border-gray-200 py-3",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        className: "w-1/4 h-4 mr-2",
        rounded: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        className: "w-1/4 h-4 mr-2",
        rounded: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        className: "w-1/4 h-4 mr-2",
        rounded: true
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Skeleton, {
        className: "w-1/4 h-4",
        rounded: true
      })]
    }, i))]
  })
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
Text.parameters = {
  ...Text.parameters,
  docs: {
    ...(_d = Text.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    height: '4',\n    rounded: true\n  }\n}",
      ...(_f = (_e = Text.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Circle.parameters = {
  ...Circle.parameters,
  docs: {
    ...(_g = Circle.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    width: '12',\n    height: '12',\n    circle: true\n  }\n}",
      ...(_i = (_h = Circle.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Rectangle.parameters = {
  ...Rectangle.parameters,
  docs: {
    ...(_j = Rectangle.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    width: '64',\n    height: '32'\n  }\n}",
      ...(_l = (_k = Rectangle.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Rounded.parameters = {
  ...Rounded.parameters,
  docs: {
    ...(_m = Rounded.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    width: '64',\n    height: '32',\n    rounded: true\n  }\n}",
      ...(_o = (_n = Rounded.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
NoAnimation.parameters = {
  ...NoAnimation.parameters,
  docs: {
    ...(_p = NoAnimation.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    animate: false,\n    rounded: true\n  }\n}",
      ...(_r = (_q = NoAnimation.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
CardSkeleton.parameters = {
  ...CardSkeleton.parameters,
  docs: {
    ...(_s = CardSkeleton.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  render: () => <div className="border border-gray-200 rounded-md p-4 max-w-sm w-full">\n            <div className="flex space-x-4">\n                <Skeleton width="12" height="12" circle />\n                <div className="flex-1 space-y-2 py-1">\n                    <Skeleton height="4" rounded />\n                    <Skeleton height="4" width="3/4" rounded />\n                </div>\n            </div>\n            <div className="space-y-3 mt-4">\n                <Skeleton height="4" rounded />\n                <Skeleton height="4" rounded />\n                <Skeleton height="4" width="5/6" rounded />\n            </div>\n        </div>\n}',
      ...(_u = (_t = CardSkeleton.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
TableSkeleton.parameters = {
  ...TableSkeleton.parameters,
  docs: {
    ...(_v = TableSkeleton.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: '{\n  render: () => <div className="w-full">\n            <div className="flex border-b border-gray-200 py-2">\n                <Skeleton className="w-1/4 h-4 mr-2" rounded />\n                <Skeleton className="w-1/4 h-4 mr-2" rounded />\n                <Skeleton className="w-1/4 h-4 mr-2" rounded />\n                <Skeleton className="w-1/4 h-4" rounded />\n            </div>\n            {[...Array(5)].map((_, i) => <div key={i} className="flex border-b border-gray-200 py-3">\n                    <Skeleton className="w-1/4 h-4 mr-2" rounded />\n                    <Skeleton className="w-1/4 h-4 mr-2" rounded />\n                    <Skeleton className="w-1/4 h-4 mr-2" rounded />\n                    <Skeleton className="w-1/4 h-4" rounded />\n                </div>)}\n        </div>\n}',
      ...(_x = (_w = TableSkeleton.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
const __namedExportsOrder = ["Default", "Text", "Circle", "Rectangle", "Rounded", "NoAnimation", "CardSkeleton", "TableSkeleton"];
export {
  CardSkeleton,
  Circle,
  Default,
  NoAnimation,
  Rectangle,
  Rounded,
  TableSkeleton,
  Text,
  __namedExportsOrder,
  Skeleton_stories as default
};
