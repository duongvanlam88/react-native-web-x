import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web-2';
export interface RNTouchableWithoutFeedbackProps {
    className?: string;
    onPress?: (event: any) => void;
    onLongPress?: (event: any) => void;
    onPressIn?: (event: any) => void;
    onPressOut?: (event: any) => void;
    delayPressIn?: number;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}
export declare class RNTouchableWithoutFeedback extends React.Component<RNTouchableWithoutFeedbackProps> {
    componentRef: HTMLDivElement | null;
    touchableHandlePress(event: any): void;
    render(): JSX.Element;
}
