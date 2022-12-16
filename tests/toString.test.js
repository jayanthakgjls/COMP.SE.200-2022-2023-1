import toString from '../src/toString'

test('toString function should exist', () => {
  expect(toString).toBeDefined();
});

// display price to string format with currency
test('toString should display price in string format', () => {
  const price = 100;
  const currency = 'EUR';
  expect(toString(price + " " + currency)).toBe('100 EUR');
});
