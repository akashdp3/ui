import { WebComponent } from '@akashdp/core';
import { customElement, property } from 'lit/decorators';

import { buttonTemplate } from './button.template';
import { buttonStyles } from './button.styles';

@customElement('wc-button')
export class WCButton extends WebComponent {
    static override styles = buttonStyles;

    @property({ type: String })
    public variant? = 'secondary';

    @property({ type: String })
    public type? = 'button';

    @property({ type: Boolean })
    public autoFocus? = false;

    @property({ type: Boolean })
    public disabled? = false;

    override render() {
        return buttonTemplate;
    }
}
