"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNTextInput = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("./utils");
class RNTextInput extends react_1.default.Component {
    constructor(props) {
        super(props);
        // we should NOT use @bind here, because it will cause circular dependency
        this.handleChange = this.handleChange.bind(this);
    }
    handleChange(event) {
        const { onChangeText } = this.props;
        if (onChangeText) {
            onChangeText(event.target.value);
        }
    }
    focus() {
        if (this.inputRef) {
            this.inputRef.focus();
        }
    }
    blur() {
        if (this.inputRef) {
            this.inputRef.blur();
        }
    }
    // Don't support yet
    measureInWindow(callback) {
        // Don't support yet
    }
    render() {
        const { className, placeholder, multiline, autoCapitalize, autoFocus, maxLength, onBlur, value, style } = this.props;
        return (react_1.default.createElement("input", { ref: (node) => this.inputRef = node, className: utils_1.mergeClasses([
                'TextInput',
                className,
            ]), placeholder: placeholder, multiple: multiline, autoCapitalize: autoCapitalize, autoFocus: autoFocus, maxLength: maxLength, onChange: this.handleChange, onBlur: onBlur, value: value, style: style }));
    }
}
exports.RNTextInput = RNTextInput;
