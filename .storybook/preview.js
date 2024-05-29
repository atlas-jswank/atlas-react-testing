import theme from "./theme"
import "./theme.css";

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    docs: {
      theme
    },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
};

export default preview;
