export declare const WEB_EVENT_SHOW_DIALOG = "web_event_show_dialog";
export interface RNAlertData {
    title: string;
    message: string;
    buttons?: RNButtonData[];
}
export interface RNButtonData {
    text: string;
    onPress?: () => void;
    style?: 'cancel' | 'destructive';
    options?: {
        cancelable?: boolean;
    };
}
export declare type OnAlert = (alert: RNAlertData & {
    options?: {
        cancelable?: boolean;
        autoSelect?: {
            text: string;
            afterSeconds: number;
        };
        onDismiss?: () => void;
    };
}) => void;
export declare class RNAlert {
    private static _onAlert?;
    static setOnAlert(onAlert: OnAlert): void;
    static alert(title: string, message: string, buttons?: RNButtonData[], options?: {
        cancelable?: boolean;
        autoSelect?: {
            text: string;
            afterSeconds: number;
        };
        onDismiss?: () => void;
    }): void;
}
