var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G;
import { i as Card } from "./index-d1862f76.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const image = "/bloom-ui/assets/koaris_gestao-197f139e.svg";
const Card_stories = {
  title: "Components/Card",
  component: Card,
  tags: ["autodocs"],
  parameters: {
    layout: "centered",
    docs: {
      description: {
        component: "Card components are flexible containers that can display content, images, and actions in various layouts. They are commonly used for presenting information in a structured and visually appealing way."
      }
    }
  },
  args: {
    title: "Online Management",
    content: "Optimize your processes with our integrated online management solution. Monitor, analyze, and improve your results in real-time with our user-friendly platform.",
    image,
    disabled: false,
    selected: false,
    direction: "col",
    imageSize: "184px",
    size: "medium",
    hoverable: true
  },
  argTypes: {
    image: {
      control: {
        type: "file"
      },
      description: "The image source URL or path"
    },
    imageAlt: {
      control: "text",
      description: "Alternative text for the image for accessibility"
    },
    title: {
      control: "text",
      description: "Title text or ReactNode for the card"
    },
    content: {
      control: "text",
      description: "Main content text or ReactNode for the card"
    },
    selected: {
      control: "boolean",
      description: "Whether the card appears in a selected state"
    },
    disabled: {
      control: "boolean",
      description: "Whether the card is disabled and non-interactive"
    },
    direction: {
      options: ["row", "col"],
      control: "inline-radio",
      description: "Layout direction of the card content"
    },
    size: {
      options: ["small", "medium", "large", "full"],
      control: "inline-radio",
      description: "Size preset for the card"
    },
    imageSize: {
      control: "text",
      description: "Width of the image (CSS value like px, %, etc.)"
    },
    hoverable: {
      control: "boolean",
      description: "Whether the card shows hover effects"
    },
    onClick: {
      action: "clicked",
      description: "Function called when the card is clicked"
    },
    className: {
      control: "text",
      description: "Additional CSS classes to apply to the card"
    },
    footer: {
      control: null,
      description: "Optional footer content for the card"
    }
  }
};
const Default = {
  args: {
    direction: "col",
    size: "medium",
    title: "Online Management",
    content: "Optimize your processes with our integrated online management solution."
  },
  parameters: {
    docs: {
      description: {
        story: "The default card style with column layout and medium size."
      }
    }
  }
};
const WithFooter = {
  args: {
    direction: "col",
    size: "medium",
    title: "Online Management",
    content: "Optimize your processes with our integrated online management solution."
    /*footer: (
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Saiba mais</span>
        <FiArrowRight className="text-orange-500" />
      </div>
    ),*/
  },
  parameters: {
    docs: {
      description: {
        story: "Card with a custom footer that includes an action prompt and icon."
      }
    }
  }
};
const Small = {
  args: {
    direction: "row",
    size: "small",
    title: "Tip",
    content: "Quick tip to improve your productivity.",
    imageSize: "60px"
  },
  parameters: {
    docs: {
      description: {
        story: "A compact card suitable for tips or notifications."
      }
    }
  }
};
const Medium = {
  args: {
    direction: "col",
    size: "medium",
    title: "Online Management",
    content: "Optimize your processes with our integrated online management solution.",
    selected: false
  },
  parameters: {
    docs: {
      description: {
        story: "Medium-sized card with column layout, suitable for feature showcases."
      }
    }
  }
};
const Large = {
  args: {
    direction: "row",
    size: "large",
    title: "Online Management",
    content: "Optimize your processes with our integrated online management solution. Monitor, analyze, and improve your results in real-time with our user-friendly platform.",
    imageSize: "200px"
  },
  parameters: {
    docs: {
      description: {
        story: "Large card with row layout, ideal for detailed content or primary features."
      }
    }
  }
};
const FullWidth = {
  args: {
    direction: "row",
    size: "full",
    title: "Integrated Business Management",
    content: "Our solution provides a complete view of your business by integrating all departments into a single platform.",
    imageSize: "250px"
  },
  parameters: {
    docs: {
      description: {
        story: "Full-width card that spans the entire container width."
      }
    }
  }
};
const Selected = {
  args: {
    direction: "col",
    size: "medium",
    selected: true,
    title: "Selected Plan",
    content: "This is the currently selected plan with all features available."
  },
  parameters: {
    docs: {
      description: {
        story: "Card in selected state, highlighted with an orange border."
      }
    }
  }
};
const Disabled = {
  args: {
    direction: "row",
    size: "medium",
    disabled: true,
    title: "Unavailable Feature",
    content: "This feature is temporarily unavailable in your current plan."
  },
  parameters: {
    docs: {
      description: {
        story: "Disabled card that cannot be interacted with."
      }
    }
  }
};
const WithIcon = {
  args: {
    direction: "col",
    size: "medium",
    /*title: (
      <div className="flex items-center gap-2">
        <FiSettings className="text-orange-500" />
        <span>Advanced Settings</span>
      </div>
    ),*/
    content: "Customize your experience with our advanced management configuration options."
  },
  parameters: {
    docs: {
      description: {
        story: "Card with an icon in the title for visual emphasis."
      }
    }
  }
};
const FeatureCard = {
  args: {
    direction: "col",
    size: "medium",
    title: "Reports in real-time"
    /*content: (
      <div className="space-y-2">
        <p>Acesse relatórios detalhados instantaneamente:</p>
        <ul className="list-inside space-y-1">
          <li className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <span>Análise de vendas</span>
          </li>
          <li className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <span>Desempenho de equipe</span>
          </li>
          <li className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <span>Métricas financeiras</span>
          </li>
        </ul>
      </div>
    ),
    footer: (
      <button className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition-colors">
        Ativar recurso
      </button>
    ),*/
  },
  parameters: {
    docs: {
      description: {
        story: "Feature highlight card with structured content and a call-to-action button."
      }
    }
  }
};
const NonInteractive = {
  args: {
    direction: "col",
    size: "medium",
    hoverable: false,
    onClick: void 0,
    title: "System Message",
    content: "This is an informational system notification that requires no user interaction."
  },
  parameters: {
    docs: {
      description: {
        story: "Non-interactive card without hover effects, used for displaying information only."
      }
    }
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'col',\n    size: 'medium',\n    title: 'Online Management',\n    content: 'Optimize your processes with our integrated online management solution.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'The default card style with column layout and medium size.'\n      }\n    }\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
WithFooter.parameters = {
  ...WithFooter.parameters,
  docs: {
    ...(_d = WithFooter.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  args: {
    direction: 'col',
    size: 'medium',
    title: 'Online Management',
    content: 'Optimize your processes with our integrated online management solution.'
    /*footer: (
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Saiba mais</span>
        <FiArrowRight className="text-orange-500" />
      </div>
    ),*/
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with a custom footer that includes an action prompt and icon.'
      }
    }
  }
}`,
      ...(_f = (_e = WithFooter.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Small.parameters = {
  ...Small.parameters,
  docs: {
    ...(_g = Small.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'row',\n    size: 'small',\n    title: 'Tip',\n    content: 'Quick tip to improve your productivity.',\n    imageSize: '60px'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'A compact card suitable for tips or notifications.'\n      }\n    }\n  }\n}",
      ...(_i = (_h = Small.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
Medium.parameters = {
  ...Medium.parameters,
  docs: {
    ...(_j = Medium.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'col',\n    size: 'medium',\n    title: 'Online Management',\n    content: 'Optimize your processes with our integrated online management solution.',\n    selected: false\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Medium-sized card with column layout, suitable for feature showcases.'\n      }\n    }\n  }\n}",
      ...(_l = (_k = Medium.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Large.parameters = {
  ...Large.parameters,
  docs: {
    ...(_m = Large.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'row',\n    size: 'large',\n    title: 'Online Management',\n    content: 'Optimize your processes with our integrated online management solution. Monitor, analyze, and improve your results in real-time with our user-friendly platform.',\n    imageSize: '200px'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Large card with row layout, ideal for detailed content or primary features.'\n      }\n    }\n  }\n}",
      ...(_o = (_n = Large.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
FullWidth.parameters = {
  ...FullWidth.parameters,
  docs: {
    ...(_p = FullWidth.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'row',\n    size: 'full',\n    title: 'Integrated Business Management',\n    content: 'Our solution provides a complete view of your business by integrating all departments into a single platform.',\n    imageSize: '250px'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Full-width card that spans the entire container width.'\n      }\n    }\n  }\n}",
      ...(_r = (_q = FullWidth.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Selected.parameters = {
  ...Selected.parameters,
  docs: {
    ...(_s = Selected.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'col',\n    size: 'medium',\n    selected: true,\n    title: 'Selected Plan',\n    content: 'This is the currently selected plan with all features available.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Card in selected state, highlighted with an orange border.'\n      }\n    }\n  }\n}",
      ...(_u = (_t = Selected.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_v = Disabled.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'row',\n    size: 'medium',\n    disabled: true,\n    title: 'Unavailable Feature',\n    content: 'This feature is temporarily unavailable in your current plan.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Disabled card that cannot be interacted with.'\n      }\n    }\n  }\n}",
      ...(_x = (_w = Disabled.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
WithIcon.parameters = {
  ...WithIcon.parameters,
  docs: {
    ...(_y = WithIcon.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: `{
  args: {
    direction: 'col',
    size: 'medium',
    /*title: (
      <div className="flex items-center gap-2">
        <FiSettings className="text-orange-500" />
        <span>Advanced Settings</span>
      </div>
    ),*/
    content: 'Customize your experience with our advanced management configuration options.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Card with an icon in the title for visual emphasis.'
      }
    }
  }
}`,
      ...(_A = (_z = WithIcon.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
FeatureCard.parameters = {
  ...FeatureCard.parameters,
  docs: {
    ...(_B = FeatureCard.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: `{
  args: {
    direction: 'col',
    size: 'medium',
    title: 'Reports in real-time'
    /*content: (
      <div className="space-y-2">
        <p>Acesse relatórios detalhados instantaneamente:</p>
        <ul className="list-inside space-y-1">
          <li className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <span>Análise de vendas</span>
          </li>
          <li className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <span>Desempenho de equipe</span>
          </li>
          <li className="flex items-center">
            <FiCheckCircle className="text-green-500 mr-2" />
            <span>Métricas financeiras</span>
          </li>
        </ul>
      </div>
    ),
    footer: (
      <button className="bg-orange-500 text-white px-4 py-2 rounded w-full hover:bg-orange-600 transition-colors">
        Ativar recurso
      </button>
    ),*/
  },
  parameters: {
    docs: {
      description: {
        story: 'Feature highlight card with structured content and a call-to-action button.'
      }
    }
  }
}`,
      ...(_D = (_C = FeatureCard.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
NonInteractive.parameters = {
  ...NonInteractive.parameters,
  docs: {
    ...(_E = NonInteractive.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  args: {\n    direction: 'col',\n    size: 'medium',\n    hoverable: false,\n    onClick: undefined,\n    title: 'System Message',\n    content: 'This is an informational system notification that requires no user interaction.'\n  },\n  parameters: {\n    docs: {\n      description: {\n        story: 'Non-interactive card without hover effects, used for displaying information only.'\n      }\n    }\n  }\n}",
      ...(_G = (_F = NonInteractive.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
const __namedExportsOrder = ["Default", "WithFooter", "Small", "Medium", "Large", "FullWidth", "Selected", "Disabled", "WithIcon", "FeatureCard", "NonInteractive"];
export {
  Default,
  Disabled,
  FeatureCard,
  FullWidth,
  Large,
  Medium,
  NonInteractive,
  Selected,
  Small,
  WithFooter,
  WithIcon,
  __namedExportsOrder,
  Card_stories as default
};
