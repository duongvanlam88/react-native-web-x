import $ from 'jquery';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web';

export interface RNViewProps {
  className?: string;
  pointerEvents?: 'box-none' | 'none' | 'box-only' | 'auto';
  onLayout?: (event: any) => void; // Works on mobile only
  style?: StyleProp<ViewStyle>;
}

export class RNView extends React.Component<RNViewProps> {
  private viewRef?: HTMLDivElement | null;

  public setNativeProps(props: { left: number, top: number }) {
    if (this.viewRef) {
      $(this.viewRef).css(props);
    }
  }

  public render() {
    const { className = '', style } = this.props;

    return (
      <div
        ref={(node) => this.viewRef = node}
        className={`View ${className}`}
        style={style as any}
      >
        {this.props.children}
      </div>
    );
  }
}
