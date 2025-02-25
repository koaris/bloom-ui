var _a, _b, _c, _d, _e, _f;
import { R as RadioGroup } from "./index-5f8583db.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const RadioGroup_stories = {
  title: "Form/RadioGroup",
  component: RadioGroup,
  tags: ["autodocs"],
  args: {
    disabled: false,
    required: true,
    options: [{
      id: 1,
      label: "Option 1",
      value: "1"
    }, {
      id: 2,
      label: "Option 2",
      value: "2"
    }, {
      id: 3,
      label: "Option 3",
      value: "3"
    }]
  },
  argTypes: {
    disabled: {
      control: {
        type: "boolean"
      }
    },
    required: {
      control: {
        type: "boolean"
      }
    },
    options: {
      control: {
        type: "object"
      }
    },
    onClick: {
      action: "click"
    }
  }
};
const Default = {};
const Disabled = {
  args: {
    disabled: true
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
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_d = Disabled.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...(_f = (_e = Disabled.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Default", "Disabled"];
export {
  Default,
  Disabled,
  __namedExportsOrder,
  RadioGroup_stories as default
};
