import $ from 'jquery';
import React, { MouseEvent } from 'react';
import { StyleProp, ViewStyle } from 'react-native-web';

export interface RNTouchableOpacityProps {
  className?: string;
  to?: string; // redirect using `url` for webapp only
  onPress?: (event: any) => void;
  onLongPress?: (event: any) => void; /* Does not support yet */
  delayPressIn?: number; /* Does not support yet */
  disabled?: boolean;
  style?: StyleProp<ViewStyle>;
}

export class RNTouchableOpacity extends React.Component<RNTouchableOpacityProps> {
  private componentRef: HTMLElement | null;

  constructor(props: RNTouchableOpacityProps) {
    super(props);

    // we should NOT use @bind here, because it will cause circular dependency
    this.handleOnClick = this.handleOnClick.bind(this);
  }

  public touchableHandlePress(event: any) {
    if (this.componentRef) {
      $(this.componentRef).trigger('click');
    }
  }

  public handleOnClick(event: MouseEvent<HTMLElement>) {
    const { to, onPress, disabled } = this.props;

    // skip if disabled
    if (disabled) {
      return false;
    }

    if (to) {
      const { ctrlKey, metaKey } = event;
      const isMac = /(Mac|iPad)/i.test(navigator.platform);
      if ((isMac && metaKey)
        || ctrlKey) {
        // We don't process this event and
        // use href to open link in new window
        return true;
      }
    }

    // prevent default
    event.preventDefault();

    // stop proppagation
    event.stopPropagation();

    // use a tag's href if no onPress
    if (!onPress && to) {
      // TODO
      // NavigationUtils.openScreenByUrl(to);
    }

    // call onPress
    if (onPress) {
      onPress(event);
    }
    return false;
  }

  public render() {
    const { className = '', to, disabled, style = {} } = this.props;
    const { backgroundColor } = style as any;
    console.log('RNTouchableOpacity');

    if (to && !disabled) {
      return (
        <a
          ref={(node) => this.componentRef = node}
          className={`TouchableOpacity ${className} ${(disabled) ? 'disabled' : ''}`}
          href={to}
          // onMouseEnter={() => Router.prefetch(to)}
          onKeyPress={(event) => {
            if (event.which === 13) {
              this.handleOnClick(event as any);
            }
          }}
          onClick={this.handleOnClick}
          style={{
            ...style as any,
            ...(backgroundColor ? { background: backgroundColor } : {}),
          }}
        >
          {this.props.children}
        </a>
      );
    } else {
      return (
        <div
          ref={(node) => this.componentRef = node}
          className={`TouchableOpacity ${className} ${(disabled) ? 'disabled' : ''}`}
          tabIndex={0}
          onKeyPress={(event) => {
            if (event.which === 13) {
              this.handleOnClick(event as any);
            }
          }}
          onClick={this.handleOnClick}
          style={{
            ...style as any,
            ...(backgroundColor ? { background: backgroundColor } : {}),
          }}
        >
          {this.props.children}
        </div>
      );
    }
  }
}
