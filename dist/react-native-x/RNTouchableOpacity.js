"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNTouchableOpacity = void 0;
const jquery_1 = __importDefault(require("jquery"));
const react_1 = __importDefault(require("react"));
const utils_1 = require("./utils");
class RNTouchableOpacity extends react_1.default.Component {
    constructor(props) {
        super(props);
        // we should NOT use @bind here, because it will cause circular dependency
        this.handleOnClick = this.handleOnClick.bind(this);
    }
    touchableHandlePress(event) {
        if (this.componentRef) {
            jquery_1.default(this.componentRef).trigger('click');
        }
    }
    handleOnClick(event) {
        const { to, onPress, disabled } = this.props;
        // skip if disabled
        if (disabled) {
            return false;
        }
        if (to) {
            const { ctrlKey, metaKey } = event;
            const isMac = /(Mac|iPad)/i.test(navigator.platform);
            if ((isMac && metaKey)
                || ctrlKey) {
                // We don't process this event and
                // use href to open link in new window
                return true;
            }
        }
        // prevent default
        event.preventDefault();
        // stop proppagation
        event.stopPropagation();
        // use a tag's href if no onPress
        if (!onPress && to) {
            // TODO
            // NavigationUtils.openScreenByUrl(to);
        }
        // call onPress
        if (onPress) {
            onPress(event);
        }
        return false;
    }
    render() {
        const { className, to, disabled, style = {} } = this.props;
        const { backgroundColor } = style;
        console.log('RNTouchableOpacity');
        if (to && !disabled) {
            return (react_1.default.createElement("a", { ref: (node) => this.componentRef = node, className: utils_1.mergeClasses([
                    'TouchableOpacity',
                    className,
                    (disabled) ? 'disabled' : undefined,
                ]), href: to, 
                // onMouseEnter={() => Router.prefetch(to)}
                onKeyPress: (event) => {
                    if (event.which === 13) {
                        this.handleOnClick(event);
                    }
                }, onClick: this.handleOnClick, style: Object.assign(Object.assign({}, style), (backgroundColor ? { background: backgroundColor } : {})) }, this.props.children));
        }
        else {
            return (react_1.default.createElement("div", { ref: (node) => this.componentRef = node, className: utils_1.mergeClasses([
                    'TouchableOpacity',
                    className,
                    (disabled) ? 'disabled' : undefined,
                ]), tabIndex: 0, onKeyPress: (event) => {
                    if (event.which === 13) {
                        this.handleOnClick(event);
                    }
                }, onClick: this.handleOnClick, style: Object.assign(Object.assign({}, style), (backgroundColor ? { background: backgroundColor } : {})) }, this.props.children));
        }
    }
}
exports.RNTouchableOpacity = RNTouchableOpacity;
