const { isArray, noEmptyArray, maximumLength, minimumLength, length } = require('../ARRAY/array')
// Test cases for isArray function
describe('isArray', () => {
    test('should return true for valid arrays', () => {
      expect(isArray([])).toEqual({ result: true });
      expect(isArray([1, 2, 3])).toEqual({ result: true });
      expect(isArray(['a', 'b', 'c'])).toEqual({ result: true });
    });
  
    test('should return false with error message for non-array inputs', () => {
      expect(isArray('hello')).toEqual({ result: false, message: 'Given input is not of array type' });
      expect(isArray(123)).toEqual({ result: false, message: 'Given input is not of array type' });
      expect(isArray({ key: 'value' })).toEqual({ result: false, message: 'Given input is not of array type' });
    });
  });
  
  // Test cases for noEmptyArray function
  describe('noEmptyArray', () => {
    test('should return true for non-empty arrays', () => {
      expect(noEmptyArray([1, 2, 3])).toEqual({ result: true });
      expect(noEmptyArray(['a', 'b', 'c'])).toEqual({ result: true });
    });
  
    test('should return false with error message for empty arrays', () => {
      expect(noEmptyArray([])).toEqual({ result: false, message: 'Empty array is not allowed' });
    });
  
    test('should throw an error for non-array input', () => {
      expect(() => noEmptyArray('hello')).toThrow('The given data type is not array');
      expect(() => noEmptyArray(123)).toThrow('The given data type is not array');
      expect(() => noEmptyArray({ key: 'value' })).toThrow('The given data type is not array');
    });
  });
  
  // Test cases for length function
  describe('length', () => {
    test('should return true for arrays with the specified length', () => {
      expect(length([1, 2, 3], 3)).toEqual({ result: true });
      expect(length(['a', 'b', 'c'], 3)).toEqual({ result: true });
    });
  
    test('should return false with error message for arrays with different length', () => {
      expect(length([1, 2, 3], 2)).toEqual({ result: false, message: 'Wrong array length' });
      expect(length(['a', 'b', 'c'], 4)).toEqual({ result: false, message: 'Wrong array length' });
    });
  
    test('should throw an error for non-array input', () => {
      expect(() => length('hello', 5)).toThrow('The given data type is not array');
      expect(() => length(123, 3)).toThrow('The given data type is not array');
      expect(() => length({ key: 'value' }, 4)).toThrow('The given data type is not array');
    });
  });
  
  // Test cases for minimumLength function
  describe('minimumLength', () => {
    test('should return true for arrays with length greater than or equal to the minimum length', () => {
      expect(minimumLength([1, 2, 3], 2)).toEqual({ result: true });
      expect(minimumLength(['a', 'b', 'c'], 3)).toEqual({ result: true });
      expect(minimumLength([1, 2, 3], 3)).toEqual({ result: true });
    });
  
    test('should return false with error message for arrays with length less than the minimum length', () => {
      expect(minimumLength([1, 2, 3], 4)).toEqual({ result: false, message: 'Given input does not satisfy minimum length' });
      expect(minimumLength(['a', 'b', 'c'], 5)).toEqual({ result: false, message: 'Given input does not satisfy minimum length' });
    });
  
    test('should throw an error for non-integer length', () => {
      expect(() => minimumLength([1, 2, 3], '2')).toThrow('Length must be integer value');
      expect(() => minimumLength(['a', 'b', 'c'], 3.5)).toThrow('Length must be integer value');
    });
  
    test('should throw an error for negative length', () => {
      expect(() => minimumLength([1, 2, 3], -2)).toThrow('Length can not be negative');
      expect(() => minimumLength(['a', 'b', 'c'], -5)).toThrow('Length can not be negative');
    });
  
    test('should throw an error for non-array input', () => {
      expect(() => minimumLength('hello', 5)).toThrow('The given data type is not array');
      expect(() => minimumLength(123, 3)).toThrow('The given data type is not array');
      expect(() => minimumLength({ key: 'value' }, 4)).toThrow('The given data type is not array');
    });
  });
  
  // Test cases for maximumLength function
  describe('maximumLength', () => {
    test('should return true for arrays with length less than or equal to the maximum length', () => {
      expect(maximumLength([1, 2, 3], 4)).toEqual({ result: true });
      expect(maximumLength(['a', 'b', 'c'], 5)).toEqual({ result: true });
      expect(maximumLength([1, 2, 3], 3)).toEqual({ result: true });
    });
  
    test('should return false with error message for arrays with length greater than the maximum length', () => {
      expect(maximumLength([1, 2, 3], 2)).toEqual({ result: false, message: 'Given input does not satisfy maximum length' });
      expect(maximumLength(['a', 'b', 'c'], 2)).toEqual({ result: false, message: 'Given input does not satisfy maximum length' });
    });
  
    test('should throw an error for non-integer length', () => {
      expect(() => maximumLength([1, 2, 3], '4')).toThrow('Length must be integer value');
      expect(() => maximumLength(['a', 'b', 'c'], 3.5)).toThrow('Length must be integer value');
    });
  
    test('should throw an error for negative length', () => {
      expect(() => maximumLength([1, 2, 3], -4)).toThrow('Length can not be negative');
      expect(() => maximumLength(['a', 'b', 'c'], -2)).toThrow('Length can not be negative');
    });
  
    test('should throw an error for non-array input', () => {
      expect(() => maximumLength('hello', 5)).toThrow('The given data type is not array');
      expect(() => maximumLength(123, 3)).toThrow('The given data type is not array');
      expect(() => maximumLength({ key: 'value' }, 4)).toThrow('The given data type is not array');
    });
  });
  