import React from 'react';
import { ImageStyle, StyleProp } from '../react-native-web-x';

export interface RNImageProps {
  className?: string;
  resizeMode?: 'contain' | 'cover' | 'stretch';
  source?: { uri?: string };
  onLoadEnd?: () => void;
  style?: StyleProp<ImageStyle>;
}

export class RNImage extends React.Component<RNImageProps> {
  public componentDidMount() {
    const { onLoadEnd } = this.props;
    if (onLoadEnd) {
      setTimeout(() => onLoadEnd!(), 100);
    }
  }

  public render() {
    const { className = '', source, style } = this.props;
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
        className={`Image ${className}`}
        style={style as any}
      >
        <div style={{
          width: '100%',
          height: '100%',
          backgroundImage: (source && source.uri && source.uri !== 'undefined') ? `url('${source.uri}')` : undefined,
          backgroundSize,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
        }} />
      </div>
    );
  }
}
