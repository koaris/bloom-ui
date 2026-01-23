var _a, _b, _c, _d, _e, _f, _g, _h, _i;
import { T as Text } from "./index-d1862f76.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const meta = {
  title: "Components/Typography/Text",
  component: Text,
  tags: ["autodocs"],
  args: {
    children: "Sample Text",
    size: "md",
    tag: "p",
    weight: "normal",
    leading: "normal",
    alignment: "left",
    truncate: false,
    italic: false,
    uppercase: false,
    lowercase: false,
    capitalize: false
  },
  argTypes: {
    children: {
      control: "text",
      description: "Text content to be displayed"
    },
    color: {
      options: ["primary", "secondary", "accent", "neutral", "success", "warning", "error", "info"],
      control: {
        type: "select"
      },
      description: "Color theme of the text"
    },
    size: {
      options: ["xxs", "xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "7xl", "8xl", "9xl"],
      control: {
        type: "select"
      },
      description: "Size of the text (xxs falls back to xs)"
    },
    tag: {
      options: ["p", "span", "label", "strong", "em", "small", "div"],
      control: {
        type: "select"
      },
      description: "HTML tag to be used for the text element"
    },
    weight: {
      options: ["thin", "extralight", "light", "normal", "medium", "semibold", "bold", "extrabold", "black"],
      control: {
        type: "select"
      },
      description: "Font weight of the text"
    },
    leading: {
      options: ["none", "tight", "snug", "normal", "relaxed", "loose"],
      control: {
        type: "select"
      },
      description: "Line height (leading) of the text"
    },
    alignment: {
      options: ["left", "center", "right", "justify"],
      control: {
        type: "select"
      },
      description: "Text alignment"
    },
    truncate: {
      control: "boolean",
      description: "Whether to truncate text with ellipsis when overflowing"
    },
    italic: {
      control: "boolean",
      description: "Whether to display text in italic style"
    },
    uppercase: {
      control: "boolean",
      description: "Whether to transform text to uppercase"
    },
    lowercase: {
      control: "boolean",
      description: "Whether to transform text to lowercase"
    },
    capitalize: {
      control: "boolean",
      description: "Whether to capitalize the first letter of each word"
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply"
    },
    htmlFor: {
      control: "text",
      description: "For label elements, specifies which form element it is bound to"
    }
  }
};
const Default = {
  args: {
    children: "Default text styling with neutral color and normal weight"
  }
};
const Playground = {
  args: {}
};
const InteractiveDemo = {
  args: {
    children: "Edit me in Controls panel →",
    truncate: false,
    italic: false,
    uppercase: false,
    lowercase: false,
    capitalize: false,
    className: ""
  },
  parameters: {
    controls: {
      expanded: true
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Default text styling with neutral color and normal weight'\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
Playground.parameters = {
  ...Playground.parameters,
  docs: {
    ...(_d = Playground.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {}\n}",
      ...(_f = (_e = Playground.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
InteractiveDemo.parameters = {
  ...InteractiveDemo.parameters,
  docs: {
    ...(_g = InteractiveDemo.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    children: 'Edit me in Controls panel →',\n    truncate: false,\n    italic: false,\n    uppercase: false,\n    lowercase: false,\n    capitalize: false,\n    className: ''\n  },\n  parameters: {\n    controls: {\n      expanded: true\n    }\n  }\n}",
      ...(_i = (_h = InteractiveDemo.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
const __namedExportsOrder = ["Default", "Playground", "InteractiveDemo"];
export {
  Default,
  InteractiveDemo,
  Playground,
  __namedExportsOrder,
  meta as default
};
