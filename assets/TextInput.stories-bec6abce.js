var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l;
import { b as TextInput } from "./index-5f8583db.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const TextInput_stories = {
  title: "Form/TextInput",
  component: TextInput,
  tags: ["autodocs"],
  args: {
    value: "",
    type: "text",
    prefix: "koaris.com.br/appointment/",
    placeholder: "seu-user"
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean"
      }
    },
    error: {
      control: {
        type: "boolean"
      }
    },
    onClick: {
      action: "click"
    }
  }
};
const Primary = {};
const secondary = {
  args: {
    variant: "secondary"
  }
};
const Error = {
  args: {
    error: true
  }
};
const Disabled = {
  args: {
    disabled: true
  }
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
secondary.parameters = {
  ...secondary.parameters,
  docs: {
    ...(_d = secondary.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    variant: "secondary"\n  }\n}',
      ...(_f = (_e = secondary.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...(_g = Error.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    error: true\n  }\n}",
      ...(_i = (_h = Error.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_j = Disabled.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...(_l = (_k = Disabled.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
const __namedExportsOrder = ["Primary", "secondary", "Error", "Disabled"];
export {
  Disabled,
  Error,
  Primary,
  __namedExportsOrder,
  TextInput_stories as default,
  secondary
};
