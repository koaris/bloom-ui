import { M as Meta, U as Unstyled } from "./chunk-HLWAVYOI-153ff896.js";
import { T as TokensGrid } from "./TokensGrid-8ba9d43b.js";
import { s as space } from "./index-b93d7799.js";
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
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
function _createMdxContent(props) {
  const _components = Object.assign({
    h1: "h1",
    p: "p"
  }, useMDXComponents(), props.components);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Space"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.h1, {
      id: "space",
      children: "Space"
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(_components.p, {
      children: "Espaçamentos utilizadas na Koaris."
    }), "\n", /* @__PURE__ */ jsxRuntimeExports.jsx(Unstyled, {
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(TokensGrid, {
        tokens: space,
        hasRemValue: true
      })
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
  title: "Tokens/Space",
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
