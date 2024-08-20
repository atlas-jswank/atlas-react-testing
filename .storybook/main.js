/** @type { import('@storybook/react-vite').StorybookConfig } */
const config = {
  stories: [
    "../src/01-snapshot-tests/expand.stories.ts",
    "../src/02-testing-library/counter.stories.ts",
    "../src/03-forms-mocking/sign-up.stories.ts",
    "../src/04-hooks/use-pagination.stories.tsx",
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
