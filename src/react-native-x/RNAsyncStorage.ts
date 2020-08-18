export class RNAsyncStorage {
  public static getItem(key: string, callback?: (error?: any, data?: string | null) => void): Promise<string | null> {
    const value = localStorage.getItem(key);
    if (callback) {
      callback(undefined, value);
    }
    return Promise.resolve(value);
  }

  public static setItem(key: string, value: string): Promise<void> {
    return Promise.resolve(localStorage.setItem(key, value));
  }

  public static multiGet(keys: string[], callback?: (errors?: any[], result?: Array<[string, string]>) => void): Promise<Array<[string, string]>> {
    const result: Array<[string, string]> = [];

    keys.map((key) => {
      const value = localStorage.getItem(key);
      if (value !== null) {
        result.push([key, value]);
      }
    });

    if (callback) {
      callback(undefined, result);
    }
    return Promise.resolve(result);
  }

  public static removeItem(key: string) {
    return Promise.resolve(localStorage.removeItem(key));
  }
}
