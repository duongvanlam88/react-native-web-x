"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class RNActivityIndicator extends react_1.default.Component {
    render() {
        const { className = '', size, color = 'rgb(25, 118, 210)', style } = this.props;
        return (react_1.default.createElement("div", { className: `ActivityIndicator ${className}`, style: (style) ? style : {} },
            react_1.default.createElement("div", { style: (size === 'large') ? styles.sizeLarge : styles.sizeSmall },
                react_1.default.createElement("svg", { height: "100%", viewBox: "0 0 32 32", width: "100%" },
                    react_1.default.createElement("circle", { cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4", style: { stroke: color, opacity: 0.2 } }),
                    react_1.default.createElement("circle", { cx: "16", cy: "16", fill: "none", r: "14", strokeWidth: "4", style: { stroke: color, strokeDasharray: 80, 'strokeDashoffset': 60 } })))));
    }
}
exports.RNActivityIndicator = RNActivityIndicator;
const styles = {
    sizeLarge: {
        width: 36,
        height: 36,
    },
    sizeSmall: {
        width: 20,
        height: 20,
    },
};
