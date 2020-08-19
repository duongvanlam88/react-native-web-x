import { ImageStyle, RegisteredStyle, TextStyle, ViewStyle } from 'react-native-web';
export declare type NamedStyles<T> = {
    [P in keyof T]: ViewStyle | TextStyle | ImageStyle;
};
export declare class RNStyleSheet {
    static create<T extends NamedStyles<T> | NamedStyles<any>>(styles: T): {
        [P in keyof T]: RegisteredStyle<T[P]>;
    };
}
