"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.extractAttributes = exports.mergeClasses = void 0;
exports.mergeClasses = (classes) => {
    return classes.filter((v) => v).join(' ');
};
exports.extractAttributes = (object, keys) => {
    const result = {};
    if (!object) {
        return [object, undefined];
    }
    // we clone object before modifying it
    object = Object.assign({}, object);
    keys.map((key) => {
        const value = object[key];
        if (value !== undefined && value !== null) {
            result[key] = value;
        }
        // delete key from original object
        delete object[key];
    });
    return [object, result];
};
