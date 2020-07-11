const countElements = element => {
  if (element === undefined || element === null) {
    return 0;
  }

  if (Array.isArray(element)) {
    return element.map(countElements).reduce((a, e) => a + e, 0);
  }

  return 1;
};

export default countElements;
