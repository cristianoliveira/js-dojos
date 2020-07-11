import sevenBoom from '.';

describe('sevenBoom', () => {
  describe('returns Boom! when a given array contains the number 7', () => {
    it('works in numbers from 1-10', () => {
      expect(sevenBoom([7])).toEqual('Boom!');
      expect(sevenBoom([2, 3, 5, 6, 7])).toEqual('Boom!');
      expect(sevenBoom([2, 7, 3, 5, 6])).toEqual('Boom!');
    });

    it('works in numbers from 10-99', () => {
      expect(sevenBoom([17])).toEqual('Boom!');
      expect(sevenBoom([1, 39, 22, 77])).toEqual('Boom!');
      expect(sevenBoom([1, 39, 22, 97])).toEqual('Boom!');
    });

    it('works in big numbers', () => {
      expect(sevenBoom([12123123137])).toEqual('Boom!');
      expect(sevenBoom([14324234234, 3923131, 2212313, 71231313])).toEqual(
        'Boom!'
      );
    });
  });

  describe('returns "there is no 7 in the array" when no num 7 is found', () => {
    it('works in numbers from 1-10', () => {
      expect(sevenBoom([2, 3, 5, 6, 1, 5])).toEqual(
        'there is no 7 in the array'
      );
      expect(sevenBoom([2, 3, 5, 6])).toEqual('there is no 7 in the array');
      expect(sevenBoom([3])).toEqual('there is no 7 in the array');
    });

    it('works in numbers from 10-99', () => {
      expect(sevenBoom([13])).toEqual('there is no 7 in the array');
      expect(sevenBoom([1, 39, 22, 34])).toEqual('there is no 7 in the array');
      expect(sevenBoom([1, 39, 22, 99])).toEqual('there is no 7 in the array');
    });
  });
});
