'use strict';

const binarySearch = require('../array-binary-search.js');

describe('Array-Binary search', () => {
  test('It should return the index of the search key in the passed array', () => {
    expect(binarySearch([4,8,15,16,23,42],15)).toStrictEqual(2);
  });
  test('It should return -1 if the search key is not in the array', () => {
    expect(binarySearch([11,22,33,44,55,66,77], 90)).toStrictEqual(-1);
  });
});