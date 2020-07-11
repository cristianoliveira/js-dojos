import nestedArrayLength from '.';

describe('nestedArrayLength', () => {
  it('accepts array with one level', () => {
    expect(nestedArrayLength([])).toEqual(0);
    expect(nestedArrayLength([1])).toEqual(1);
    expect(nestedArrayLength([1, 3])).toEqual(2);
  });

  it('accepts array with 2 nested arrays', () => {
    expect(nestedArrayLength([[]])).toEqual(0);
    expect(nestedArrayLength([1, [2, 3]])).toEqual(3);
    expect(nestedArrayLength([1, [3]])).toEqual(2);
  });

  it('accepts array with 3 nested arrays', () => {
    expect(nestedArrayLength([[]])).toEqual(0);
    expect(nestedArrayLength([[], []])).toEqual(0);
    expect(nestedArrayLength([[], [], [undefined]])).toEqual(0);
    expect(nestedArrayLength([[], [], [null]])).toEqual(0);
    expect(nestedArrayLength([1, [3, [2, [4, [5]]]]])).toEqual(5);
    expect(nestedArrayLength([1, [2, 3, [3, 0]]])).toEqual(5);
  });

  it('does not count empty array or null values', () => {
    expect(nestedArrayLength([[]])).toEqual(0);
    expect(nestedArrayLength([[], []])).toEqual(0);
    expect(nestedArrayLength([[], [], [undefined]])).toEqual(0);
    expect(nestedArrayLength([[], [], [null]])).toEqual(0);
  });
});
