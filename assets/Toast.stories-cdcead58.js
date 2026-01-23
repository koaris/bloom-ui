var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { r as reactExports } from "./index-f6b91e15.js";
import { f as Toast, g as ToastProvider, a as Button, u as useToast } from "./index-d1862f76.js";
import "./_commonjsHelpers-ca272635.js";
const Toast_stories = {
  title: "Feedback/Toast",
  component: Toast,
  tags: ["autodocs"],
  args: {
    id: "toast-1",
    message: "This is a toast notification",
    title: "Notification",
    variant: "info",
    duration: 5e3,
    showCloseButton: true
  },
  argTypes: {
    id: {
      control: "text",
      description: "Unique identifier for the toast"
    },
    message: {
      control: "text",
      description: "Content message of the toast"
    },
    title: {
      control: "text",
      description: "Optional title for the toast"
    },
    variant: {
      options: ["success", "error", "warning", "info"],
      control: {
        type: "select"
      },
      description: "Visual style variant of the toast"
    },
    duration: {
      control: "number",
      description: "Duration in milliseconds before auto-dismiss (0 for no auto-dismiss)"
    },
    showCloseButton: {
      control: "boolean",
      description: "Whether to show the close button"
    },
    onDismiss: {
      action: "dismissed"
    }
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "p-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {})
  })]
};
const Info = {
  args: {
    variant: "info",
    message: "This is an informational message"
  }
};
const Success = {
  args: {
    variant: "success",
    message: "Operation completed successfully"
  }
};
const Warning = {
  args: {
    variant: "warning",
    message: "This action might cause issues"
  }
};
const Error = {
  args: {
    variant: "error",
    message: "An error occurred during the operation"
  }
};
const WithTitle = {
  args: {
    title: "Profile Updated",
    message: "Your profile has been successfully updated.",
    variant: "success"
  }
};
const LongDuration = {
  args: {
    message: "This toast will stay for 10 seconds",
    duration: 1e4
  }
};
const NoDismiss = {
  args: {
    message: "This toast will not auto-dismiss",
    duration: 0
  }
};
const NoCloseButton = {
  args: {
    message: "This toast does not have a close button",
    showCloseButton: false
  }
};
const ToastDemo = () => {
  const {
    showToast
  } = useToast();
  const handleShowToast = (variant) => {
    const messages = {
      success: "Operation completed successfully!",
      error: "An error occurred. Please try again.",
      warning: "Warning: This action cannot be undone.",
      info: "Here is some information you might find useful."
    };
    const titles = {
      success: "Success",
      error: "Error",
      warning: "Warning",
      info: "Information"
    };
    showToast({
      title: titles[variant || "info"],
      message: messages[variant || "info"],
      variant,
      duration: 3e3
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", {
    className: "space-y-4",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex flex-wrap gap-2",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        variant: "primary",
        size: "sm",
        onClick: () => handleShowToast("info"),
        children: "Show Info Toast"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        variant: "primary",
        size: "sm",
        onClick: () => handleShowToast("success"),
        children: "Show Success Toast"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        variant: "primary",
        size: "sm",
        onClick: () => handleShowToast("warning"),
        children: "Show Warning Toast"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        variant: "primary",
        size: "sm",
        onClick: () => handleShowToast("error"),
        children: "Show Error Toast"
      })]
    })
  });
};
const ToastManager = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(ToastProvider, {
    position: "top-right",
    children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToastDemo, {})
  })
};
const PositionDemo = () => {
  const [position, setPosition] = reactExports.useState("top-right");
  const {
    showToast
  } = useToast();
  const handleShowToast = () => {
    showToast({
      title: `Toast - ${position}`,
      message: `This toast appears in the ${position} position`,
      variant: "info",
      duration: 3e3
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
    className: "space-y-4",
    children: [/* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "mb-4",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx("label", {
        className: "block text-sm font-medium mb-2",
        children: "Toast Position:"
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("select", {
        className: "border border-gray-300 rounded-md p-2",
        value: position,
        onChange: (e) => setPosition(e.target.value),
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: "top-right",
          children: "Top Right"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: "top-left",
          children: "Top Left"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: "bottom-right",
          children: "Bottom Right"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: "bottom-left",
          children: "Bottom Left"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: "top-center",
          children: "Top Center"
        }), /* @__PURE__ */ jsxRuntimeExports.jsx("option", {
          value: "bottom-center",
          children: "Bottom Center"
        })]
      })]
    }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
      variant: "primary",
      onClick: handleShowToast,
      children: "Show Toast"
    })]
  });
};
const ToastPositions = {
  render: () => {
    const [position, setPosition] = reactExports.useState("top-right");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastProvider, {
      position,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(PositionDemo, {})
    });
  }
};
Info.parameters = {
  ...Info.parameters,
  docs: {
    ...(_a = Info.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'info',\n    message: 'This is an informational message'\n  }\n}",
      ...(_c = (_b = Info.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Success.parameters = {
  ...Success.parameters,
  docs: {
    ...(_d = Success.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'success',\n    message: 'Operation completed successfully'\n  }\n}",
      ...(_f = (_e = Success.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Warning.parameters = {
  ...Warning.parameters,
  docs: {
    ...(_g = Warning.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'warning',\n    message: 'This action might cause issues'\n  }\n}",
      ...(_i = (_h = Warning.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...(_j = Error.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    variant: 'error',\n    message: 'An error occurred during the operation'\n  }\n}",
      ...(_l = (_k = Error.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
WithTitle.parameters = {
  ...WithTitle.parameters,
  docs: {
    ...(_m = WithTitle.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    title: 'Profile Updated',\n    message: 'Your profile has been successfully updated.',\n    variant: 'success'\n  }\n}",
      ...(_o = (_n = WithTitle.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
LongDuration.parameters = {
  ...LongDuration.parameters,
  docs: {
    ...(_p = LongDuration.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    message: 'This toast will stay for 10 seconds',\n    duration: 10000\n  }\n}",
      ...(_r = (_q = LongDuration.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
NoDismiss.parameters = {
  ...NoDismiss.parameters,
  docs: {
    ...(_s = NoDismiss.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  args: {\n    message: 'This toast will not auto-dismiss',\n    duration: 0\n  }\n}",
      ...(_u = (_t = NoDismiss.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
NoCloseButton.parameters = {
  ...NoCloseButton.parameters,
  docs: {
    ...(_v = NoCloseButton.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  args: {\n    message: 'This toast does not have a close button',\n    showCloseButton: false\n  }\n}",
      ...(_x = (_w = NoCloseButton.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
ToastManager.parameters = {
  ...ToastManager.parameters,
  docs: {
    ...(_y = ToastManager.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: '{\n  render: () => <ToastProvider position="top-right">\n            <ToastDemo />\n        </ToastProvider>\n}',
      ...(_A = (_z = ToastManager.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
ToastPositions.parameters = {
  ...ToastPositions.parameters,
  docs: {
    ...(_B = ToastPositions.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  render: () => {\n    const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');\n    return <ToastProvider position={position}>\n                <PositionDemo />\n            </ToastProvider>;\n  }\n}",
      ...(_D = (_C = ToastPositions.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
const __namedExportsOrder = ["Info", "Success", "Warning", "Error", "WithTitle", "LongDuration", "NoDismiss", "NoCloseButton", "ToastManager", "ToastPositions"];
export {
  Error,
  Info,
  LongDuration,
  NoCloseButton,
  NoDismiss,
  Success,
  ToastManager,
  ToastPositions,
  Warning,
  WithTitle,
  __namedExportsOrder,
  Toast_stories as default
};
