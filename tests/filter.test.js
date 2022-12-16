import filter from '../src/filter'

test('filter should exist', () => {
  expect(filter).toBeDefined();
});

// filter product by id
test('filter should filter by id', () => {
  const products = [
    { 'id': 1, 'name': 'Rice' },
    { 'id': 2, 'name': 'Noodle' }
  ]
  expect(filter(products, ({ id }) => id == 1)).toEqual([{ 'id': 1, 'name': 'Rice' }]);
});

// filter product by name
test('filter should filter by name', () => {
  const products = [
    { 'id': 1, 'name': 'Rice' },
    { 'id': 2, 'name': 'Noodle' }
  ]
  expect(filter(products, ({ name }) => name == 'Soup')).toEqual([[]]);
});

test('filter should filter by name', () => {
  const products = [
    { 'id': 1, 'name': 'Rice' },
    { 'id': 2, 'name': 'Noodle' }
  ]
  expect(filter(products, ({ name }) => name == 'Noodle')).toEqual([{ 'id': 2, 'name': 'Noodle' }]);
});

test('filter should filter by name', () => {
  const products = [
    { 'id': 1, 'name': 'Rice' },
    { 'id': 2, 'name': 'Noodle' }
  ]
  expect(filter(products, ({ name }) => name == 'Noodle')).toEqual([{ 'id': 2, 'name': 'Noodle' }]);
});

test('filter should filter by name', () => {
  const products = [
    { 'id': 1, 'name': 'Rice', 'producer': 'Pirkka' },
    { 'id': 2, 'name': 'Milk','producer': 'Arla' }
  ]
  expect(filter(products, ({ producer }) => producer == 'Pirkka')).toEqual([{ 'id': 1, 'name': 'Rice',  'producer': 'Pirkka' }]);
});
