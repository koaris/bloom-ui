var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { r as reactExports } from "./index-f6b91e15.js";
import { M as Modal } from "./index-d1862f76.js";
import "./_commonjsHelpers-ca272635.js";
const ModalWrapper = ({
  initialOpen = false,
  title = "Modal Title",
  size = "md",
  showCloseButton = true,
  closeOnOutsideClick = true,
  closeOnEsc = true,
  footer,
  children = "Modal content goes here."
}) => {
  const [isOpen, setIsOpen] = reactExports.useState(initialOpen);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx("button", {
      type: "button",
      onClick: () => setIsOpen(true),
      className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2",
      children: "Open Modal"
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Modal, {
      isOpen,
      onClose: () => setIsOpen(false),
      title,
      size,
      showCloseButton,
      closeOnOutsideClick,
      closeOnEsc,
      footer,
      children
    })]
  });
};
const meta = {
  title: "Components/Modal",
  component: ModalWrapper,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "A customizable modal dialog component that can be used to display content in a layer above the page."
      }
    },
    controls: {
      sort: "requiredFirst"
    }
  },
  argTypes: {
    initialOpen: {
      control: "boolean",
      description: "Whether the modal is initially open",
      defaultValue: false
    },
    title: {
      control: "text",
      description: "Title text for the modal header"
    },
    size: {
      control: "select",
      options: ["sm", "md", "lg", "xl"],
      description: "Size of the modal dialog",
      defaultValue: "md"
    },
    showCloseButton: {
      control: "boolean",
      description: "Whether to show the close button in the header",
      defaultValue: true
    },
    closeOnOutsideClick: {
      control: "boolean",
      description: "Whether to close the modal when clicking outside of it",
      defaultValue: true
    },
    closeOnEsc: {
      control: "boolean",
      description: "Whether to close the modal when pressing the Escape key",
      defaultValue: true
    },
    children: {
      control: "text",
      description: "Content to be displayed inside the modal"
    },
    footer: {
      control: null,
      description: "Optional footer content for the modal"
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "p-6",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})
  })]
};
const Default = {
  args: {
    title: "Default Modal",
    children: "This is a basic modal with default settings."
  }
};
const Sizes = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "flex flex-wrap gap-4",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsx(ModalWrapper, {
      size: "sm",
      title: "Small Modal",
      children: "This is a small modal dialog."
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(ModalWrapper, {
      size: "md",
      title: "Medium Modal (default)",
      children: "This is a medium modal dialog."
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(ModalWrapper, {
      size: "lg",
      title: "Large Modal",
      children: "This is a large modal dialog."
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(ModalWrapper, {
      size: "xl",
      title: "Extra Large Modal",
      children: "This is an extra large modal dialog."
    })]
  })
};
const NoHeader = {
  args: {
    title: void 0,
    showCloseButton: false,
    children: "A modal with no header or close button."
  }
};
const WithFooter = {
  args: {
    title: "Modal with Footer",
    children: "This modal has a custom footer with action buttons.",
    footer: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex justify-end gap-2",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        type: "button",
        className: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200",
        children: "Cancel"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        type: "button",
        className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
        children: "Confirm"
      })]
    })
  }
};
const LongContent = {
  args: {
    title: "Terms and Conditions",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "space-y-4",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit."
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum."
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor."
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla."
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam."
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et."
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("p", {
        children: "Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit."
      })]
    })
  }
};
const FormModal = {
  args: {
    title: "Edit Profile",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("form", {
      className: "space-y-4",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
          htmlFor: "name",
          className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
          children: "Name"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
          type: "text",
          id: "name",
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
          defaultValue: "John Doe"
        })]
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
          htmlFor: "email",
          className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
          children: "Email"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("input", {
          type: "email",
          id: "email",
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
          defaultValue: "john@example.com"
        })]
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
          htmlFor: "bio",
          className: "block text-sm font-medium text-gray-700 dark:text-gray-300",
          children: "Bio"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("textarea", {
          id: "bio",
          rows: 3,
          className: "mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500",
          defaultValue: "Product designer at Acme Inc."
        })]
      })]
    }),
    footer: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex justify-end gap-2",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        type: "button",
        className: "px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200",
        children: "Cancel"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx("button", {
        type: "button",
        className: "px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700",
        children: "Save Changes"
      })]
    })
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Default Modal',\n    children: 'This is a basic modal with default settings.'\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Sizes.parameters = {
  ...Sizes.parameters,
  docs: {
    ...(_d = Sizes.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  render: () => <div className="flex flex-wrap gap-4">\n            <ModalWrapper size="sm" title="Small Modal" children="This is a small modal dialog." />\n            <ModalWrapper size="md" title="Medium Modal (default)" children="This is a medium modal dialog." />\n            <ModalWrapper size="lg" title="Large Modal" children="This is a large modal dialog." />\n            <ModalWrapper size="xl" title="Extra Large Modal" children="This is an extra large modal dialog." />\n        </div>\n}',
      ...(_f = (_e = Sizes.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
NoHeader.parameters = {
  ...NoHeader.parameters,
  docs: {
    ...(_g = NoHeader.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    title: undefined,\n    showCloseButton: false,\n    children: 'A modal with no header or close button.'\n  }\n}",
      ...(_i = (_h = NoHeader.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
WithFooter.parameters = {
  ...WithFooter.parameters,
  docs: {
    ...(_j = WithFooter.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: `{
  args: {
    title: 'Modal with Footer',
    children: 'This modal has a custom footer with action buttons.',
    footer: <div className="flex justify-end gap-2">
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                    Cancel
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Confirm
                </button>
            </div>
  }
}`,
      ...(_l = (_k = WithFooter.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
LongContent.parameters = {
  ...LongContent.parameters,
  docs: {
    ...(_m = LongContent.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: `{
  args: {
    title: 'Terms and Conditions',
    children: <div className="space-y-4">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
                <p>Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Cras mattis consectetur purus sit amet fermentum.</p>
                <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur et. Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor.</p>
                <p>Aenean lacinia bibendum nulla sed consectetur. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                <p>Donec sed odio dui. Donec ullamcorper nulla non metus auctor fringilla.</p>
                <p>Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam.</p>
                <p>Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Praesent commodo cursus magna, vel scelerisque nisl consectetur et.</p>
                <p>Nullam quis risus eget urna mollis ornare vel eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.</p>
            </div>
  }
}`,
      ...(_o = (_n = LongContent.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
FormModal.parameters = {
  ...FormModal.parameters,
  docs: {
    ...(_p = FormModal.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: `{
  args: {
    title: 'Edit Profile',
    children: <form className="space-y-4">
                <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Name
                    </label>
                    <input type="text" id="name" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue="John Doe" />
                </div>
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Email
                    </label>
                    <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue="john@example.com" />
                </div>
                <div>
                    <label htmlFor="bio" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
                        Bio
                    </label>
                    <textarea id="bio" rows={3} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500" defaultValue="Product designer at Acme Inc." />
                </div>
            </form>,
    footer: <div className="flex justify-end gap-2">
                <button type="button" className="px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 rounded-md hover:bg-gray-200">
                    Cancel
                </button>
                <button type="button" className="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700">
                    Save Changes
                </button>
            </div>
  }
}`,
      ...(_r = (_q = FormModal.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
const __namedExportsOrder = ["Default", "Sizes", "NoHeader", "WithFooter", "LongContent", "FormModal"];
export {
  Default,
  FormModal,
  LongContent,
  NoHeader,
  Sizes,
  WithFooter,
  __namedExportsOrder,
  meta as default
};
