import { themes } from "@storybook/theming";
import type { Preview } from "@storybook/react";

import '@koaris/bloom-ui/tailwind.css';

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
    // The canvas follows the bloom-ui theme (light or dark from the OS), the
    // same way an app's body does, instead of a fixed light background.
    backgrounds: {
      default: 'theme',
      values: [
        { name: 'theme', value: 'rgb(var(--bg))' },
        { name: 'surface', value: 'rgb(var(--surface))' },
      ],
    },
  },
};

export default preview;
