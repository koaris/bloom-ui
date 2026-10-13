import { j as jsxRuntimeExports } from "./jsx-runtime-x-ThabpI.js";
import { useMDXComponents } from "./index-DqOKBbry.js";
import "./index-DGwFWfW4.js";
import { M as Meta } from "./DocsRenderer-CFRXHY34-BBRKt7jg.js";
import "./index-hC87BHQs.js";
import "./_commonjsHelpers-CUmg6egw.js";
import "./preview-RZ8XvDBX.js";
import "./iframe-DbgFXHWz.js";
import "./index-DpAlniPV.js";
import "./index-D0dBaOty.js";
import "./index-DKJM7FmN.js";
import "./index-CzFfxzC7.js";
import "./react-18-CiQBUqTy.js";
function _createMdxContent(props) {
  const _components = {
    a: "a",
    code: "code",
    h1: "h1",
    h2: "h2",
    p: "p",
    pre: "pre",
    strong: "strong",
    ...useMDXComponents(),
    ...props.components
  };
  return jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [jsxRuntimeExports.jsx(Meta, {
      title: "Home"
    }), "\n", jsxRuntimeExports.jsx(_components.h1, {
      id: "bloom-ui",
      children: "Bloom-ui"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["Bloom-ui is a public design system from the Koaris Project developed with ", jsxRuntimeExports.jsx(_components.strong, {
        children: "React"
      }), ", ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Typescript"
      }), ", and ", jsxRuntimeExports.jsx(_components.strong, {
        children: "Tailwindcss"
      }), "."]
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "motivation",
      children: "Motivation"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Bloom-ui is a design system developed exclusively for the Koaris project with the aim of unifying the interfaces and simplifying the construction of new React projects."
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "installation",
      children: "Installation"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Install the following package:"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-bash",
        children: "npm i @koaris/bloom-ui\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "usage",
      children: "Usage"
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "This design system is built with Tailwind, and you can import it into your project as follows:\nIn your CSS file:"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-css",
        children: '@import "@koaris/bloom-ui/tailwind.css";\n'
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Or in your JavaScript file:"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-js",
        children: "import '@koaris/bloom-ui/tailwind.css'\n"
      })
    }), "\n", jsxRuntimeExports.jsx(_components.p, {
      children: "Components usage:"
    }), "\n", jsxRuntimeExports.jsx(_components.pre, {
      children: jsxRuntimeExports.jsx(_components.code, {
        className: "language-tsx",
        children: `import { Text } from '@koaris/bloom-ui'

<Text tag="p">Test</Text>
`
      })
    }), "\n", jsxRuntimeExports.jsx(_components.h2, {
      id: "contributions-and-bug-reports",
      children: "Contributions and bug reports"
    }), "\n", jsxRuntimeExports.jsxs(_components.p, {
      children: ["You can follow and make contributions in ", jsxRuntimeExports.jsx(_components.a, {
        href: "https://github.com/koaris/bloom-ui",
        rel: "nofollow",
        children: "github"
      }), "."]
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
