import React, { MouseEvent } from 'react';
import { StyleProp, ViewStyle } from 'react-native-web-2';
export interface RNTouchableOpacityProps {
    className?: string;
    to?: string;
    onPress?: (event: any) => void;
    onLongPress?: (event: any) => void;
    delayPressIn?: number;
    disabled?: boolean;
    style?: StyleProp<ViewStyle>;
}
export declare class RNTouchableOpacity extends React.Component<RNTouchableOpacityProps> {
    private componentRef;
    constructor(props: RNTouchableOpacityProps);
    touchableHandlePress(event: any): void;
    handleOnClick(event: MouseEvent<HTMLElement>): boolean;
    render(): JSX.Element;
}
