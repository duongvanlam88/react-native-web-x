export const mergeClasses = (classes: (string | undefined)[]) => {
  return classes.filter((v) => v).join(' ');
};

export const extractAttributes = (object: any, keys: string[]) => {
  const result: { [key: string]: any } = {};

  keys.map((key) => {
    const value = object[key];
    if (value !== undefined && value !== null) {
      result[key] = value;
    }

    // delete key from original object
    delete object[key];
  });

  return result;
}
