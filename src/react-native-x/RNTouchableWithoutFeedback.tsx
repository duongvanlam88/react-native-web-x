import $ from 'jquery';
import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web-2';

export interface RNTouchableWithoutFeedbackProps {
  className?: string;
  onPress?: (event: any) => void;
  onLongPress?: (event: any) => void; /* Does not support yet */
  onPressIn?: (event: any) => void;
  onPressOut?: (event: any) => void;
  delayPressIn?: number; /* Does not support yet */
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export class RNTouchableWithoutFeedback extends React.Component<RNTouchableWithoutFeedbackProps> {
  public componentRef: HTMLDivElement | null;

  public touchableHandlePress(event: any) {
    if (this.componentRef) {
      $(this.componentRef).trigger('click');
    }
  }

  public render() {
    const { className = '', onPress, onPressIn, onPressOut, disabled, style } = this.props;

    return (
      <div
        ref={(node) => this.componentRef = node}
        className={`TouchableWithoutFeedback ${className}`}
        onClick={(!disabled) ? onPress : undefined}
        onMouseDown={(!disabled) ? onPressIn : undefined}
        onMouseUp={(!disabled) ? onPressOut : undefined}
        style={style as any}
      >
        {this.props.children}
      </div>
    );
  }
}
