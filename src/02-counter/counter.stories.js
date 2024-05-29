/* v8 ignore start */
import { Counter } from './counter';

export default {
    title: 'Atlas/02. Counter',
    component: Counter,
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
