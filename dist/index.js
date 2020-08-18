"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.requireNativeComponent = exports.NativeModules = exports.StyleSheet = exports.TextInput = exports.ScrollView = exports.Alert = exports.ActivityIndicator = exports.TouchableWithoutFeedback = exports.TouchableOpacity = exports.ImageBackground = exports.AsyncStorage = exports.Image = exports.I18nManager = exports.Text = exports.View = void 0;
require("./index.css");
// we must export this before our custom components
__exportStar(require("./react-native-web-x"), exports);
const RNActivityIndicator_1 = require("./react-native-x/RNActivityIndicator");
Object.defineProperty(exports, "ActivityIndicator", { enumerable: true, get: function () { return RNActivityIndicator_1.RNActivityIndicator; } });
const RNAlert_1 = require("./react-native-x/RNAlert");
Object.defineProperty(exports, "Alert", { enumerable: true, get: function () { return RNAlert_1.RNAlert; } });
const RNAsyncStorage_1 = require("./react-native-x/RNAsyncStorage");
Object.defineProperty(exports, "AsyncStorage", { enumerable: true, get: function () { return RNAsyncStorage_1.RNAsyncStorage; } });
const RNI18nManager_1 = require("./react-native-x/RNI18nManager");
Object.defineProperty(exports, "I18nManager", { enumerable: true, get: function () { return RNI18nManager_1.RNI18nManager; } });
const RNImage_1 = require("./react-native-x/RNImage");
Object.defineProperty(exports, "Image", { enumerable: true, get: function () { return RNImage_1.RNImage; } });
const RNImageBackground_1 = require("./react-native-x/RNImageBackground");
Object.defineProperty(exports, "ImageBackground", { enumerable: true, get: function () { return RNImageBackground_1.RNImageBackground; } });
const RNNativeModules_1 = require("./react-native-x/RNNativeModules");
Object.defineProperty(exports, "NativeModules", { enumerable: true, get: function () { return RNNativeModules_1.RNNativeModules; } });
const RNScrollView_1 = require("./react-native-x/RNScrollView");
Object.defineProperty(exports, "ScrollView", { enumerable: true, get: function () { return RNScrollView_1.RNScrollView; } });
const RNStyleSheet_1 = require("./react-native-x/RNStyleSheet");
Object.defineProperty(exports, "StyleSheet", { enumerable: true, get: function () { return RNStyleSheet_1.RNStyleSheet; } });
const RNText_1 = require("./react-native-x/RNText");
Object.defineProperty(exports, "Text", { enumerable: true, get: function () { return RNText_1.RNText; } });
const RNTextInput_1 = require("./react-native-x/RNTextInput");
Object.defineProperty(exports, "TextInput", { enumerable: true, get: function () { return RNTextInput_1.RNTextInput; } });
const RNTouchableOpacity_1 = require("./react-native-x/RNTouchableOpacity");
Object.defineProperty(exports, "TouchableOpacity", { enumerable: true, get: function () { return RNTouchableOpacity_1.RNTouchableOpacity; } });
const RNTouchableWithoutFeedback_1 = require("./react-native-x/RNTouchableWithoutFeedback");
Object.defineProperty(exports, "TouchableWithoutFeedback", { enumerable: true, get: function () { return RNTouchableWithoutFeedback_1.RNTouchableWithoutFeedback; } });
const RNView_1 = require("./react-native-x/RNView");
Object.defineProperty(exports, "View", { enumerable: true, get: function () { return RNView_1.RNView; } });
exports.requireNativeComponent = (name) => {
    return () => null;
};
