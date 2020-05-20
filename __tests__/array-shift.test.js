'use strict';
const insertShiftArray = require('../array-shift.js');

describe('Shift array', () => {
  test('It should put the passed value in the correct order in the array', () => {
    expect(insertShiftArray([2, 4, 6, 8], 5)).toStrictEqual([2, 4, 5, 6, 8]);
  });
});