import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web-2';
export interface RNImageBackgroundProps {
    className?: string;
    resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat';
    source?: {
        uri?: string;
    };
    style?: StyleProp<ViewStyle>;
}
export declare class RNImageBackground extends React.Component<RNImageBackgroundProps> {
    render(): JSX.Element;
}
