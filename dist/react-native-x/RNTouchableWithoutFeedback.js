"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNTouchableWithoutFeedback = void 0;
const jquery_1 = __importDefault(require("jquery"));
const react_1 = __importDefault(require("react"));
class RNTouchableWithoutFeedback extends react_1.default.Component {
    touchableHandlePress(event) {
        if (this.componentRef) {
            jquery_1.default(this.componentRef).trigger('click');
        }
    }
    render() {
        const { className = '', onPress, onPressIn, onPressOut, disabled, style } = this.props;
        return (react_1.default.createElement("div", { ref: (node) => this.componentRef = node, className: `TouchableWithoutFeedback ${className}`, onClick: (!disabled) ? onPress : undefined, onMouseDown: (!disabled) ? onPressIn : undefined, onMouseUp: (!disabled) ? onPressOut : undefined, style: style }, this.props.children));
    }
}
exports.RNTouchableWithoutFeedback = RNTouchableWithoutFeedback;
