var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { G as GenIcon, a as Button } from "./index-d1862f76.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
function GrLinkNext(props) {
  return GenIcon({ "tag": "svg", "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeWidth": "2", "d": "M2,12 L22,12 M13,3 L22,12 L13,21" } }] })(props);
}
const Button_stories = {
  title: "Form/Button",
  component: Button,
  tags: ["autodocs"],
  args: {
    children: "Visualizar",
    size: "md",
    disabled: false,
    variant: "primary",
    loading: false,
    fullWidth: false
  },
  argTypes: {
    size: {
      options: ["xs", "sm", "md", "lg"],
      control: {
        type: "select"
      },
      description: "Defines the size of the button"
    },
    variant: {
      options: ["primary", "secondary", "outline", "ghost", "link"],
      control: {
        type: "select"
      },
      description: "Defines the visual style of the button"
    },
    disabled: {
      control: {
        type: "boolean"
      },
      description: "Whether the button is disabled"
    },
    loading: {
      control: {
        type: "boolean"
      },
      description: "Whether the button is in loading state"
    },
    fullWidth: {
      control: {
        type: "boolean"
      },
      description: "Whether the button should take full width of its container"
    },
    startIcon: {
      control: false,
      description: "Icon to display at the start of the button"
    },
    endIcon: {
      control: false,
      description: "Icon to display at the end of the button"
    },
    onClick: {
      action: "clicked"
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "p-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})
  })]
};
const Primary = {};
const Secondary = {
  args: {
    variant: "secondary",
    children: "Ignorar"
  }
};
const Outline = {
  args: {
    variant: "outline",
    children: "Outline"
  }
};
const Ghost = {
  args: {
    variant: "ghost",
    children: "Ghost"
  }
};
const Link = {
  args: {
    variant: "link",
    children: "Link Style"
  }
};
const ExtraSmall = {
  args: {
    size: "xs",
    children: "Extra Small"
  }
};
const Small = {
  args: {
    size: "sm",
    children: "Small"
  }
};
const Medium = {
  args: {
    size: "md",
    children: "Medium"
  }
};
const Large = {
  args: {
    size: "lg",
    children: "Large"
  }
};
const WithStartIcon = {
  args: {
    children: "Start Icon",
    startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(GrLinkNext, {})
  }
};
const WithEndIcon = {
  args: {
    children: "Próximo",
    endIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(GrLinkNext, {})
  }
};
const WithBothIcons = {
  args: {
    children: "Both Icons",
    startIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(GrLinkNext, {}),
    endIcon: /* @__PURE__ */ jsxRuntimeExports.jsx(GrLinkNext, {})
  }
};
const Disabled = {
  args: {
    disabled: true
  }
};
const Loading = {
  args: {
    loading: true
  }
};
const FullWidth = {
  args: {
    fullWidth: true,
    children: "Full Width Button"
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "w-full p-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})
  })]
};
Primary.parameters = {
  ...Primary.parameters,
  docs: {
    ...(_a = Primary.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{}",
      ...(_c = (_b = Primary.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Secondary.parameters = {
  ...Secondary.parameters,
  docs: {
    ...(_d = Secondary.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'secondary',\n    children: 'Ignorar'\n  }\n}",
      ...(_f = (_e = Secondary.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Outline.parameters = {
  ...Outline.parameters,
  docs: {
    ...(_g = Outline.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'outline',\n    children: 'Outline'\n  }\n}",
      ...(_i = (_h = Outline.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Ghost.parameters = {
  ...Ghost.parameters,
  docs: {
    ...(_j = Ghost.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'ghost',\n    children: 'Ghost'\n  }\n}",
      ...(_l = (_k = Ghost.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Link.parameters = {
  ...Link.parameters,
  docs: {
    ...(_m = Link.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'link',\n    children: 'Link Style'\n  }\n}",
      ...(_o = (_n = Link.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
ExtraSmall.parameters = {
  ...ExtraSmall.parameters,
  docs: {
    ...(_p = ExtraSmall.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'xs',\n    children: 'Extra Small'\n  }\n}",
      ...(_r = (_q = ExtraSmall.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...(_s = Small.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'sm',\n    children: 'Small'\n  }\n}",
      ...(_u = (_t = Small.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Medium.parameters = {
  ...Medium.parameters,
  docs: {
    ...(_v = Medium.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'md',\n    children: 'Medium'\n  }\n}",
      ...(_x = (_w = Medium.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...(_y = Large.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg',\n    children: 'Large'\n  }\n}",
      ...(_A = (_z = Large.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
WithStartIcon.parameters = {
  ...WithStartIcon.parameters,
  docs: {
    ...(_B = WithStartIcon.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Start Icon',\n    startIcon: <GrLinkNext />\n  }\n}",
      ...(_D = (_C = WithStartIcon.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
WithEndIcon.parameters = {
  ...WithEndIcon.parameters,
  docs: {
    ...(_E = WithEndIcon.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Próximo',\n    endIcon: <GrLinkNext />\n  }\n}",
      ...(_G = (_F = WithEndIcon.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
WithBothIcons.parameters = {
  ...WithBothIcons.parameters,
  docs: {
    ...(_H = WithBothIcons.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Both Icons',\n    startIcon: <GrLinkNext />,\n    endIcon: <GrLinkNext />\n  }\n}",
      ...(_J = (_I = WithBothIcons.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_K = Disabled.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...(_M = (_L = Disabled.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
Loading.parameters = {
  ...Loading.parameters,
  docs: {
    ...(_N = Loading.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: "{\n  args: {\n    loading: true\n  }\n}",
      ...(_P = (_O = Loading.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
FullWidth.parameters = {
  ...FullWidth.parameters,
  docs: {
    ...(_Q = FullWidth.parameters) == null ? void 0 : _Q.docs,
    source: {
      originalSource: `{
  args: {
    fullWidth: true,
    children: 'Full Width Button'
  },
  decorators: [Story => <div className="w-full p-4">
        <Story />
      </div>]
}`,
      ...(_S = (_R = FullWidth.parameters) == null ? void 0 : _R.docs) == null ? void 0 : _S.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Secondary", "Outline", "Ghost", "Link", "ExtraSmall", "Small", "Medium", "Large", "WithStartIcon", "WithEndIcon", "WithBothIcons", "Disabled", "Loading", "FullWidth"];
export {
  Disabled,
  ExtraSmall,
  FullWidth,
  Ghost,
  Large,
  Link,
  Loading,
  Medium,
  Outline,
  Primary,
  Secondary,
  Small,
  WithBothIcons,
  WithEndIcon,
  WithStartIcon,
  __namedExportsOrder,
  Button_stories as default
};
