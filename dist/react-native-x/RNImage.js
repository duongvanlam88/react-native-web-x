"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
class RNImage extends react_1.default.Component {
    componentDidMount() {
        const { onLoadEnd } = this.props;
        if (onLoadEnd) {
            setTimeout(() => onLoadEnd(), 100);
        }
    }
    render() {
        const { className = '', source, style } = this.props;
        let { resizeMode } = this.props;
        resizeMode = (resizeMode)
            ?
                resizeMode
            :
                (style) ? style.resizeMode : undefined;
        // transform resizeMode to css backgroundSize
        const backgroundSize = (resizeMode === 'stretch') ? '100% 100%' : resizeMode || 'cover';
        return (react_1.default.createElement("div", { className: `Image ${className}`, style: style },
            react_1.default.createElement("div", { style: {
                    width: '100%',
                    height: '100%',
                    backgroundImage: (source && source.uri && source.uri !== 'undefined') ? `url('${source.uri}')` : undefined,
                    backgroundSize,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'center',
                } })));
    }
}
exports.RNImage = RNImage;
