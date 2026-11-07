var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { j as jsxRuntimeExports } from "./jsx-runtime-x-ThabpI.js";
import { c as Field } from "./index-DPkWKMkH.js";
import "./index-hC87BHQs.js";
import "./_commonjsHelpers-CUmg6egw.js";
const Field_stories = {
  title: "Form/Field",
  component: Field,
  tags: ["autodocs"],
  parameters: {
    docs: {
      description: {
        component: "Labelled input or textarea in a sunken well. `hint` and `error` are wired to `aria-describedby`; `mono` is for code and data."
      }
    }
  },
  args: {
    label: "Name",
    placeholder: "Your name",
    hint: "As it should appear on the invoice."
  },
  decorators: [(Story) => /* @__PURE__ */ jsxRuntimeExports.jsx("div", { style: {
    maxWidth: 420,
    padding: 16
  }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(Story, {}) })]
};
const Default = {};
const WithError = {
  args: {
    label: "Email",
    defaultValue: "not-an-email",
    error: "That email doesn't look right."
  }
};
const MonoTextarea = {
  args: {
    as: "textarea",
    label: "Input",
    mono: true,
    rows: 6,
    hint: void 0,
    defaultValue: '{\n  "hello": "world"\n}'
  }
};
const Disabled = {
  args: {
    disabled: true,
    defaultValue: "Read only"
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
WithError.parameters = {
  ...WithError.parameters,
  docs: {
    ...(_d = WithError.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  args: {
    label: 'Email',
    defaultValue: 'not-an-email',
    error: "That email doesn't look right."
  }
}`,
      ...(_f = (_e = WithError.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
MonoTextarea.parameters = {
  ...MonoTextarea.parameters,
  docs: {
    ...(_g = MonoTextarea.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: `{
  args: {
    as: 'textarea',
    label: 'Input',
    mono: true,
    rows: 6,
    hint: undefined,
    defaultValue: '{\\n  "hello": "world"\\n}'
  }
}`,
      ...(_i = (_h = MonoTextarea.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_j = Disabled.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true,\n    defaultValue: 'Read only'\n  }\n}",
      ...(_l = (_k = Disabled.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Default", "WithError", "MonoTextarea", "Disabled"];
export {
  Default,
  Disabled,
  MonoTextarea,
  WithError,
  __namedExportsOrder,
  Field_stories as default
};
