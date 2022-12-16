import isEmpty from '../src/isEmpty'

test('isEmpty should exist', () => {
  expect(isEmpty).toBeDefined();
});

test('isEmpty should check if an empty array is empty', () => {
  expect(isEmpty([])).toBeTruthy();
});

test('isEmpty should check if an array is empty', () => {
  expect(isEmpty([1, 2, 3])).toBeFalsy();
});

test('isEmpty should check if an object is empty', () => {
  const item = { 'id': 1, 'name': 'Rice', 'quantity': 1};
  expect(isEmpty(item)).toBeFalsy();
});

test('isEmpty should check if an empty object is empty', () => {
  expect(isEmpty({})).toBeTruthy();
});

test('isEmpty should check if a string is empty', () => {
  expect(isEmpty("")).toBeTruthy();
});
