import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web';
import { mergeClasses } from './utils';

export interface RNActivityIndicatorProps {
  className?: string;
  size: 'large' | 'small';
  color?: string;
  style?: StyleProp<ViewStyle>;
}

export class RNActivityIndicator extends React.Component<RNActivityIndicatorProps> {
  public render() {
    const { className, size, color = 'rgb(25, 118, 210)', style } = this.props;

    return (
      <div
        className={mergeClasses([
          'ActivityIndicator',
          className,
        ])}
        style={(style) ? style as any : {}}
      >
        <div style={
          (size === 'large') ? styles.sizeLarge as any : styles.sizeSmall as any
        }>
          <svg height="100%" viewBox="0 0 32 32" width="100%">
            <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4" style={{ stroke: color, opacity: 0.2 }} />
            <circle cx="16" cy="16" fill="none" r="14" strokeWidth="4" style={{ stroke: color, strokeDasharray: 80, 'strokeDashoffset': 60 }} />
          </svg>
        </div>
      </div>
    );
  }
}

const styles: {
  sizeLarge: StyleProp<ViewStyle>,
  sizeSmall: StyleProp<ViewStyle>,
} = {
  sizeLarge: {
    width: 36,
    height: 36,
  },

  sizeSmall: {
    width: 20,
    height: 20,
  },
};
