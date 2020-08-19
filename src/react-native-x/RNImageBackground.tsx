import React from 'react';
import { StyleProp, ViewStyle } from 'react-native-web-2';

export interface RNImageBackgroundProps {
  className?: string;
  resizeMode?: 'contain' | 'cover' | 'stretch' | 'repeat';
  source?: { uri?: string };
  style?: StyleProp<ViewStyle>;
}

export class RNImageBackground extends React.Component<RNImageBackgroundProps> {
  public render() {
    const { className = '', source, children, style } = this.props;
    let { resizeMode } = this.props;
    resizeMode = (resizeMode)
      ?
      resizeMode
      :
      (style) ? (style as any).resizeMode : undefined;

    // transform resizeMode to css backgroundSize
    const backgroundSize = (resizeMode === 'stretch') ? '100% 100%' : resizeMode || 'cover';

    return (
      <div
        className={`ImageBackground ${className}`}
        style={style as any}
      >
        <div style={{
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0,
          left: 0,
          backgroundImage: (source && source.uri && source.uri !== 'undefined') ? `url('${source.uri}')` : undefined,
          backgroundSize,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          zIndex: -1,
        }} />
        {children}
      </div>
    );
  }
}
