var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { WebComponent } from '@akashdp/core';
import { customElement, property } from 'lit/decorators';
import { buttonTemplate } from './button.template';
import { buttonStyles } from './button.styles';
let WCButton = class WCButton extends WebComponent {
    constructor() {
        super(...arguments);
        this.variant = 'secondary';
        this.type = 'button';
        this.autoFocus = false;
        this.disabled = false;
    }
    render() {
        return buttonTemplate;
    }
};
WCButton.styles = buttonStyles;
__decorate([
    property({ type: String })
], WCButton.prototype, "variant", void 0);
__decorate([
    property({ type: String })
], WCButton.prototype, "type", void 0);
__decorate([
    property({ type: Boolean })
], WCButton.prototype, "autoFocus", void 0);
__decorate([
    property({ type: Boolean })
], WCButton.prototype, "disabled", void 0);
WCButton = __decorate([
    customElement('wc-button')
], WCButton);
export { WCButton };
//# sourceMappingURL=button.js.map