import ceil from '../src/ceil'

test('ceil function should exist', () => {
  expect(ceil).toBeDefined();
});

// round up prices for display
test('ceil should round up number', () => {
  expect(ceil(9.99)).toBe(10);
});

test('ceil should round up number', () => {
  expect(ceil(9.99)).not.toBe(9);
});
