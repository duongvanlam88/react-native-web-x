"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNText = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("./utils");
class RNText extends react_1.default.Component {
    render() {
        const { className, onPress, style } = this.props;
        return (react_1.default.createElement("div", { className: utils_1.mergeClasses([
                'Text',
                className,
                (onPress) ? 'handlePress' : undefined,
            ]), onClick: onPress, style: style }, this.props.children));
    }
}
exports.RNText = RNText;
