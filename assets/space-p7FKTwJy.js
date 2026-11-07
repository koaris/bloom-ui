import { j as jsxRuntimeExports } from "./jsx-runtime-x-ThabpI.js";
import { useMDXComponents } from "./index-DqOKBbry.js";
import "./index-BsW3-HD5.js";
import { T as TokensGrid } from "./TokensGrid-DxA7SEoN.js";
import { s as space } from "./index-Ccng27VD.js";
import { M as Meta, U as Unstyled } from "./DocsRenderer-CFRXHY34-CcEr8t_K.js";
import "./index-hC87BHQs.js";
import "./_commonjsHelpers-CUmg6egw.js";
import "./preview-DeVD_Jqn.js";
import "./iframe-j4P_Rs-r.js";
import "./index-DpAlniPV.js";
import "./index-D0dBaOty.js";
import "./index-DKJM7FmN.js";
import "./index-CzFfxzC7.js";
import "./react-18-CiQBUqTy.js";
function _createMdxContent(props) {
  const _components = {
    h1: "h1",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Space"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "space",
      children: "Space"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Espaçamentos utilizadas na Koaris."
    }), "\n", jsxRuntimeExports.jsx(Unstyled, {
      children: jsxRuntimeExports.jsx(TokensGrid, {
        tokens: space,
        hasRemValue: true
      })
    })]
  });
}
function MDXContent(props = {}) {
  const { wrapper: MDXLayout } = {
    ...useMDXComponents(),
    ...props.components
  };
  return MDXLayout ? jsxRuntimeExports.jsx(MDXLayout, {
    ...props,
    children: jsxRuntimeExports.jsx(_createMdxContent, {
      ...props
    })
  }) : _createMdxContent(props);
}
export {
  MDXContent as default
};
