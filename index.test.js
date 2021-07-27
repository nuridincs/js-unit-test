const { test, expect } = require('@jest/globals');
const getTotalPrice = require('./index');

test('function will return total price correctly', () => {
  const result = getTotalPrice(100000, 20);
  expect(result).toBe('Rp. 70,000');
})

test('will retunr invalid argument', () => {
  const result = getTotalPrice('100000', '20');
  expect(result).toBe('Error, invalid argument');
})