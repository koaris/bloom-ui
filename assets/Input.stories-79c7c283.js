var _a, _b, _c, _d, _e, _f, _g, _h, _i, _j, _k, _l, _m, _n, _o, _p, _q, _r, _s, _t, _u, _v, _w, _x, _y, _z, _A, _B, _C, _D, _E, _F, _G, _H, _I, _J, _K, _L, _M, _N, _O, _P, _Q, _R, _S, _T, _U, _V, _W, _X, _Y;
import { I as Input } from "./index-d1862f76.js";
import "./jsx-runtime-e0418ac6.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
const Input_stories = {
  title: "Components/Input",
  component: Input,
  parameters: {
    layout: "centered"
  },
  tags: ["autodocs"],
  argTypes: {
    type: {
      control: "select",
      options: ["text", "password", "date", "cpf", "phone", "cnpj", "cep"],
      description: "Type of input to render"
    },
    countryCode: {
      control: "select",
      options: ["BR", "US", "UK", "DE", "FR"],
      description: "Whether the input is phone"
    },
    disabled: {
      control: "boolean",
      description: "Whether the input is disabled"
    },
    required: {
      control: "boolean",
      description: "Whether the input is required"
    },
    error: {
      control: "boolean",
      description: "Whether the input has an error"
    },
    validated: {
      control: "boolean",
      description: "Whether the input has been validated"
    },
    label: {
      control: "text",
      description: "Label for the input field"
    },
    helperText: {
      control: "text",
      description: "Helper text to display below the input"
    },
    errorMessage: {
      control: "text",
      description: "Custom error message to display"
    }
  }
};
const Default = {
  args: {
    type: "text",
    placeholder: "Enter text..."
  }
};
const WithLabel = {
  args: {
    type: "text",
    label: "Username",
    placeholder: "Enter your username"
  }
};
const Required = {
  args: {
    type: "email",
    label: "Email",
    required: true,
    placeholder: "Enter your email"
  }
};
const WithHelperText = {
  args: {
    type: "text",
    label: "Username",
    helperText: "Username must be at least 3 characters long",
    placeholder: "Enter your username"
  }
};
const WithError = {
  args: {
    type: "text",
    label: "Email",
    error: true,
    errorMessage: "Please enter a valid email address",
    placeholder: "Enter your email"
  }
};
const Validated = {
  args: {
    type: "text",
    label: "Username",
    validated: true,
    placeholder: "Enter your username"
  }
};
const Disabled = {
  args: {
    type: "text",
    label: "Username",
    disabled: true,
    placeholder: "Enter your username"
  }
};
const Password = {
  args: {
    type: "password",
    label: "Password",
    placeholder: "Enter your password"
  }
};
const Email = {
  args: {
    type: "email",
    label: "Email",
    placeholder: "Enter your email"
  }
};
const Date = {
  args: {
    type: "date",
    label: "Birth Date",
    placeholder: "Select your birth date"
  }
};
const DatePicker = {
  args: {
    type: "datePicker",
    label: "Select a date",
    placeholder: "Select your birth date"
  }
};
const CPF = {
  args: {
    type: "cpf",
    label: "CPF",
    placeholder: "Enter your CPF"
  }
};
const Phone = {
  args: {
    type: "phone",
    label: "Phone Number",
    placeholder: "Enter your phone number"
  }
};
const CNPJ = {
  args: {
    type: "cnpj",
    label: "CNPJ",
    placeholder: "Enter your CNPJ"
  }
};
const CEP = {
  args: {
    type: "cep",
    label: "CEP",
    placeholder: "Enter your CEP"
  }
};
const FullExample = {
  args: {
    type: "text",
    label: "Full Name",
    required: true,
    placeholder: "Enter your full name",
    helperText: "Please enter your legal name as it appears on your documents"
  }
};
const WithErrorAndHelper = {
  args: {
    type: "text",
    label: "Email",
    required: true,
    error: true,
    errorMessage: "Please enter a valid email address",
    helperText: "We will use this email to send you important updates",
    placeholder: "Enter your email"
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'text',\n    placeholder: 'Enter text...'\n  }\n}",
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
WithLabel.parameters = {
  ...WithLabel.parameters,
  docs: {
    ...(_d = WithLabel.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'text',\n    label: 'Username',\n    placeholder: 'Enter your username'\n  }\n}",
      ...(_f = (_e = WithLabel.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
Required.parameters = {
  ...Required.parameters,
  docs: {
    ...(_g = Required.parameters) == null ? void 0 : _g.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'email',\n    label: 'Email',\n    required: true,\n    placeholder: 'Enter your email'\n  }\n}",
      ...(_i = (_h = Required.parameters) == null ? void 0 : _h.docs) == null ? void 0 : _i.source
    }
  }
};
WithHelperText.parameters = {
  ...WithHelperText.parameters,
  docs: {
    ...(_j = WithHelperText.parameters) == null ? void 0 : _j.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'text',\n    label: 'Username',\n    helperText: 'Username must be at least 3 characters long',\n    placeholder: 'Enter your username'\n  }\n}",
      ...(_l = (_k = WithHelperText.parameters) == null ? void 0 : _k.docs) == null ? void 0 : _l.source
    }
  }
};
WithError.parameters = {
  ...WithError.parameters,
  docs: {
    ...(_m = WithError.parameters) == null ? void 0 : _m.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'text',\n    label: 'Email',\n    error: true,\n    errorMessage: 'Please enter a valid email address',\n    placeholder: 'Enter your email'\n  }\n}",
      ...(_o = (_n = WithError.parameters) == null ? void 0 : _n.docs) == null ? void 0 : _o.source
    }
  }
};
Validated.parameters = {
  ...Validated.parameters,
  docs: {
    ...(_p = Validated.parameters) == null ? void 0 : _p.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'text',\n    label: 'Username',\n    validated: true,\n    placeholder: 'Enter your username'\n  }\n}",
      ...(_r = (_q = Validated.parameters) == null ? void 0 : _q.docs) == null ? void 0 : _r.source
    }
  }
};
Disabled.parameters = {
  ...Disabled.parameters,
  docs: {
    ...(_s = Disabled.parameters) == null ? void 0 : _s.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'text',\n    label: 'Username',\n    disabled: true,\n    placeholder: 'Enter your username'\n  }\n}",
      ...(_u = (_t = Disabled.parameters) == null ? void 0 : _t.docs) == null ? void 0 : _u.source
    }
  }
};
Password.parameters = {
  ...Password.parameters,
  docs: {
    ...(_v = Password.parameters) == null ? void 0 : _v.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'password',\n    label: 'Password',\n    placeholder: 'Enter your password'\n  }\n}",
      ...(_x = (_w = Password.parameters) == null ? void 0 : _w.docs) == null ? void 0 : _x.source
    }
  }
};
Email.parameters = {
  ...Email.parameters,
  docs: {
    ...(_y = Email.parameters) == null ? void 0 : _y.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'email',\n    label: 'Email',\n    placeholder: 'Enter your email'\n  }\n}",
      ...(_A = (_z = Email.parameters) == null ? void 0 : _z.docs) == null ? void 0 : _A.source
    }
  }
};
Date.parameters = {
  ...Date.parameters,
  docs: {
    ...(_B = Date.parameters) == null ? void 0 : _B.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'date',\n    label: 'Birth Date',\n    placeholder: 'Select your birth date'\n  }\n}",
      ...(_D = (_C = Date.parameters) == null ? void 0 : _C.docs) == null ? void 0 : _D.source
    }
  }
};
DatePicker.parameters = {
  ...DatePicker.parameters,
  docs: {
    ...(_E = DatePicker.parameters) == null ? void 0 : _E.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'datePicker',\n    label: 'Select a date',\n    placeholder: 'Select your birth date'\n  }\n}",
      ...(_G = (_F = DatePicker.parameters) == null ? void 0 : _F.docs) == null ? void 0 : _G.source
    }
  }
};
CPF.parameters = {
  ...CPF.parameters,
  docs: {
    ...(_H = CPF.parameters) == null ? void 0 : _H.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'cpf',\n    label: 'CPF',\n    placeholder: 'Enter your CPF'\n  }\n}",
      ...(_J = (_I = CPF.parameters) == null ? void 0 : _I.docs) == null ? void 0 : _J.source
    }
  }
};
Phone.parameters = {
  ...Phone.parameters,
  docs: {
    ...(_K = Phone.parameters) == null ? void 0 : _K.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'phone',\n    label: 'Phone Number',\n    placeholder: 'Enter your phone number'\n  }\n}",
      ...(_M = (_L = Phone.parameters) == null ? void 0 : _L.docs) == null ? void 0 : _M.source
    }
  }
};
CNPJ.parameters = {
  ...CNPJ.parameters,
  docs: {
    ...(_N = CNPJ.parameters) == null ? void 0 : _N.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'cnpj',\n    label: 'CNPJ',\n    placeholder: 'Enter your CNPJ'\n  }\n}",
      ...(_P = (_O = CNPJ.parameters) == null ? void 0 : _O.docs) == null ? void 0 : _P.source
    }
  }
};
CEP.parameters = {
  ...CEP.parameters,
  docs: {
    ...(_Q = CEP.parameters) == null ? void 0 : _Q.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'cep',\n    label: 'CEP',\n    placeholder: 'Enter your CEP'\n  }\n}",
      ...(_S = (_R = CEP.parameters) == null ? void 0 : _R.docs) == null ? void 0 : _S.source
    }
  }
};
FullExample.parameters = {
  ...FullExample.parameters,
  docs: {
    ...(_T = FullExample.parameters) == null ? void 0 : _T.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'text',\n    label: 'Full Name',\n    required: true,\n    placeholder: 'Enter your full name',\n    helperText: 'Please enter your legal name as it appears on your documents'\n  }\n}",
      ...(_V = (_U = FullExample.parameters) == null ? void 0 : _U.docs) == null ? void 0 : _V.source
    }
  }
};
WithErrorAndHelper.parameters = {
  ...WithErrorAndHelper.parameters,
  docs: {
    ...(_W = WithErrorAndHelper.parameters) == null ? void 0 : _W.docs,
    source: {
      originalSource: "{\n  args: {\n    type: 'text',\n    label: 'Email',\n    required: true,\n    error: true,\n    errorMessage: 'Please enter a valid email address',\n    helperText: 'We will use this email to send you important updates',\n    placeholder: 'Enter your email'\n  }\n}",
      ...(_Y = (_X = WithErrorAndHelper.parameters) == null ? void 0 : _X.docs) == null ? void 0 : _Y.source
    }
  }
};
const __namedExportsOrder = ["Default", "WithLabel", "Required", "WithHelperText", "WithError", "Validated", "Disabled", "Password", "Email", "Date", "DatePicker", "CPF", "Phone", "CNPJ", "CEP", "FullExample", "WithErrorAndHelper"];
export {
  CEP,
  CNPJ,
  CPF,
  Date,
  DatePicker,
  Default,
  Disabled,
  Email,
  FullExample,
  Password,
  Phone,
  Required,
  Validated,
  WithError,
  WithErrorAndHelper,
  WithHelperText,
  WithLabel,
  __namedExportsOrder,
  Input_stories as default
};
