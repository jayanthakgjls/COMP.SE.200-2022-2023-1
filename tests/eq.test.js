import eq from '../src/eq'

test('eq function should exist', () => {
  expect(eq).toBeDefined();
});

// check if password is correct
test('eq should check if 2 strings are equal', () => {
  const pwd = '12345678'
  const savedPwd = '12345678'
  expect(eq(pwd, savedPwd)).toBeTruthy()
});

test('eq should check if 2 different strings are not equal', () => {
  const pwd = '12345678'
  const savedPwd = '123456789'
  expect(eq(pwd, savedPwd)).toBeFalsy()
});
