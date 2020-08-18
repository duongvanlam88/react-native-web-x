export declare class RNAsyncStorage {
    static getItem(key: string, callback?: (error?: any, data?: string | null) => void): Promise<string | null>;
    static setItem(key: string, value: string): Promise<void>;
    static multiGet(keys: string[], callback?: (errors?: any[], result?: Array<[string, string]>) => void): Promise<Array<[string, string]>>;
    static removeItem(key: string): Promise<void>;
}
