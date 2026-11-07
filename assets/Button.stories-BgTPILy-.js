var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V;
import { j as jsxRuntimeExports } from "./index-DPCO8D-R.js";
import { e as Button } from "./index-DTqfm6Z4.js";
import { e } from "./index-BUJ0C1Fr.js";
import "./_commonjsHelpers-CUmg6egw.js";
import "./index-D4iSnjfY.js";
var DefaultContext = {
  color: void 0,
  size: void 0,
  className: void 0,
  style: void 0,
  attr: void 0
};
var IconContext = e.createContext && e.createContext(DefaultContext);
var __assign = function() {
  __assign = Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
      s = arguments[i];
      for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
    }
    return t;
  };
  return __assign.apply(this, arguments);
};
var __rest = function(s, e2) {
  var t = {};
  for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e2.indexOf(p) < 0) t[p] = s[p];
  if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
    if (e2.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
  }
  return t;
};
function Tree2Element(tree) {
  return tree && tree.map(function(node, i) {
    return e.createElement(node.tag, __assign({
      key: i
    }, node.attr), Tree2Element(node.child));
  });
}
function GenIcon(data) {
  return function(props) {
    return e.createElement(IconBase, __assign({
      attr: __assign({}, data.attr)
    }, props), Tree2Element(data.child));
  };
}
function IconBase(props) {
  var elem = function(conf) {
    var attr = props.attr, size = props.size, title = props.title, svgProps = __rest(props, ["attr", "size", "title"]);
    var computedSize = size || conf.size || "1em";
    var className;
    if (conf.className) className = conf.className;
    if (props.className) className = (className ? className + " " : "") + props.className;
    return e.createElement("svg", __assign({
      stroke: "currentColor",
      fill: "currentColor",
      strokeWidth: "0"
    }, conf.attr, attr, svgProps, {
      className,
      style: __assign(__assign({
        color: props.color || conf.color
      }, conf.style), props.style),
      height: computedSize,
      width: computedSize,
      xmlns: "http://www.w3.org/2000/svg"
    }), title && e.createElement("title", null, title), props.children);
  };
  return IconContext !== void 0 ? e.createElement(IconContext.Consumer, null, function(conf) {
    return elem(conf);
  }) : elem(DefaultContext);
}
function GrLinkNext(props) {
  return GenIcon({ "attr": { "viewBox": "0 0 24 24" }, "child": [{ "tag": "path", "attr": { "fill": "none", "strokeWidth": "2", "d": "M2,12 L22,12 M13,3 L22,12 L13,21" } }] })(props);
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
      description: "Defines the visual style of the button. `secondary` is the default; keep `primary` for the one accent action on a screen."
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
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Primary = {};
const Secondary = {
  args: {
    variant: "secondary",
    children: "Ignorar"
  }
};
const Groups = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: {
    display: "flex",
    gap: 12,
    flexWrap: "wrap"
  }, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", children: "Run" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { children: "Clear" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "ghost", children: "Cancel" })
  ] })
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
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
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
Groups.parameters = {
  ...Groups.parameters,
  docs: {
    ...(_g = Groups.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: `{
  render: () => <div style={{
    display: 'flex',
    gap: 12,
    flexWrap: 'wrap'
  }}>
      <Button variant="primary">Run</Button>
      <Button>Clear</Button>
      <Button variant="ghost">Cancel</Button>
    </div>
}`,
      ...(_i = (_h = Groups.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Outline.parameters = {
  ...Outline.parameters,
  docs: {
    ...(_j = Outline.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'outline',\n    children: 'Outline'\n  }\n}",
      ...(_l = (_k = Outline.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Ghost.parameters = {
  ...Ghost.parameters,
  docs: {
    ...(_m = Ghost.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'ghost',\n    children: 'Ghost'\n  }\n}",
      ...(_o = (_n = Ghost.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Link.parameters = {
  ...Link.parameters,
  docs: {
    ...(_p = Link.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'link',\n    children: 'Link Style'\n  }\n}",
      ...(_r = (_q = Link.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
ExtraSmall.parameters = {
  ...ExtraSmall.parameters,
  docs: {
    ...(_s = ExtraSmall.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'xs',\n    children: 'Extra Small'\n  }\n}",
      ...(_u = (_t = ExtraSmall.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...(_v = Small.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'sm',\n    children: 'Small'\n  }\n}",
      ...(_x = (_w = Small.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Medium.parameters = {
  ...Medium.parameters,
  docs: {
    ...(_y = Medium.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'md',\n    children: 'Medium'\n  }\n}",
      ...(_A = (_z = Medium.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...(_B = Large.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  args: {\n    size: 'lg',\n    children: 'Large'\n  }\n}",
      ...(_D = (_C = Large.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
WithStartIcon.parameters = {
  ...WithStartIcon.parameters,
  docs: {
    ...(_E = WithStartIcon.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Start Icon',\n    startIcon: <GrLinkNext />\n  }\n}",
      ...(_G = (_F = WithStartIcon.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
WithEndIcon.parameters = {
  ...WithEndIcon.parameters,
  docs: {
    ...(_H = WithEndIcon.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Próximo',\n    endIcon: <GrLinkNext />\n  }\n}",
      ...(_J = (_I = WithEndIcon.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
WithBothIcons.parameters = {
  ...WithBothIcons.parameters,
  docs: {
    ...(_K = WithBothIcons.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Both Icons',\n    startIcon: <GrLinkNext />,\n    endIcon: <GrLinkNext />\n  }\n}",
      ...(_M = (_L = WithBothIcons.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_N = Disabled.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...(_P = (_O = Disabled.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
Loading.parameters = {
  ...Loading.parameters,
  docs: {
    ...(_Q = Loading.parameters) == null ? void 0 : _Q.docs,
    source: {
      originalSource: "{\n  args: {\n    loading: true\n  }\n}",
      ...(_S = (_R = Loading.parameters) == null ? void 0 : _R.docs) == null ? void 0 : _S.source
    }
  }
};
FullWidth.parameters = {
  ...FullWidth.parameters,
  docs: {
    ...(_T = FullWidth.parameters) == null ? void 0 : _T.docs,
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
      ...(_V = (_U = FullWidth.parameters) == null ? void 0 : _U.docs) == null ? void 0 : _V.source
    }
  }
};
const __namedExportsOrder = ["Primary", "Secondary", "Groups", "Outline", "Ghost", "Link", "ExtraSmall", "Small", "Medium", "Large", "WithStartIcon", "WithEndIcon", "WithBothIcons", "Disabled", "Loading", "FullWidth"];
export {
  Disabled,
  ExtraSmall,
  FullWidth,
  Ghost,
  Groups,
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
