import { CSSProperties } from 'react';

export interface RNViewStyle {
  marginTop?: number;
  lineHeight?: string;
}

export interface RNImageStyle extends RNViewStyle {
  resizeMode?: 'cover';
}

export interface RNTextStyle extends RNViewStyle {
  fontWeight?: string;
  textAlignVertical?: 'center';
}

export type RNStyleProp<T> = T | CSSProperties;
