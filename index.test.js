
const { map, filter, indexOf, reducer } = require('./index');

describe('array methods', () => {
  it('map and return newArray ', () => {
    const numsArray = [1, 2, 4, 6, 10];
    const sqaured = map(numsArray, number => number * number);
    expect(sqaured).toEqual([1, 4, 16, 36, 100]);
  });

  // it('filter and return an array ', () => {
  //   const numsArray = [1, 2, 4, 6, 10];
  //   const filtered = filter(numsArray, num => num.length < 6);
  //   expect(filtered).toEqual(expect.any(Array));
  // });

  // it('filter and return newArray ', () => {
  //   const numsArray = [1, 2, 3, 4];
  //   const evens = filter(numsArray, num => num % 2 === 0);
  //   expect(evens).toEqual([2, 4]);
  // });

  // it('filter odd numbers out ', () => {
  //   const numsArray = [1, 2, 3, 4];
  //   const odds = filter(numsArray, num => num % 3 === 0);
  //   expect(odds).toEqual([1, 3]);
  // });
});

describe('indexOf method', () => {
  it('find index', () => {
    const numsArray = [1, 2, 3, 4];
    const index = indexOf(numsArray, num => num > 2);
    expect(index).toEqual(2);
  });

  it('find no index', () => {
    const numsArray = [1, 2, 3, 4];
    const index = indexOf(numsArray, num => num > 5);
    expect(index).toEqual(-1);
  });

  describe('reduce function', () => {
    it('iterates through an array', () => {
      const numsArray = [1, 2, 3, 4];
      const callback = jest.fn();

      reducer(numsArray, callback);

      expect(callback).toHaveBeenCalledTimes(numsArray.length);
    });

    it('iterates through an array and gets result', () => {
      const numsArray = [1, 2, 3, 4];

      const sum = reducer(numsArray, (acc, item) => acc + item, 0);

      expect(sum).toEqual(10);
    });
  });

  describe('reduce function', () => {
    it('iterates through an array', () => {
      const numsArray = [1, 2, 3, 4];
      const callback = jest.fn();

      reducer(numsArray, callback);

      expect(callback).toHaveBeenCalledTimes(numsArray.length);
    });

    it('iterates through an array and gets result', () => {
      const numsArray = [1, 2, 3, 4];

      const sum = reducer(numsArray, (acc, item) => acc + item, 0);

      expect(sum).toEqual(10);
    });
  });
});
