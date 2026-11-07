import { j as jsxRuntimeExports } from "./jsx-runtime-x-ThabpI.js";
import { useMDXComponents } from "./index-DqOKBbry.js";
import "./index-Bpt9y46v.js";
import { T as TokensGrid } from "./TokensGrid-DxA7SEoN.js";
import { t as themeRadii, r as radii } from "./index-Ccng27VD.js";
import { M as Meta, U as Unstyled } from "./DocsRenderer-CFRXHY34-4R4vhMBw.js";
import "./index-hC87BHQs.js";
import "./_commonjsHelpers-CUmg6egw.js";
import "./preview-zYWWoQs3.js";
import "./iframe-BLCftX7p.js";
import "./index-DpAlniPV.js";
import "./index-D0dBaOty.js";
import "./index-DKJM7FmN.js";
import "./index-CzFfxzC7.js";
import "./react-18-CiQBUqTy.js";
function _createMdxContent(props) {
  const _components = {
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Tokens/Radii"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "radii",
      children: "Radii"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Arredondamento das bordas utilizadas na Koaris."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "theme",
      children: "Theme"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: [jsxRuntimeExports.jsx(_components.code, {
        children: "rounded"
      }), " uses ", jsxRuntimeExports.jsx(_components.code, {
        children: "--radius-sm"
      }), " (controls) and ", jsxRuntimeExports.jsx(_components.code, {
        children: "rounded-lg"
      }), " uses ", jsxRuntimeExports.jsx(_components.code, {
        children: "--radius"
      }), "\n(cards and frames). Nothing in the theme goes rounder than that."]
    }), "\n", jsxRuntimeExports.jsx(Unstyled, {
      children: jsxRuntimeExports.jsx(TokensGrid, {
        tokens: themeRadii
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "scale",
      children: "Scale"
    }), "\n", jsxRuntimeExports.jsx(Unstyled, {
      children: jsxRuntimeExports.jsx(TokensGrid, {
        tokens: radii
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
