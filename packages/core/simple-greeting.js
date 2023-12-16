import { LitElement, css, html } from 'lit';
// import { WebComponent } from './src/WebComponent.primitive';

class WebComponent extends LitElement {
    _defaultTemplate = html``;

    setStyles(styles) {
        this._defaultStyles = styles;
        this.requestUpdate();
    }

    setTemplate(template) {
        this._defaultTemplate = template;
        this.requestUpdate();
    }

    render() {
        return this._defaultTemplate;
    }
}

export class SimpleGreeting extends WebComponent {
    static styles = css`
        p {
            color: white;
            font-size: 24px;
        }
    `;
    template = html`<p>Hello, ${this.name}!</p>`;

    static properties = {
        name: { type: String }
    };

    constructor() {
        super();
        this.name = 'Somebody';
        this.setStyles(this.styles);
        this.setTemplate(this.template);
    }
}
customElements.define('simple-greeting', SimpleGreeting);
