import React from 'react';
import { KeyboardTypeOptions, MeasureInWindowOnSuccessCallback, NativeSyntheticEvent, StyleProp, TextInputFocusEventData, TextStyle } from 'react-native-web';

export interface RNTextInputProps {
  className?: string;
  selectionColor?: string; // Don't support yet
  keyboardType?: KeyboardTypeOptions; // Don't support yet
  placeholder?: string;
  placeholderTextColor?: string; // Don't support yet
  multiline?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoFocus?: boolean;
  scrollEnabled?: boolean; // Don't support yet
  maxLength?: number;
  onChangeText?: (value: string) => void;
  onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
  value?: string;
  style?: StyleProp<TextStyle>;
}

export class RNTextInput extends React.Component<RNTextInputProps> {
  public inputRef?: HTMLInputElement | null;

  constructor(props: RNTextInputProps) {
    super(props);

    // we should NOT use @bind here, because it will cause circular dependency
    this.handleChange = this.handleChange.bind(this);
  }

  public handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    const { onChangeText } = this.props;

    if (onChangeText) {
      onChangeText(event.target.value);
    }
  }

  public focus() {
    if (this.inputRef) {
      this.inputRef.focus();
    }
  }

  public blur() {
    if (this.inputRef) {
      this.inputRef.blur();
    }
  }

  // Don't support yet
  public measureInWindow(callback: MeasureInWindowOnSuccessCallback) {
    // Don't support yet
  }

  public render() {
    const { className = '', placeholder, multiline, autoCapitalize, autoFocus, maxLength, onBlur, value, style } = this.props;

    return (
      <input
        ref={(node) => this.inputRef = node}
        className={`TextInput ${className}`}
        placeholder={placeholder}
        multiple={multiline}
        autoCapitalize={autoCapitalize}
        autoFocus={autoFocus}
        maxLength={maxLength}
        onChange={this.handleChange}
        onBlur={onBlur as any} // TODO
        value={value}
        style={style as any}
      />
    );
  }
}
