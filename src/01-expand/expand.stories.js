/* v8 ignore start */
import Expand from './expand';

export default {
  title: 'Atlas/01. Expand',
  component: Expand,
  parameters: {
    layout: 'fullscreen',
  }, argTypes: {
  },

};

export const DefaultClosed = {
  args: {
    title: "Click to Expand",
    children: "Phasellus ultrices odio at tempor condimentum. Vivamus egestas metus vehicula ligula feugiat dictum. Maecenas in ex nunc. Duis vel augue vel sapien fringilla aliquam. Aenean nunc risus, faucibus ac felis ac, vulputate lobortis nibh. Mauris sed lorem a mi dictum bibendum.",
    defaultOpen: false
  },
};

export const DefaultOpen = {
  args: {
    title: "Click to Expand",
    children: "Phasellus ultrices odio at tempor condimentum. Vivamus egestas metus vehicula ligula feugiat dictum. Maecenas in ex nunc. Duis vel augue vel sapien fringilla aliquam. Aenean nunc risus, faucibus ac felis ac, vulputate lobortis nibh. Mauris sed lorem a mi dictum bibendum.",
    defaultOpen: true
  },
};
/* v8 ignore stop */
