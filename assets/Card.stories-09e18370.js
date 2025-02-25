var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { d as Card } from "./index-5f8583db.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const image = "/bloom-ui/assets/koaris_gestao-197f139e.svg";
const Card_stories = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  args: {
    title: "Gestão online",
    content: "Otimize seus processos",
    image,
    disabled: false,
    selected: true,
    direction: "col",
    imageSize: "184px"
  },
  argTypes: {
    image: {
      control: {
        type: "file"
      }
    },
    selected: {
      control: {
        type: "boolean"
      }
    },
    disabled: {
      control: {
        type: "boolean"
      }
    },
    direction: {
      options: ["col", "row"],
      control: {
        type: "inline-radio"
      }
    },
    size: {
      options: ["medium", "large"],
      control: {
        type: "inline-radio"
      }
    },
    onClick: {
      action: "click"
    }
  }
};
const Default = {
  args: {
    direction: "col",
    size: "medium"
  }
};
const Large = {
  args: {
    direction: "row",
    size: "large"
  }
};
const Disabled = {
  args: {
    direction: "row",
    size: "large",
    disabled: true
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'col',\n    size: 'medium'\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...(_d = Large.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'row',\n    size: 'large'\n  }\n}",
      ...(_f = (_e = Large.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_g = Disabled.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'row',\n    size: 'large',\n    disabled: true\n  }\n}",
      ...(_i = (_h = Disabled.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Default", "Large", "Disabled"];
export {
  Default,
  Disabled,
  Large,
  __namedExportsOrder,
  Card_stories as default
};
