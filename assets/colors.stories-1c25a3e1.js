import { g as getContrast, M as Meta, U as Unstyled } from "./chunk-HLWAVYOI-153ff896.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { c as colors } from "./index-b93d7799.js";
import { u as useMDXComponents } from "./index-5952e728.js";
import "./iframe-9f4b6ef5.js";
import "../sb-preview/runtime.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
import "./react-18-44ac1b0a.js";
import "./chunk-6E673XPF-1092c3b5.js";
import "./index-469b42be.js";
import "./index-121c761d.js";
import "./index-eeefe080.js";
function ColorsGrid({ type }) {
  return Object.entries(colors).filter(([key, color]) => type ? key.includes(type) : true).map(([key, color]) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        style: {
          backgroundColor: color,
          padding: "2rem",
          color: getContrast(color, "#FFFFFF") < 3.5 ? "#000000" : "#FFFFFF"
        },
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "flex", justifyContent: "space-between", fontFamily: "monospace" }, children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: key }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: color })
        ] })
      },
      key
    );
  });
}
try {
  ColorsGrid.displayName = "ColorsGrid";
  ColorsGrid.__docgenInfo = { "description": "", "displayName": "ColorsGrid", "props": { "type": { "defaultValue": null, "description": "", "name": "type", "required": false, "type": { "name": "string" } } } };
} catch (__react_docgen_typescript_loader_error) {
}
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p",
    h2: "h2"
  }, useMDXComponents(), props.components);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Colors"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h1, {
      id: "colors",
      children: "Colors"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.p, {
      children: "Cores utilizadas na Koaris."
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "neutrals",
      children: "Neutrals"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(Unstyled, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "neutral"
      })
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "primary",
      children: "Primary"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(Unstyled, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "orange"
      })
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h2, {
      id: "others",
      children: "Others"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsxs(Unstyled, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "red"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "blue"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(ColorsGrid, {
        type: "green"
      })]
    })]
  });
}
function MDXContent(props = {}) {
  const {
    wrapper: MDXLayout
  } = Object.assign({}, useMDXComponents(), props.components);
  return MDXLayout ? /* @__PURE__ */ jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
const __page = () => {
  throw new Error("Docs-only story");
};
__page.parameters = {
  docsOnly: true
};
const componentMeta = {
  title: "Tokens/Colors",
  tags: ["stories-mdx"],
  includeStories: ["__page"]
};
componentMeta.parameters = componentMeta.parameters || {};
componentMeta.parameters.docs = {
  ...componentMeta.parameters.docs || {},
  page: MDXContent
};
const __namedExportsOrder = ["__page"];
export {
  __namedExportsOrder,
  __page,
  componentMeta as default
};
