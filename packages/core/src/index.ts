import { LitElement, html } from 'lit';
import { customElement } from 'lit/decorators.js';

@customElement('my-element')
export default class MyElement extends LitElement {
    override render() {
        return html`<p>Hello from my template.</p>`;
    }
}
