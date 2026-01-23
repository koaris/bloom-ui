var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { c as Loading } from "./index-d1862f76.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Loading_stories = {
  title: "Feedback/Loading",
  component: Loading,
  tags: ["autodocs"],
  args: {
    size: "md",
    color: "primary",
    withText: false,
    text: "Loading...",
    centered: false
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: "select"
      },
      description: "Controls the size of the loading spinner"
    },
    color: {
      options: ["primary", "secondary", "white", "black", "gray"],
      control: {
        type: "select"
      },
      description: "Controls the color of the loading spinner"
    },
    withText: {
      control: "boolean",
      description: "Whether to show loading text beside the spinner"
    },
    text: {
      control: "text",
      description: "Custom text to display next to the spinner"
    },
    centered: {
      control: "boolean",
      description: "Whether to center the loading spinner in its container"
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
const Small = {
  args: {
    size: "sm"
  }
};
const Large = {
  args: {
    size: "lg"
  }
};
const SecondaryColor = {
  args: {
    color: "secondary"
  }
};
const WithText = {
  args: {
    withText: true
  }
};
const CustomText = {
  args: {
    withText: true,
    text: "Processing data..."
  }
};
const Centered = {
  args: {
    centered: true
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "p-4 w-64 h-32 border border-gray-200 rounded",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})
  })]
};
const CenteredWithText = {
  args: {
    centered: true,
    withText: true
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "p-4 w-64 h-32 border border-gray-200 rounded",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})
  })]
};
const LoadingOverlay = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "relative w-full h-64 border border-gray-200 rounded overflow-hidden",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {
        size: "lg",
        color: "white",
        withText: true,
        text: "Loading content..."
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
      className: "p-4",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        className: "text-gray-500",
        children: "Content underneath the overlay..."
      })
    })]
  })
};
const LoadingCard = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "p-4 border border-gray-200 rounded shadow-sm",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex justify-between items-center mb-4",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("h3", {
        className: "text-lg font-medium",
        children: "Data Dashboard"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {
        size: "sm",
        color: "primary"
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "space-y-2",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "h-4 bg-gray-200 rounded w-3/4"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "h-4 bg-gray-200 rounded w-1/2"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
        className: "h-4 bg-gray-200 rounded w-5/6"
      })]
    })]
  })
};
const InlineLoading = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "p-4 border border-gray-200 rounded shadow-sm",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("p", {
      className: "mb-2",
      children: "The system is currently:"
    }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex items-center",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Loading, {
        size: "xs",
        color: "primary"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("span", {
        className: "ml-2",
        children: "Processing your request"
      })]
    })]
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
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...(_d = Small.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'sm'\n  }\n}",
      ...(_f = (_e = Small.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...(_g = Large.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg'\n  }\n}",
      ...(_i = (_h = Large.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
SecondaryColor.parameters = {
  ...SecondaryColor.parameters,
  docs: {
    ...(_j = SecondaryColor.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    color: 'secondary'\n  }\n}",
      ...(_l = (_k = SecondaryColor.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
WithText.parameters = {
  ...WithText.parameters,
  docs: {
    ...(_m = WithText.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    withText: true\n  }\n}",
      ...(_o = (_n = WithText.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
CustomText.parameters = {
  ...CustomText.parameters,
  docs: {
    ...(_p = CustomText.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    withText: true,\n    text: 'Processing data...'\n  }\n}",
      ...(_r = (_q = CustomText.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Centered.parameters = {
  ...Centered.parameters,
  docs: {
    ...(_s = Centered.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  args: {\n    centered: true\n  },\n  decorators: [Story => <div className="p-4 w-64 h-32 border border-gray-200 rounded">\n                <Story />\n            </div>]\n}',
      ...(_u = (_t = Centered.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
CenteredWithText.parameters = {
  ...CenteredWithText.parameters,
  docs: {
    ...(_v = CenteredWithText.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: '{\n  args: {\n    centered: true,\n    withText: true\n  },\n  decorators: [Story => <div className="p-4 w-64 h-32 border border-gray-200 rounded">\n                <Story />\n            </div>]\n}',
      ...(_x = (_w = CenteredWithText.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
LoadingOverlay.parameters = {
  ...LoadingOverlay.parameters,
  docs: {
    ...(_y = LoadingOverlay.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: '{\n  render: () => <div className="relative w-full h-64 border border-gray-200 rounded overflow-hidden">\n            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex items-center justify-center">\n                <Loading size="lg" color="white" withText text="Loading content..." />\n            </div>\n            <div className="p-4">\n                <p className="text-gray-500">Content underneath the overlay...</p>\n            </div>\n        </div>\n}',
      ...(_A = (_z = LoadingOverlay.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
LoadingCard.parameters = {
  ...LoadingCard.parameters,
  docs: {
    ...(_B = LoadingCard.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: '{\n  render: () => <div className="p-4 border border-gray-200 rounded shadow-sm">\n            <div className="flex justify-between items-center mb-4">\n                <h3 className="text-lg font-medium">Data Dashboard</h3>\n                <Loading size="sm" color="primary" />\n            </div>\n            <div className="space-y-2">\n                <div className="h-4 bg-gray-200 rounded w-3/4"></div>\n                <div className="h-4 bg-gray-200 rounded w-1/2"></div>\n                <div className="h-4 bg-gray-200 rounded w-5/6"></div>\n            </div>\n        </div>\n}',
      ...(_D = (_C = LoadingCard.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
InlineLoading.parameters = {
  ...InlineLoading.parameters,
  docs: {
    ...(_E = InlineLoading.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: '{\n  render: () => <div className="p-4 border border-gray-200 rounded shadow-sm">\n            <p className="mb-2">The system is currently:</p>\n            <div className="flex items-center">\n                <Loading size="xs" color="primary" />\n                <span className="ml-2">Processing your request</span>\n            </div>\n        </div>\n}',
      ...(_G = (_F = InlineLoading.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
const __namedExportsOrder = ["Default", "Small", "Large", "SecondaryColor", "WithText", "CustomText", "Centered", "CenteredWithText", "LoadingOverlay", "LoadingCard", "InlineLoading"];
export {
  Centered,
  CenteredWithText,
  CustomText,
  Default,
  InlineLoading,
  Large,
  LoadingCard,
  LoadingOverlay,
  SecondaryColor,
  Small,
  WithText,
  __namedExportsOrder,
  Loading_stories as default
};
