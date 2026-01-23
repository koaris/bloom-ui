var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { H as Heading } from "./index-d1862f76.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const meta = {
  title: "Components/Typography/Heading",
  component: Heading,
  tags: ["autodocs"],
  parameters: {
    layout: "centered"
  },
  argTypes: {
    tag: {
      control: "select",
      options: ["h1", "h2", "h3", "h4", "h5", "h6"],
      description: "HTML tag to use for the heading"
    },
    weight: {
      control: "select",
      options: ["normal", "medium", "semibold", "bold", "extrabold"],
      description: "Font weight of the heading"
    },
    tracking: {
      control: "select",
      options: ["tighter", "tight", "normal", "wide", "wider", "widest"],
      description: "Letter spacing of the heading"
    },
    alignment: {
      control: "select",
      options: ["left", "center", "right"],
      description: "Text alignment of the heading"
    },
    truncate: {
      control: "boolean",
      description: "Whether to truncate the text with an ellipsis if it overflows"
    },
    uppercase: {
      control: "boolean",
      description: "Whether to transform the text to uppercase"
    },
    children: {
      control: "text",
      description: "Content of the heading"
    }
  }
};
const Default = {
  args: {
    children: "Default Heading",
    color: "neutral",
    // colorShade: '800',
    size: "lg",
    tag: "h2",
    weight: "bold",
    tracking: "normal",
    alignment: "left",
    truncate: false,
    uppercase: false
  }
};
const Primary = {
  args: {
    children: "Primary Heading",
    color: "primary",
    // colorShade: '600',
    // size: '2xl',
    tag: "h1"
  }
};
const Secondary = {
  args: {
    children: "Secondary Heading",
    color: "secondary",
    // colorShade: '600',
    // size: 'xl',
    tag: "h2"
  }
};
const Sizes = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-2",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      size: "sm",
      tag: "h6",
      children: "Heading Size Small"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      size: "md",
      tag: "h5",
      children: "Heading Size Medium"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      size: "lg",
      tag: "h4",
      children: "Heading Size Large"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      size: "xl",
      tag: "h3",
      children: "Heading Size XL"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      size: "2xl",
      tag: "h2",
      children: "Heading Size 2XL"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      size: "3xl",
      tag: "h1",
      children: "Heading Size 3XL"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      size: "4xl",
      tag: "h1",
      children: "Heading Size 4XL"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      size: "5xl",
      tag: "h1",
      children: "Heading Size 5XL"
    })]
  })
};
const Colors = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-2",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      color: "primary",
      className: "text-neutral-600",
      children: "Primary Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      color: "secondary",
      className: "text-neutral-600",
      children: "Secondary Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      color: "accent",
      className: "text-neutral-600",
      children: "Accent Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      color: "success",
      className: "text-neutral-600",
      children: "Success Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      color: "warning",
      className: "text-neutral-600",
      children: "Warning Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      color: "error",
      className: "text-neutral-600",
      children: "Error Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      color: "info",
      className: "text-neutral-600",
      children: "Info Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      color: "neutral",
      className: "text-neutral-800",
      children: "Neutral Heading"
    })]
  })
};
const Weights = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-2",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      weight: "normal",
      children: "Normal Weight Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      weight: "medium",
      children: "Medium Weight Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      weight: "semibold",
      children: "Semibold Weight Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      weight: "bold",
      children: "Bold Weight Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      weight: "extrabold",
      children: "Extrabold Weight Heading"
    })]
  })
};
const Alignment = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-4 w-full max-w-lg border p-4",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      alignment: "left",
      children: "Left Aligned Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      alignment: "center",
      children: "Center Aligned Heading"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Heading, {
      alignment: "right",
      children: "Right Aligned Heading"
    })]
  })
};
const Truncated = {
  args: {
    children: "This is a very long heading that will be truncated because it exceeds the available space and we have enabled the truncate prop to make sure it doesnt break the layout",
    truncate: true,
    className: "max-w-xs"
  }
};
const Uppercase = {
  args: {
    children: "This heading will be displayed in all uppercase letters",
    uppercase: true
  }
};
const CustomStyling = {
  args: {
    children: "Custom Styled Heading",
    className: "italic underline decoration-wavy decoration-purple-500 underline-offset-4"
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Default Heading',\n    color: 'neutral',\n    // colorShade: '800',\n    size: 'lg',\n    tag: 'h2',\n    weight: 'bold',\n    tracking: 'normal',\n    alignment: 'left',\n    truncate: false,\n    uppercase: false\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_d = Primary.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Primary Heading',\n    color: 'primary',\n    // colorShade: '600',\n    // size: '2xl',\n    tag: 'h1'\n  }\n}",
      ...(_f = (_e = Primary.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...(_g = Secondary.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Secondary Heading',\n    color: 'secondary',\n    // colorShade: '600',\n    // size: 'xl',\n    tag: 'h2'\n  }\n}",
      ...(_i = (_h = Secondary.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...(_j = Sizes.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  render: () => <div className="space-y-2">\n      <Heading size="sm" tag="h6">Heading Size Small</Heading>\n      <Heading size="md" tag="h5">Heading Size Medium</Heading>\n      <Heading size="lg" tag="h4">Heading Size Large</Heading>\n      <Heading size="xl" tag="h3">Heading Size XL</Heading>\n      <Heading size="2xl" tag="h2">Heading Size 2XL</Heading>\n      <Heading size="3xl" tag="h1">Heading Size 3XL</Heading>\n      <Heading size="4xl" tag="h1">Heading Size 4XL</Heading>\n      <Heading size="5xl" tag="h1">Heading Size 5XL</Heading>\n    </div>\n}',
      ...(_l = (_k = Sizes.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Colors.parameters = {
  ...Colors.parameters,
  docs: {
    ...(_m = Colors.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  render: () => <div className="space-y-2">\n      <Heading color="primary" className="text-neutral-600">Primary Heading</Heading>\n      <Heading color="secondary" className="text-neutral-600">Secondary Heading</Heading>\n      <Heading color="accent" className="text-neutral-600">Accent Heading</Heading>\n      <Heading color="success" className="text-neutral-600">Success Heading</Heading>\n      <Heading color="warning" className="text-neutral-600">Warning Heading</Heading>\n      <Heading color="error" className="text-neutral-600">Error Heading</Heading>\n      <Heading color="info" className="text-neutral-600">Info Heading</Heading>\n      <Heading color="neutral" className="text-neutral-800">Neutral Heading</Heading>\n    </div>\n}',
      ...(_o = (_n = Colors.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Weights.parameters = {
  ...Weights.parameters,
  docs: {
    ...(_p = Weights.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => <div className="space-y-2">\n      <Heading weight="normal">Normal Weight Heading</Heading>\n      <Heading weight="medium">Medium Weight Heading</Heading>\n      <Heading weight="semibold">Semibold Weight Heading</Heading>\n      <Heading weight="bold">Bold Weight Heading</Heading>\n      <Heading weight="extrabold">Extrabold Weight Heading</Heading>\n    </div>\n}',
      ...(_r = (_q = Weights.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Alignment.parameters = {
  ...Alignment.parameters,
  docs: {
    ...(_s = Alignment.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  render: () => <div className="space-y-4 w-full max-w-lg border p-4">\n      <Heading alignment="left">Left Aligned Heading</Heading>\n      <Heading alignment="center">Center Aligned Heading</Heading>\n      <Heading alignment="right">Right Aligned Heading</Heading>\n    </div>\n}',
      ...(_u = (_t = Alignment.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Truncated.parameters = {
  ...Truncated.parameters,
  docs: {
    ...(_v = Truncated.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'This is a very long heading that will be truncated because it exceeds the available space and we have enabled the truncate prop to make sure it doesnt break the layout',\n    truncate: true,\n    className: 'max-w-xs'\n  }\n}",
      ...(_x = (_w = Truncated.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Uppercase.parameters = {
  ...Uppercase.parameters,
  docs: {
    ...(_y = Uppercase.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'This heading will be displayed in all uppercase letters',\n    uppercase: true\n  }\n}",
      ...(_A = (_z = Uppercase.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
CustomStyling.parameters = {
  ...CustomStyling.parameters,
  docs: {
    ...(_B = CustomStyling.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Custom Styled Heading',\n    className: 'italic underline decoration-wavy decoration-purple-500 underline-offset-4'\n  }\n}",
      ...(_D = (_C = CustomStyling.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
const __namedExportsOrder = ["Default", "Primary", "Secondary", "Sizes", "Colors", "Weights", "Alignment", "Truncated", "Uppercase", "CustomStyling"];
export {
  Alignment,
  Colors,
  CustomStyling,
  Default,
  Primary,
  Secondary,
  Sizes,
  Truncated,
  Uppercase,
  Weights,
  __namedExportsOrder,
  meta as default
};
