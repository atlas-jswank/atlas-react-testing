import { create } from '@storybook/theming/create';
import logo from './logo.png'
export default create({
    base: 'light',
    brandTitle: 'Unit Testing React | Atlas',
    brandImage: logo,
    fontBase: 'Poppins, sans-serif',
    colorPrimary: "#FFFFFF",
    colorSecondary: '#1ed2af',
    barSelectedColor: '#1ed2af',
    barHoverColor: '#1ed2af',
    textColor: '#00003c',
});