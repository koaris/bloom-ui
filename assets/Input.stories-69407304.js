var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A;
import { I as Input } from "./index-5f8583db.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Input_stories = {
  title: "Form/Input",
  component: Input,
  tags: ["autodocs"],
  args: {
    value: "",
    placeholder: "Placeholder",
    type: "text"
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
const Default = {};
const CNPJ = {
  args: {
    type: "cnpj"
  }
};
const CPF = {
  args: {
    type: "cpf"
  }
};
const CEP = {
  args: {
    type: "cep"
  }
};
const Date = {
  args: {
    type: "date"
  }
};
const Phone = {
  args: {
    type: "phone"
  }
};
const Password = {
  args: {
    type: "password"
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
CNPJ.parameters = {
  ...CNPJ.parameters,
  docs: {
    ...(_d = CNPJ.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: '{\n  args: {\n    type: "cnpj"\n  }\n}',
      ...(_f = (_e = CNPJ.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
CPF.parameters = {
  ...CPF.parameters,
  docs: {
    ...(_g = CPF.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: '{\n  args: {\n    type: "cpf"\n  }\n}',
      ...(_i = (_h = CPF.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
CEP.parameters = {
  ...CEP.parameters,
  docs: {
    ...(_j = CEP.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: '{\n  args: {\n    type: "cep"\n  }\n}',
      ...(_l = (_k = CEP.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
Date.parameters = {
  ...Date.parameters,
  docs: {
    ...(_m = Date.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: '{\n  args: {\n    type: "date"\n  }\n}',
      ...(_o = (_n = Date.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Phone.parameters = {
  ...Phone.parameters,
  docs: {
    ...(_p = Phone.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: '{\n  args: {\n    type: "phone"\n  }\n}',
      ...(_r = (_q = Phone.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Password.parameters = {
  ...Password.parameters,
  docs: {
    ...(_s = Password.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: '{\n  args: {\n    type: "password"\n  }\n}',
      ...(_u = (_t = Password.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Error.parameters = {
  ...Error.parameters,
  docs: {
    ...(_v = Error.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  args: {\n    error: true\n  }\n}",
      ...(_x = (_w = Error.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_y = Disabled.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  args: {\n    disabled: true\n  }\n}",
      ...(_A = (_z = Disabled.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
const __namedExportsOrder = ["Default", "CNPJ", "CPF", "CEP", "Date", "Phone", "Password", "Error", "Disabled"];
export {
  CEP,
  CNPJ,
  CPF,
  Date,
  Default,
  Disabled,
  Error,
  Password,
  Phone,
  __namedExportsOrder,
  Input_stories as default
};
