import { WebComponent, css } from '@akashdp/core';
import { customElement, property } from 'lit/decorators';

@customElement('wc-button')
export class WCButton extends WebComponent {
    static override styles = css``;

    @property({ type: String })
    public variant? = 'secondary';

    @property({ type: String })
    public type? = 'button';

    @property({ type: Boolean })
    public autoFocus? = false;

    @property({ type: Boolean })
    public disabled? = false;
}
