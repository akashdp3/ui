import { LitElement, html, css, CSSResult, TemplateResult } from 'lit';

export class WebComponent extends LitElement {
    protected _defaultStyles: CSSResult = css``;
    protected _defaultTemplate: TemplateResult = html``;

    protected setStyles(styles: CSSResult): void {
        this._defaultStyles = styles;
        this.requestUpdate();
    }

    protected setTempalate(template: TemplateResult): void {
        this._defaultTemplate = template;
        this.requestUpdate();
    }

    return(): TemplateResult {
        return html`
            <style>
                ${this._defaultStyles}
            </style>
            ${this._defaultTemplate}
        `
    }
}
