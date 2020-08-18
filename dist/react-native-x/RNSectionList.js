"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jquery_1 = __importDefault(require("jquery"));
const react_1 = __importDefault(require("react"));
class RNSectionList extends react_1.default.Component {
    componentDidMount() {
        this.registerOnEndReachedEvent();
    }
    componentWillUnmount() {
        this.unregisterOnEndReachedEvent();
    }
    registerOnEndReachedEvent() {
        if (this.scrollHandlerFn) {
            return;
        }
        this.scrollHandlerFn = () => {
            if (jquery_1.default(window).scrollTop() + jquery_1.default(window).height() === jquery_1.default(document).height()) {
                console.log('LAMDV - scrollHandlerFn - bottom');
                const { onEndReached } = this.props;
                if (onEndReached) {
                    onEndReached();
                }
            }
        };
        jquery_1.default(window).on('scroll', this.scrollHandlerFn);
    }
    unregisterOnEndReachedEvent() {
        if (this.scrollHandlerFn) {
            jquery_1.default(window).off('scroll', this.scrollHandlerFn);
            this.scrollHandlerFn = undefined;
        }
    }
    scrollToLocation(params) {
        // TODO
    }
    render() {
        const { className = '', sections, renderItem, renderSectionHeader, renderSectionFooter, ListHeaderComponent, ListFooterComponent, ListEmptyComponent, style } = this.props;
        return (react_1.default.createElement("div", { className: `SectionList ${className}`, style: style },
            ListHeaderComponent,
            sections.map((section, index) => {
                return (react_1.default.createElement(react_1.default.Fragment, null,
                    /* render section header */
                    (renderSectionHeader)
                        ?
                            renderSectionHeader({
                                index,
                                section,
                            })
                        :
                            undefined,
                    section.data.map((item, itemIndex) => {
                        if (renderItem) {
                            return renderItem({
                                index: index * 1000 + itemIndex,
                                section,
                                item,
                            });
                        }
                        else {
                            return undefined;
                        }
                    }),
                    /* render section footer */
                    (renderSectionFooter)
                        ?
                            renderSectionFooter({
                                index,
                                section,
                            })
                        :
                            undefined));
            }),
            (sections.length === 0)
                ?
                    ListEmptyComponent
                :
                    undefined,
            ListFooterComponent));
    }
}
exports.RNSectionList = RNSectionList;
