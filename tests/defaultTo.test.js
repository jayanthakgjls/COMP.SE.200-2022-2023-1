import defaultTo from '../src/defaultTo'

test('defaultTo function should exist', () => {
  expect(defaultTo).toBeDefined();
});

// get default value of undefined number of stock quantity and category
test('defaultTo function should return default value of stock quantity instead of null', () => {
  expect(defaultTo(null, 1)).toEqual(1);
});

test('defaultTo function should return default value of stock quantity instead of undefined', () => {
  expect(defaultTo(undefined, 1)).toEqual(1);
});

test('defaultTo function should return default value of category instead null', () => {
  expect(defaultTo(null, 'Other')).toEqual('Other');
});

test('defaultTo function should return default value of category instead undefined', () => {
  expect(defaultTo(undefined, 'Other')).toEqual('Other');
});

