const sevenBoom = arr => {
  const result = arr.find(e => `${e}`.includes('7'));
  return result ? 'Boom!' : 'there is no 7 in the array';
};

export default sevenBoom;
