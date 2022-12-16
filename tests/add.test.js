import add from '../src/add'

test('add function should exist', () => {
  expect(add).toBeDefined();
});

// add 2 prices
test('add 2 positive numbers', () => {
  expect(add(10, 20)).toBe(30);
});

// add 2 prices
test('add 2 positive numbers', () => {
  expect(add(10, 20)).not.toBe(10);
});

// add price with product price 0
test('add a number with 0', () => {
  const num = 10;
  expect(add(num, 0)).toBe(num);
});

// add discount price
test('add a positive number with a negative number', () => {
  expect(add(10, -10)).toBe(0);
});
