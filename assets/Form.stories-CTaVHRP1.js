var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./index-DPCO8D-R.js";
import { d as Form, T as Text, I as Input, C as Checkbox, e as Button, f as TextInput } from "./index-DTqfm6Z4.js";
import "./_commonjsHelpers-CUmg6egw.js";
import "./index-D4iSnjfY.js";
import "./index-BUJ0C1Fr.js";
const Form_stories = {
  title: "Form/Form",
  component: Form,
  tags: ["autodocs"],
  args: {
    variant: "primary",
    orientation: "col"
  },
  argTypes: {
    orientation: {
      options: ["col", "row"],
      control: {
        type: "inline-radio"
      }
    },
    children: {
      type: "symbol"
    }
  }
};
const Default = {
  args: {
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { color: "neutral-800", children: "Nome" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { width: "sm", type: "text", placeholder: "Nome Completo", error: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { color: "neutral-800", children: "E-mail" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Input, { width: "sm", type: "text", placeholder: "guilhermesalviano177@gmail.com", error: false }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { tag: "span", children: "Aceite os termos de uso." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", children: "Finalizar" })
    ] })
  }
};
const OrientationRow = {
  args: {
    orientation: "row",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Text, { color: "neutral-800", children: "Testando o elemento Form" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex w-full", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, { type: "text", prefix: "koaris.com.br/", placeholder: "Testando o elemento Form", error: false }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Button, { type: "submit", size: "sm", className: "w-30", children: "Finalizar" })
      ] })
    ] })
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: '{\n  args: {\n    children: <>\n        <Text color="neutral-800">Nome</Text>\n        <Input width="sm" type="text" placeholder="Nome Completo" error={false} />\n        <Text color="neutral-800">E-mail</Text>\n        <Input width="sm" type="text" placeholder="guilhermesalviano177@gmail.com" error={false} />\n        <div className="flex gap-2">\n          <Checkbox />\n          <Text tag="span">Aceite os termos de uso.</Text>\n        </div>\n        <Button type="submit">Finalizar</Button>\n      </>\n  }\n}',
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
OrientationRow.parameters = {
  ...OrientationRow.parameters,
  docs: {
    ...(_d = OrientationRow.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: `{
  args: {
    orientation: 'row',
    children: <div className="flex flex-col">
        <Text color="neutral-800">Testando o elemento Form</Text>
        <div className="flex w-full">
          <TextInput type="text" prefix="koaris.com.br/" placeholder="Testando o elemento Form" error={false} />
          <Button type="submit" size="sm" className="w-30">
            Finalizar
          </Button>
        </div>
      </div>
  }
}`,
      ...(_f = (_e = OrientationRow.parameters) == null ? void 0 : _e.docs) == null ? void 0 : _f.source
    }
  }
};
const __namedExportsOrder = ["Default", "OrientationRow"];
export {
  Default,
  OrientationRow,
  __namedExportsOrder,
  Form_stories as default
};
