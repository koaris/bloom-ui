var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { B as Box, T as Text } from "./index-d1862f76.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Box_stories = {
  title: "Components/Box",
  component: Box,
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: "select",
      options: ["primary", "secondary", "ghost", "outline"],
      description: "Visual style variant of the box"
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the box affecting padding and text size"
    },
    tag: {
      control: "select",
      options: ["div", "section", "article", "aside", "header", "footer", "main", "nav"],
      description: "HTML element used to render the box"
    },
    elevated: {
      control: "boolean",
      description: "Applies a shadow effect to the box"
    },
    hasBorder: {
      control: "boolean",
      description: "Controls the visibility of the border"
    },
    isInteractive: {
      control: "boolean",
      description: "Adds hover/active states to suggest interactivity"
    },
    fullWidth: {
      control: "boolean",
      description: "Makes the box take the full width of its container"
    }
  },
  args: {
    variant: "primary",
    size: "md",
    tag: "div",
    elevated: false,
    hasBorder: true,
    isInteractive: false,
    fullWidth: false
  }
};
const Template = {
  render: (args) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    style: {
      maxWidth: "600px"
    },
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
      ...args
    })
  })
};
const Primary = {
  ...Template,
  args: {
    variant: "primary",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      color: "neutral-800",
      children: "Primary box variant"
    })
  }
};
const Secondary = {
  ...Template,
  args: {
    variant: "secondary",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      color: "neutral-200",
      children: "Secondary box variant"
    })
  }
};
const Ghost = {
  ...Template,
  args: {
    variant: "ghost",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      color: "neutral-800",
      children: "Ghost box variant (transparent)"
    })
  }
};
const Outline = {
  ...Template,
  args: {
    variant: "outline",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      color: "neutral-800",
      children: "Outline box variant"
    })
  }
};
const Sizes = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-4",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
      size: "sm",
      variant: "primary",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "Small size (sm)"
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
      size: "md",
      variant: "primary",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "Medium size (md)"
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
      size: "lg",
      variant: "primary",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "Large size (lg)"
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
      size: "xl",
      variant: "primary",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "Extra large size (xl)"
      })
    })]
  })
};
const Elevated = {
  ...Template,
  args: {
    variant: "primary",
    elevated: true,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      color: "neutral-800",
      children: "Elevated box with shadow"
    })
  }
};
const Interactive = {
  ...Template,
  args: {
    variant: "primary",
    isInteractive: true,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      color: "neutral-800",
      children: "Interactive box (hover me)"
    })
  }
};
const SemanticTags = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-4",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
      tag: "section",
      variant: "outline",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "Section tag"
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
      tag: "article",
      variant: "outline",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "Article tag"
      })
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
      tag: "nav",
      variant: "outline",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "Navigation tag"
      })
    })]
  })
};
const CustomizationExample = {
  ...Template,
  args: {
    variant: "primary",
    elevated: true,
    isInteractive: true,
    className: "bg-blue-100 text-blue-800 border-blue-300",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
      color: "blue-800",
      children: "Custom styled box with className"
    })
  }
};
const ComplexContent = {
  ...Template,
  args: {
    variant: "outline",
    size: "lg",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "space-y-4",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        tag: "strong",
        size: "lg",
        color: "neutral-800",
        children: "Box with complex content"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-600",
        children: "Boxes can contain any React components, not just text. This makes them versatile containers for building complex UI components."
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "flex gap-2",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
          size: "sm",
          variant: "primary",
          elevated: true,
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
            color: "neutral-800",
            children: "Nested box"
          })
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(Box, {
          size: "sm",
          variant: "secondary",
          children: /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
            color: "neutral-200",
            children: "Another nested box"
          })
        })]
      })]
    })
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    variant: 'primary',\n    children: <Text color='neutral-800'>Primary box variant</Text>\n  }\n}",
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...(_d = Secondary.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    variant: 'secondary',\n    children: <Text color='neutral-200'>Secondary box variant</Text>\n  }\n}",
      ...(_f = (_e = Secondary.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Ghost.parameters = {
  ...Ghost.parameters,
  docs: {
    ...(_g = Ghost.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    variant: 'ghost',\n    children: <Text color='neutral-800'>Ghost box variant (transparent)</Text>\n  }\n}",
      ...(_i = (_h = Ghost.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Outline.parameters = {
  ...Outline.parameters,
  docs: {
    ...(_j = Outline.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    variant: 'outline',\n    children: <Text color='neutral-800'>Outline box variant</Text>\n  }\n}",
      ...(_l = (_k = Outline.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...(_m = Sizes.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: `{
  render: () => <div className="space-y-4">
      <Box size="sm" variant="primary">
        <Text color='neutral-800'>Small size (sm)</Text>
      </Box>
      <Box size="md" variant="primary">
        <Text color='neutral-800'>Medium size (md)</Text>
      </Box>
      <Box size="lg" variant="primary">
        <Text color='neutral-800'>Large size (lg)</Text>
      </Box>
      <Box size="xl" variant="primary">
        <Text color='neutral-800'>Extra large size (xl)</Text>
      </Box>
    </div>
}`,
      ...(_o = (_n = Sizes.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Elevated.parameters = {
  ...Elevated.parameters,
  docs: {
    ...(_p = Elevated.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    variant: 'primary',\n    elevated: true,\n    children: <Text color='neutral-800'>Elevated box with shadow</Text>\n  }\n}",
      ...(_r = (_q = Elevated.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Interactive.parameters = {
  ...Interactive.parameters,
  docs: {
    ...(_s = Interactive.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    variant: 'primary',\n    isInteractive: true,\n    children: <Text color='neutral-800'>Interactive box (hover me)</Text>\n  }\n}",
      ...(_u = (_t = Interactive.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
SemanticTags.parameters = {
  ...SemanticTags.parameters,
  docs: {
    ...(_v = SemanticTags.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: `{
  render: () => <div className="space-y-4">
      <Box tag="section" variant="outline">
        <Text color='neutral-800'>Section tag</Text>
      </Box>
      <Box tag="article" variant="outline">
        <Text color='neutral-800'>Article tag</Text>
      </Box>
      <Box tag="nav" variant="outline">
        <Text color='neutral-800'>Navigation tag</Text>
      </Box>
    </div>
}`,
      ...(_x = (_w = SemanticTags.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
CustomizationExample.parameters = {
  ...CustomizationExample.parameters,
  docs: {
    ...(_y = CustomizationExample.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  ...Template,\n  args: {\n    variant: 'primary',\n    elevated: true,\n    isInteractive: true,\n    className: 'bg-blue-100 text-blue-800 border-blue-300',\n    children: <Text color='blue-800'>Custom styled box with className</Text>\n  }\n}",
      ...(_A = (_z = CustomizationExample.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
ComplexContent.parameters = {
  ...ComplexContent.parameters,
  docs: {
    ...(_B = ComplexContent.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: `{
  ...Template,
  args: {
    variant: 'outline',
    size: 'lg',
    children: <div className="space-y-4">
        <Text tag="strong" size="lg" color='neutral-800'>Box with complex content</Text>
        <Text color='neutral-600'>Boxes can contain any React components, not just text. This makes them versatile containers for building complex UI components.</Text>
        <div className="flex gap-2">
          <Box size="sm" variant="primary" elevated>
            <Text color='neutral-800'>Nested box</Text>
          </Box>
          <Box size="sm" variant="secondary">
            <Text color='neutral-200'>Another nested box</Text>
          </Box>
        </div>
      </div>
  }
}`,
      ...(_D = (_C = ComplexContent.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Secondary", "Ghost", "Outline", "Sizes", "Elevated", "Interactive", "SemanticTags", "CustomizationExample", "ComplexContent"];
export {
  ComplexContent,
  CustomizationExample,
  Elevated,
  Ghost,
  Interactive,
  Outline,
  Primary,
  Secondary,
  SemanticTags,
  Sizes,
  __namedExportsOrder,
  Box_stories as default
};
