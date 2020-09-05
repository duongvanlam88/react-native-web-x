export const mergeClasses = (classes: (string | undefined)[]) => {
  return classes.filter((v) => v).join(' ');
};
