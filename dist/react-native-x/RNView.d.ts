/// <reference types="react" />
import React from 'react';
import { StyleProp, ViewStyle } from '../react-native-web-x';
export interface RNViewProps {
    className?: string;
    pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
    onLayout?: (event: any) => void;
    style?: StyleProp<ViewStyle>;
}
export declare class RNView extends React.Component<RNViewProps> {
    private viewRef?;
    setNativeProps(props: {
        left: number;
        top: number;
    }): void;
    render(): JSX.Element;
}
