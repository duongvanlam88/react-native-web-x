import React from 'react';
import './index.css';

// we must export this before our custom components
export * from './react-native-web-x';

import { RNActivityIndicator as ActivityIndicator } from './react-native-x/RNActivityIndicator';
import { RNAlert as Alert } from './react-native-x/RNAlert';
import { RNAsyncStorage as AsyncStorage } from './react-native-x/RNAsyncStorage';
import { RNI18nManager as I18nManager } from './react-native-x/RNI18nManager';
import { RNImage as Image } from './react-native-x/RNImage';
import { RNImageBackground as ImageBackground } from './react-native-x/RNImageBackground';
import { RNNativeModules as NativeModules } from './react-native-x/RNNativeModules';
import { RNScrollView as ScrollView } from './react-native-x/RNScrollView';
import { RNStyleSheet as StyleSheet } from './react-native-x/RNStyleSheet';
import { RNText as Text } from './react-native-x/RNText';
import { RNTextInput as TextInput } from './react-native-x/RNTextInput';
import { RNTouchableOpacity as TouchableOpacity } from './react-native-x/RNTouchableOpacity';
import { RNTouchableWithoutFeedback as TouchableWithoutFeedback } from './react-native-x/RNTouchableWithoutFeedback';
import { RNView as View } from './react-native-x/RNView';

export { View, Text, I18nManager, Image, AsyncStorage, ImageBackground, TouchableOpacity, TouchableWithoutFeedback, ActivityIndicator, Alert, ScrollView, TextInput, StyleSheet, NativeModules };

export const requireNativeComponent = <T>(name: string): React.ComponentType<T> | null => {
  return () => null as any;
};
