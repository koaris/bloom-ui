import { _ as _e } from "./index-CMMsNRFq.js";
import "./index-BUJ0C1Fr.js";
import "./_commonjsHelpers-CUmg6egw.js";
const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/
      }
    },
    docs: {
      theme: _e.light
    },
    // The canvas follows the bloom-ui theme (light or dark from the OS), the
    // same way an app's body does, instead of a fixed light background.
    backgrounds: {
      default: "theme",
      values: [
        { name: "theme", value: "rgb(var(--bg))" },
        { name: "surface", value: "rgb(var(--surface))" }
      ]
    }
  }
};
export {
  preview as default
};
