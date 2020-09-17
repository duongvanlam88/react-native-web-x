// Alert.alert(
//   'Alert Title',
//   'My Alert Msg',
//   [
//     {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
//     {
//       text: 'Cancel',
//       onPress: () => console.log('Cancel Pressed'),
//       style: 'cancel',
//     },
//     {text: 'OK', onPress: () => console.log('OK Pressed')},
//   ],
//   {cancelable: false},
// );

export const WEB_EVENT_SHOW_DIALOG = 'web_event_show_dialog';
// export const WEB_EVENT_HIDE_DIALOG = 'web_event_hide_dialog';

export interface RNAlertData {
  title: string;
  message: string;
  buttons?: RNButtonData[];
}

export interface RNButtonData {
  text: string;
  autoSelectAfterSeconds?: number;
  onPress?: () => void;
  style?: 'cancel' | 'destructive';
}

export type OnAlert = (alert: RNAlertData & {
  options?: {
    cancelable?: boolean,
    onDismiss?: () => void;
  }
}) => void;

export class RNAlert {
  private static _onAlert?: OnAlert;

  public static setOnAlert(onAlert: OnAlert) {
    RNAlert._onAlert = onAlert;
  }

  public static alert(title: string, message: string, buttons?: RNButtonData[], options?: {
    cancelable?: boolean,
    onDismiss?: () => void;
  }) {
    if (RNAlert._onAlert) {
      RNAlert._onAlert({
        title,
        message,
        buttons,
        options,
      });
    }
  }
}
