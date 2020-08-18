"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RNAsyncStorage = void 0;
class RNAsyncStorage {
    static getItem(key, callback) {
        const value = localStorage.getItem(key);
        if (callback) {
            callback(undefined, value);
        }
        return Promise.resolve(value);
    }
    static setItem(key, value) {
        return Promise.resolve(localStorage.setItem(key, value));
    }
    static multiGet(keys, callback) {
        const result = [];
        keys.map((key) => {
            const value = localStorage.getItem(key);
            if (value !== null) {
                result.push([key, value]);
            }
        });
        if (callback) {
            callback(undefined, result);
        }
        return Promise.resolve(result);
    }
    static removeItem(key) {
        return Promise.resolve(localStorage.removeItem(key));
    }
}
exports.RNAsyncStorage = RNAsyncStorage;
