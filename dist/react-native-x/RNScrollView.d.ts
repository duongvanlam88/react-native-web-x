import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web-2';
export interface RNScrollViewProps {
    className?: string;
    keyboardDismissMode?: 'interactive';
    keyboardShouldPersistTaps?: 'handled';
    horizontal?: boolean;
    style?: StyleProp<ViewStyle>;
    contentContainerStyle?: StyleProp<ViewStyle>;
}
export declare class RNScrollView extends React.Component<RNScrollViewProps> {
    scrollTo(y?: number | {
        x?: number;
        y?: number;
        animated?: boolean;
    }, x?: number, animated?: boolean): void;
    render(): JSX.Element;
}
