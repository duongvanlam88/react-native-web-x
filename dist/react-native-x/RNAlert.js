"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WEB_EVENT_SHOW_DIALOG = 'web_event_show_dialog';
class RNAlert {
    static setOnAlert(onAlert) {
        RNAlert._onAlert = onAlert;
    }
    static alert(title, message, buttons, options) {
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
exports.RNAlert = RNAlert;
