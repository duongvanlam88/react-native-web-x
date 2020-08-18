/// <reference types="react" />
import React from 'react';
import { KeyboardTypeOptions, MeasureInWindowOnSuccessCallback, NativeSyntheticEvent, StyleProp, TextInputFocusEventData, TextStyle } from '../react-native-web-x';
export interface RNTextInputProps {
    className?: string;
    selectionColor?: string;
    keyboardType?: KeyboardTypeOptions;
    placeholder?: string;
    placeholderTextColor?: string;
    multiline?: boolean;
    autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
    autoFocus?: boolean;
    scrollEnabled?: boolean;
    maxLength?: number;
    onChangeText?: (value: string) => void;
    onBlur?: (event: NativeSyntheticEvent<TextInputFocusEventData>) => void;
    value?: string;
    style?: StyleProp<TextStyle>;
}
export declare class RNTextInput extends React.Component<RNTextInputProps> {
    inputRef?: HTMLInputElement | null;
    constructor(props: RNTextInputProps);
    handleChange(event: React.ChangeEvent<HTMLInputElement>): void;
    focus(): void;
    blur(): void;
    measureInWindow(callback: MeasureInWindowOnSuccessCallback): void;
    render(): JSX.Element;
}
