import Field from '../app';

test('not element', () => {
  expect(() => new Field(null)).toThrowError(new Error('Элемент не существует'));
});
