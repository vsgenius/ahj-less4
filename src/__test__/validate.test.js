import { isValid } from '../js/validate';
test('should be Visa', () => {
  const result = isValid(4485539580670324);
  expect(result).toBe('visa');
});
test('should be Visa2', () => {
  const result = isValid(4532615267130510);
  expect(result).toBe('visa');
});
test('should be Visa3', () => {
  const result = isValid(4539925571398988332);
  expect(result).toBe('visa');
});
test('should be MC', () => {
  const result = isValid(5582738364839910);
  expect(result).toBe('mastercard');
});
test('should be MC2', () => {
  const result = isValid(2720980948233918);
  expect(result).toBe('mastercard');
});
test('should be mir', () => {
  const result = isValid(2200990948233918);
  expect(result).toBe('mir');
});
test('should be false', () => {
  const result = isValid(220099094823);
  expect(result).toBe(false);
});
test('should be false', () => {
  const result = isValid(3200990948233918);
  expect(result).toBe(false);
});