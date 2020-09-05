import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web';
import { extractAttributes, mergeClasses } from './utils';

export interface RNScrollViewProps {
  className?: string;
  keyboardDismissMode?: 'interactive'; // Don't support yet
  keyboardShouldPersistTaps?: 'handled'; // Don't support yet
  horizontal?: boolean; // Don't support yet
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}

export class RNScrollView extends React.Component<RNScrollViewProps> {
  public scrollTo(y?: number | { x?: number; y?: number; animated?: boolean }, x?: number, animated?: boolean) {
    // Don't support yet
  }

  public render() {
    const { className, style, contentContainerStyle } = this.props;
    const additionalContentContainerStyle = extractAttributes(style, [
      'padding',
      'paddingTop',
      'paddingBottom',
      'paddingLeft',
      'paddingRight',
      'paddingHorizontal',
      'paddingVertical',
      'paddingStart',
      'paddingEnd',
    ]);

    return (
      <div
        className={mergeClasses([
          'ScrollView',
          className,
        ])}
        style={style as any}
      >
        <div
          className="ScrollView-content"
          style={{
            ...additionalContentContainerStyle,
            ...(contentContainerStyle || {}) as any,
          }}
        >
          {this.props.children}
        </div>
        <div className="ScrollView-topOverlay" />
        <div className="ScrollView-bottomOverlay" />
      </div>
    );
  }
}
