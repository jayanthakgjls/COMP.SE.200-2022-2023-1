import get from '../src/get'

test('get should exist', () => {
  expect(get).toBeDefined();
});

// check user role
test('get should fetch data', () => {
    const user = { 'id': 1, 'name': 'Testi 1', 'role': 'producer'};
    expect(get(user, 'role')).toBe('producer');
});

test('get should fetch data', () => {
    const user = { 'id': 2, 'name': 'Testi 2', 'role': 'user'};
    expect(get(user, 'role')).not.toBe('producer');
});
