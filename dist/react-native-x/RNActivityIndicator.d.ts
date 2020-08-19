import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web-2';
export interface RNActivityIndicatorProps {
    className?: string;
    size: 'large' | 'small';
    color?: string;
    style?: StyleProp<ViewStyle>;
}
export declare class RNActivityIndicator extends React.Component<RNActivityIndicatorProps> {
    render(): JSX.Element;
}
