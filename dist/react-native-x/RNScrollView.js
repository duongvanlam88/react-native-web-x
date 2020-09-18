"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNScrollView = void 0;
const react_1 = __importDefault(require("react"));
const utils_1 = require("./utils");
class RNScrollView extends react_1.default.Component {
    scrollTo(y, x, animated) {
        // Don't support yet
    }
    render() {
        const { className, style, contentContainerStyle } = this.props;
        const [transformedStyle, additionalContentContainerStyle] = utils_1.extractAttributes(style, [
            'padding',
            'paddingTop',
            'paddingBottom',
            'paddingLeft',
            'paddingRight',
            'paddingHorizontal',
            'paddingVertical',
            'paddingStart',
            'paddingEnd',
        ]);
        return (react_1.default.createElement("div", { className: utils_1.mergeClasses([
                'ScrollView',
                className,
            ]), style: transformedStyle },
            react_1.default.createElement("div", { className: "ScrollView-content", style: Object.assign(Object.assign({}, additionalContentContainerStyle), (contentContainerStyle || {})) }, this.props.children),
            react_1.default.createElement("div", { className: "ScrollView-topOverlay" }),
            react_1.default.createElement("div", { className: "ScrollView-bottomOverlay" })));
    }
}
exports.RNScrollView = RNScrollView;
