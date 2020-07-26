//
export default (arr, initIndex, amountOfItems = 1) => {
  if (!arr.length) {
    return [];
  }

  const arrMaxIndex = arr.length;

  const init = initIndex % arrMaxIndex;
  const end = amountOfItems % arrMaxIndex;

  const slice = arr.slice(init, init + end);
  return slice;
};
