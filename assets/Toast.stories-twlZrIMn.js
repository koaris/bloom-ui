var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G;
import { j as jsxRuntimeExports } from "./jsx-runtime-x-ThabpI.js";
import { r as reactExports } from "./index-hC87BHQs.js";
import { m as Toast, n as ToastProvider, e as Button, u as useToast } from "./index-DPkWKMkH.js";
import "./_commonjsHelpers-CUmg6egw.js";
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
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "p-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
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
const AllVariants = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toast, { id: "toast-success", variant: "success", title: "Changes saved", message: "Your profile has been updated successfully.", duration: 0 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toast, { id: "toast-info", variant: "info", title: "New version available", message: "Refresh the page to get the latest features.", duration: 0 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toast, { id: "toast-warning", variant: "warning", title: "Storage almost full", message: "You have used 90% of your available space.", duration: 0 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toast, { id: "toast-error", variant: "error", title: "Upload failed", message: "The file is too large. Try one under 10 MB.", duration: 0 }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toast, { id: "toast-plain", variant: "success", message: "Link copied to clipboard", duration: 0 })
  ] })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap gap-2", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", onClick: () => handleShowToast("info"), children: "Show Info Toast" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", onClick: () => handleShowToast("success"), children: "Show Success Toast" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", onClick: () => handleShowToast("warning"), children: "Show Warning Toast" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", size: "sm", onClick: () => handleShowToast("error"), children: "Show Error Toast" })
  ] }) });
};
const ToastManager = {
  render: () => /* @__PURE__ */ jsxRuntimeExports.jsx(ToastProvider, { position: "top-right", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ToastDemo, {}) })
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
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-4", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("label", { className: "block text-sm font-medium mb-2", children: "Toast Position:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("select", { className: "border border-gray-300 rounded-md p-2", value: position, onChange: (e) => setPosition(e.target.value), children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "top-right", children: "Top Right" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "top-left", children: "Top Left" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bottom-right", children: "Bottom Right" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bottom-left", children: "Bottom Left" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "top-center", children: "Top Center" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "bottom-center", children: "Bottom Center" })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { variant: "primary", onClick: handleShowToast, children: "Show Toast" })
  ] });
};
const ToastPositions = {
  render: () => {
    const [position, setPosition] = reactExports.useState("top-right");
    return /* @__PURE__ */ jsxRuntimeExports.jsx(ToastProvider, { position, children: /* @__PURE__ */ jsxRuntimeExports.jsx(PositionDemo, {}) });
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
AllVariants.parameters = {
  ...AllVariants.parameters,
  docs: {
    ...(_p = AllVariants.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  render: () => <div className="flex flex-col gap-3">\n            <Toast id="toast-success" variant="success" title="Changes saved" message="Your profile has been updated successfully." duration={0} />\n            <Toast id="toast-info" variant="info" title="New version available" message="Refresh the page to get the latest features." duration={0} />\n            <Toast id="toast-warning" variant="warning" title="Storage almost full" message="You have used 90% of your available space." duration={0} />\n            <Toast id="toast-error" variant="error" title="Upload failed" message="The file is too large. Try one under 10 MB." duration={0} />\n            <Toast id="toast-plain" variant="success" message="Link copied to clipboard" duration={0} />\n        </div>\n}',
      ...(_r = (_q = AllVariants.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
LongDuration.parameters = {
  ...LongDuration.parameters,
  docs: {
    ...(_s = LongDuration.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  args: {\n    message: 'This toast will stay for 10 seconds',\n    duration: 10000\n  }\n}",
      ...(_u = (_t = LongDuration.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
NoDismiss.parameters = {
  ...NoDismiss.parameters,
  docs: {
    ...(_v = NoDismiss.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  args: {\n    message: 'This toast will not auto-dismiss',\n    duration: 0\n  }\n}",
      ...(_x = (_w = NoDismiss.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
NoCloseButton.parameters = {
  ...NoCloseButton.parameters,
  docs: {
    ...(_y = NoCloseButton.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  args: {\n    message: 'This toast does not have a close button',\n    showCloseButton: false\n  }\n}",
      ...(_A = (_z = NoCloseButton.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
ToastManager.parameters = {
  ...ToastManager.parameters,
  docs: {
    ...(_B = ToastManager.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: '{\n  render: () => <ToastProvider position="top-right">\n            <ToastDemo />\n        </ToastProvider>\n}',
      ...(_D = (_C = ToastManager.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
ToastPositions.parameters = {
  ...ToastPositions.parameters,
  docs: {
    ...(_E = ToastPositions.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  render: () => {\n    const [position, setPosition] = useState<'top-right' | 'top-left' | 'bottom-right' | 'bottom-left' | 'top-center' | 'bottom-center'>('top-right');\n    return <ToastProvider position={position}>\n                <PositionDemo />\n            </ToastProvider>;\n  }\n}",
      ...(_G = (_F = ToastPositions.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
const __namedExportsOrder = ["Info", "Success", "Warning", "Error", "WithTitle", "AllVariants", "LongDuration", "NoDismiss", "NoCloseButton", "ToastManager", "ToastPositions"];
export {
  AllVariants,
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
