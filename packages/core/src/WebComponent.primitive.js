"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WebComponent = void 0;
var lit_1 = require("lit");
var WebComponent = /** @class */ (function (_super) {
    __extends(WebComponent, _super);
    function WebComponent() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this._defaultStyles = (0, lit_1.css)(templateObject_1 || (templateObject_1 = __makeTemplateObject([""], [""])));
        _this._defaultTemplate = (0, lit_1.html)(templateObject_2 || (templateObject_2 = __makeTemplateObject([""], [""])));
        return _this;
    }
    WebComponent.prototype.setStyles = function (styles) {
        this._defaultStyles = styles;
        this.requestUpdate();
    };
    WebComponent.prototype.setTempalate = function (template) {
        this._defaultTemplate = template;
        this.requestUpdate();
    };
    WebComponent.prototype.return = function () {
        return (0, lit_1.html)(templateObject_3 || (templateObject_3 = __makeTemplateObject(["\n            <style>\n                ", "\n            </style>\n            ", "\n        "], ["\n            <style>\n                ", "\n            </style>\n            ", "\n        "])), this._defaultStyles, this._defaultTemplate);
    };
    return WebComponent;
}(lit_1.LitElement));
exports.WebComponent = WebComponent;
var templateObject_1, templateObject_2, templateObject_3;
