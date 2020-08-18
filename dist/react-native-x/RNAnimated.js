"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class RNAnimated extends react_1.default.Component {
    render() {
        const { style } = this.props;
        return (react_1.default.createElement("div", { className: "Animated", style: style }, this.props.children));
    }
}
exports.RNAnimated = RNAnimated;
