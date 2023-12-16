import { css, html } from 'lit';
import { WebComponent } from './src/WebComponent.primitive';

export class SimpleGreeting extends WebComponent {
    static styles = css`
        p {
            color: blue;
        }
    `;

    static properties = {
        name: { type: String }
    };

    constructor() {
        super();
        this.name = 'Somebody';
    }

    render() {
        return html`<p>Hello, ${this.name}!</p>`;
    }
}
customElements.define('simple-greeting', SimpleGreeting);
