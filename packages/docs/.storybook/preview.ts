import { themes } from "@storybook/theming";
import type { Preview } from "@storybook/react";

import '@koaris/bloom-ui/dist/tailwind.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    docs: {
      theme: themes.light,
    },
    backgrounds: {
      default: 'light'
    },
  },
};

export default preview;
