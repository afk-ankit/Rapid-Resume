export const handleIsValid = (savedData, val1, val2) => {
  if (savedData) {
    return val2;
  }
  return val1 && val2;
};
