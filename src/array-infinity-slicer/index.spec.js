import slicer from '.';

describe('slicer', () => {
  it('returns empty array when a empty array is given', () => {
    expect(slicer([])).toEqual([]);
  });

  describe('when receive positive indexes', () => {
    it('returns the slice of a give init index', () => {
      expect(slicer([1, 2, 3, 4, 5], 0)).toEqual([1]);
      expect(slicer([1, 2, 3, 4, 5], 2)).toEqual([3]);
      expect(slicer([1, 2, 3, 4, 5], 0, 2)).toEqual([1, 2]);
      expect(slicer([1, 2, 3, 4, 5], 0, 4)).toEqual([1, 2, 3, 4]);
    });

    it('accepts indexes out of the array range', () => {
      // arr.length is  5
      //
      // init is 5
      // expected index 0
      //
      // init is 7
      // expected index 2
      //
      expect(slicer([1, 2, 3, 4, 5], 5, 1)).toEqual([1]);
      expect(slicer([1, 2, 3, 4, 5], 7)).toEqual([3]);
      expect(slicer([1, 2, 3, 4, 5], 0, 2)).toEqual([1, 2]);
      expect(slicer([1, 2, 3, 4, 5], 0, 4)).toEqual([1, 2, 3, 4]);
    });
  });
});
