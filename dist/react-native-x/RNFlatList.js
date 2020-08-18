"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
class RNFlatList extends react_1.default.Component {
    render() {
        const { style } = this.props;
        return (react_1.default.createElement("div", { className: "FlatList", style: style }, this.props.children));
    }
}
exports.RNFlatList = RNFlatList;
