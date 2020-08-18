import React from 'react';
import { ImageStyle, StyleProp } from '../react-native-web-x';
export interface RNImageProps {
    className?: string;
    resizeMode?: 'contain' | 'cover' | 'stretch';
    source?: {
        uri?: string;
    };
    onLoadEnd?: () => void;
    style?: StyleProp<ImageStyle>;
}
export declare class RNImage extends React.Component<RNImageProps> {
    componentDidMount(): void;
    render(): JSX.Element;
}
