"use strict";
function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
Object.defineProperty(exports, "__esModule", { value: true });
require("./index.css");
const RNActivityIndicator_1 = require("./react-native-x/RNActivityIndicator");
exports.ActivityIndicator = RNActivityIndicator_1.RNActivityIndicator;
const RNAlert_1 = require("./react-native-x/RNAlert");
exports.Alert = RNAlert_1.RNAlert;
const RNAsyncStorage_1 = require("./react-native-x/RNAsyncStorage");
exports.AsyncStorage = RNAsyncStorage_1.RNAsyncStorage;
const RNI18nManager_1 = require("./react-native-x/RNI18nManager");
exports.I18nManager = RNI18nManager_1.RNI18nManager;
const RNImage_1 = require("./react-native-x/RNImage");
exports.Image = RNImage_1.RNImage;
const RNImageBackground_1 = require("./react-native-x/RNImageBackground");
exports.ImageBackground = RNImageBackground_1.RNImageBackground;
const RNNativeModules_1 = require("./react-native-x/RNNativeModules");
exports.NativeModules = RNNativeModules_1.RNNativeModules;
const RNScrollView_1 = require("./react-native-x/RNScrollView");
exports.ScrollView = RNScrollView_1.RNScrollView;
const RNStyleSheet_1 = require("./react-native-x/RNStyleSheet");
exports.StyleSheet = RNStyleSheet_1.RNStyleSheet;
const RNText_1 = require("./react-native-x/RNText");
exports.Text = RNText_1.RNText;
const RNTextInput_1 = require("./react-native-x/RNTextInput");
exports.TextInput = RNTextInput_1.RNTextInput;
const RNTouchableOpacity_1 = require("./react-native-x/RNTouchableOpacity");
exports.TouchableOpacity = RNTouchableOpacity_1.RNTouchableOpacity;
const RNTouchableWithoutFeedback_1 = require("./react-native-x/RNTouchableWithoutFeedback");
exports.TouchableWithoutFeedback = RNTouchableWithoutFeedback_1.RNTouchableWithoutFeedback;
const RNView_1 = require("./react-native-x/RNView");
exports.View = RNView_1.RNView;
__export(require("./react-native-web-x"));
exports.requireNativeComponent = (name) => {
    return () => null;
};
