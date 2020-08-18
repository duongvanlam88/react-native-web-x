import React from 'react';
import { StyleProp, TextStyle } from '../react-native-web-x';
export interface RNTextProps {
    className?: string;
    adjustsFontSizeToFit?: boolean;
    numberOfLines?: number;
    onPress?: () => void;
    style?: StyleProp<TextStyle>;
}
export declare class RNText extends React.Component<RNTextProps> {
    render(): JSX.Element;
}
