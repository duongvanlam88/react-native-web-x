import React from 'react';
import { StyleProp, TextStyle } from '../react-native-web-x';

export interface RNTextProps {
  className?: string;
  adjustsFontSizeToFit?: boolean; // for mobile app only
  numberOfLines?: number; // for mobile app only
  onPress?: () => void;
  style?: StyleProp<TextStyle>;
}

export class RNText extends React.Component<RNTextProps> {
  public render() {
    const { className = '', onPress, style } = this.props;

    return (
      <div
        className={`Text ${className} ${(onPress) ? 'handlePress' : ''}`}
        onClick={onPress}
        style={style as any}
      >
        {this.props.children}
      </div>
    );
  }
}
