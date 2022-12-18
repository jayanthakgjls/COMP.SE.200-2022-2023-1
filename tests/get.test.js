import get from '../src/get'

test('get should exist', () => {
  expect(get).toBeDefined();
});

let users = [];
describe("users array", () => {
    beforeEach(() => {
        users = [
            { 'id': 1, 'name': 'Testi 1', 'role': 'producer'},
            { 'id': 2, 'name': 'Testi 2', 'role': 'user'}
        ];
    });
    it('should get user by role', () => {
        expect(get(users[0], 'role')).toBe('producer');
    });
    it('should get user by role', () => {
        expect(get(users[1], 'role')).not.toBe('producer');
    });
});
