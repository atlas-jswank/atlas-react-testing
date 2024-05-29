/* v8 ignore start */
import { SignUp } from './sign-up';

export default {
    title: 'Atlas/03. Sign Up',
    component: SignUp,
    parameters: {
        layout: 'centered',
    },
    argTypes: {
        initialValue: {
            control: { type: 'number', },
        },
    }
};

export const Default = {
    args: {
    },
};
/* v8 ignore stop */
