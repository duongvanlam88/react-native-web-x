export declare const WEB_EVENT_SHOW_DIALOG = "web_event_show_dialog";
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
export declare type OnAlert = (alert: RNAlertData & {
    options?: {
        cancelable?: boolean;
        onDismiss?: () => void;
    };
}) => void;
export declare class RNAlert {
    private static _onAlert?;
    static setOnAlert(onAlert: OnAlert): void;
    static alert(title: string, message: string, buttons?: RNButtonData[], options?: {
        cancelable?: boolean;
        onDismiss?: () => void;
    }): void;
}
