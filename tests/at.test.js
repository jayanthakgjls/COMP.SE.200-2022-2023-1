import at from '../src/at'

test('at function should exist', () => {
  expect(at).toBeDefined();
});

test('check child objects', () => {
  const object = { 'a': [{ 'b': { 'c': 3 } }, 4] }
  const result=at(object, ['a[0].b.c', 'a[1]']);
  expect(result[0]).toBe(3);
});
