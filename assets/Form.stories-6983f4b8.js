var _a, _b, _c, _d, _e, _f;
import { j as jsxRuntimeExports } from "./jsx-runtime-e0418ac6.js";
import { F as Form, T as Text, I as Input, C as Checkbox, a as Button, b as TextInput } from "./index-5f8583db.js";
import "./index-f6b91e15.js";
import "./_commonjsHelpers-ca272635.js";
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
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, {
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "Nome"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
        width: "sm",
        type: "text",
        placeholder: "Nome Completo",
        error: false
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "E-mail"
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Input, {
        width: "sm",
        type: "text",
        placeholder: "guilhermesalviano177@gmail.com",
        error: false
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "flex gap-2",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Checkbox, {}), /* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
          tag: "span",
          children: "Aceite os termos de uso."
        })]
      }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
        type: "submit",
        children: "Finalizar"
      })]
    })
  }
};
const OrientationRow = {
  args: {
    orientation: "row",
    children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
      className: "flex flex-col",
      children: [/* @__PURE__ */ jsxRuntimeExports.jsx(Text, {
        color: "neutral-800",
        children: "Testando o elemento Form"
      }), /* @__PURE__ */ jsxRuntimeExports.jsxs("div", {
        className: "flex w-full",
        children: [/* @__PURE__ */ jsxRuntimeExports.jsx(TextInput, {
          type: "text",
          prefix: "koaris.com.br/",
          placeholder: "Testando o elemento Form",
          error: false
        }), /* @__PURE__ */ jsxRuntimeExports.jsx(Button, {
          type: "submit",
          size: "sm",
          className: "w-30",
          children: "Finalizar"
        })]
      })]
    })
  }
};
Default.parameters = {
  ...Default.parameters,
  docs: {
    ...(_a = Default.parameters) == null ? void 0 : _a.docs,
    source: {
      originalSource: `{
  args: {
    children: <>
          <Text color='neutral-800'>Nome</Text>
          <Input width="sm" type='text' placeholder='Nome Completo' error={false} />
          <Text color='neutral-800'>E-mail</Text>
        <Input width="sm" type='text' placeholder='guilhermesalviano177@gmail.com' error={false} />
        <div className='flex gap-2'>
          <Checkbox />
          <Text tag="span" children="Aceite os termos de uso." />
        </div>
        <Button type='submit'>Finalizar</Button>
        </>
  }
}`,
      ...(_c = (_b = Default.parameters) == null ? void 0 : _b.docs) == null ? void 0 : _c.source
    }
  }
};
OrientationRow.parameters = {
  ...OrientationRow.parameters,
  docs: {
    ...(_d = OrientationRow.parameters) == null ? void 0 : _d.docs,
    source: {
      originalSource: "{\n  args: {\n    orientation: 'row',\n    children: <div className='flex flex-col'>\n        <Text color='neutral-800'>Testando o elemento Form</Text>\n        <div className='flex w-full'>\n          <TextInput type='text' prefix='koaris.com.br/' placeholder='Testando o elemento Form' error={false} />\n          <Button type='submit' size='sm' className='w-30'>Finalizar</Button>\n        </div>\n      </div>\n  }\n}",
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
