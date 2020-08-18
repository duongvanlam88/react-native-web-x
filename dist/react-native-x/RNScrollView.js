"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class RNScrollView extends react_1.default.Component {
    scrollTo(y, x, animated) {
        // Don't support yet
    }
    render() {
        const { className = '', style, contentContainerStyle } = this.props;
        const finalStyle = (style) ? Object.assign({}, style) : {};
        const finalContentStyle = Object.assign({}, ((finalStyle.padding !== undefined) ? { padding: finalStyle.padding } : {}), ((finalStyle.paddingTop !== undefined) ? { paddingTop: finalStyle.paddingTop } : {}), ((finalStyle.paddingBottom !== undefined) ? { paddingBottom: finalStyle.paddingBottom } : {}), ((finalStyle.paddingLeft !== undefined) ? { paddingLeft: finalStyle.paddingLeft } : {}), ((finalStyle.paddingRight !== undefined) ? { paddingRight: finalStyle.paddingRight } : {}));
        delete finalStyle.padding;
        delete finalStyle.paddingTop;
        delete finalStyle.paddingBottom;
        delete finalStyle.paddingLeft;
        delete finalStyle.paddingRight;
        return (react_1.default.createElement("div", { className: `ScrollView ${className}`, style: finalStyle },
            react_1.default.createElement("div", { className: "ScrollView-content", style: Object.assign({}, finalContentStyle, (contentContainerStyle || {})) }, this.props.children),
            react_1.default.createElement("div", { className: "ScrollView-topOverlay" }),
            react_1.default.createElement("div", { className: "ScrollView-bottomOverlay" })));
    }
}
exports.RNScrollView = RNScrollView;
