"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class RNImageBackground extends react_1.default.Component {
    render() {
        const { className = '', source, children, style } = this.props;
        let { resizeMode } = this.props;
        resizeMode = (resizeMode)
            ?
                resizeMode
            :
                (style) ? style.resizeMode : undefined;
        // transform resizeMode to css backgroundSize
        const backgroundSize = (resizeMode === 'stretch') ? '100% 100%' : resizeMode || 'cover';
        return (react_1.default.createElement("div", { className: `ImageBackground ${className}`, style: style },
            react_1.default.createElement("div", { style: {
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    backgroundImage: (source && source.uri && source.uri !== 'undefined') ? `url('${source.uri}')` : undefined,
                    backgroundSize,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                    zIndex: -1,
                } }),
            children));
    }
}
exports.RNImageBackground = RNImageBackground;
