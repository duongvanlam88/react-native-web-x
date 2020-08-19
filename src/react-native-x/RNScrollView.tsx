import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web-2';

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
    const { className = '', style, contentContainerStyle } = this.props;
    const finalStyle = (style) ? { ...style as any } : {};
    const finalContentStyle = {
      ...((finalStyle.padding !== undefined) ? { padding: finalStyle.padding } : {}),
      ...((finalStyle.paddingTop !== undefined) ? { paddingTop: finalStyle.paddingTop } : {}),
      ...((finalStyle.paddingBottom !== undefined) ? { paddingBottom: finalStyle.paddingBottom } : {}),
      ...((finalStyle.paddingLeft !== undefined) ? { paddingLeft: finalStyle.paddingLeft } : {}),
      ...((finalStyle.paddingRight !== undefined) ? { paddingRight: finalStyle.paddingRight } : {}),
    };

    delete finalStyle.padding;
    delete finalStyle.paddingTop;
    delete finalStyle.paddingBottom;
    delete finalStyle.paddingLeft;
    delete finalStyle.paddingRight;

    return (
      <div
        className={`ScrollView ${className}`}
        style={finalStyle as any}
      >
        <div
          className="ScrollView-content"
          style={{
            ...finalContentStyle,
            ...(contentContainerStyle as any || {}),
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
