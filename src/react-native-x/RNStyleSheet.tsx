import { ImageStyle, RegisteredStyle, TextStyle, ViewStyle } from 'react-native-web-2';

export type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export class RNStyleSheet {
  public static create<T extends NamedStyles<T> | NamedStyles<any>>(styles: T): { [P in keyof T]: RegisteredStyle<T[P]> } {
    return styles as any;
  }
}
