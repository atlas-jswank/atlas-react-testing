/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/01-snapshot-tests/expand.stories.js",
    "../src/02-testing-library/counter.stories.js",
    "../src/03-forms-mocking/sign-up.stories.js",
    "../src/04-hooks/use-pagination.stories.jsx",
  ],

  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],

  framework: {
    name: "@storybook/react-vite",
    options: {},
  },

  docs: {},

  staticDirs: ['./public'],

  managerHead: (head) => `
    ${head}
    <link rel="icon" type="image/png" href="./favicon.png">
  `,

  typescript: {
    reactDocgen: "react-docgen-typescript"
  }
};
export default config;
