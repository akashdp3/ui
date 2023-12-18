import type { Meta, StoryObj } from '@storybook/web-components';
import { html } from '@akashdp/core';

import '../';

export default {
    title: 'Atoms/Button',
    argTypes: {},
    render: () => html`<wc-button></wc-button>`
} as Meta;

export const Default: StoryObj = {
    name: 'Default'
};
