"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const react_1 = __importDefault(require("react"));
class RNView extends react_1.default.Component {
    setNativeProps(props) {
        if (this.viewRef) {
            jquery_1.default(this.viewRef).css(props);
        }
    }
    render() {
        const { className = '', style } = this.props;
        return (react_1.default.createElement("div", { ref: (node) => this.viewRef = node, className: `View ${className}`, style: style }, this.props.children));
    }
}
exports.RNView = RNView;
