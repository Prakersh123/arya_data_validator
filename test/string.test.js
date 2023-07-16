const {
    isString,
    noEmpty,
    length,
    minimumLength,
    maximumLength,
    startsWith,
    endsWith,
    mustNotStartWith,
    mustNotEndWith,
    excludedChars,
    onlyAllowedChars,
  } = require('../STRING/string'); // Replace 'your-file' with the actual file name where the functions are defined
  
  // Test cases for isString function
  describe('isString', () => {
    test('should return true for valid strings', () => {
      expect(isString('hello')).toEqual({ result: true });
      expect(isString('123')).toEqual({ result: true });
      expect(isString('')).toEqual({ result: true });
    });
  
    test('should return false with error message for non-string inputs', () => {
      expect(isString(123)).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(isString(true)).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(isString(null)).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(isString(undefined)).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(isString({})).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(isString([])).toEqual({ result: false, message: 'Given input is not of string type' });
    });
  });
  
  // Test cases for noEmpty function
  describe('noEmpty', () => {
    test('should return true for non-empty strings', () => {
      expect(noEmpty('hello')).toEqual({ result: true });
      expect(noEmpty('123')).toEqual({ result: true });
    });
  
    test('should return false with error message for empty strings', () => {
      expect(noEmpty('')).toEqual({ result: false, message: 'Given string is empty' });
    });
  
    test('should return false with error message for non-string inputs', () => {
      expect(noEmpty(123)).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(noEmpty(true)).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(noEmpty(null)).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(noEmpty(undefined)).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(noEmpty({})).toEqual({ result: false, message: 'Given input is not of string type' });
      expect(noEmpty([])).toEqual({ result: false, message: 'Given input is not of string type' });
    });
  });
  
  // Test cases for length function
  describe('length', () => {
    test('should return true for strings with the specified length', () => {
      expect(length('hello', 5)).toEqual({ result: true });
      expect(length('123', 3)).toEqual({ result: true });
    });
  
    test('should return false with error message for strings with length different from the specified length', () => {
      expect(length('hello', 4)).toEqual({ result: false, message: 'Given input does not satisfy given length' });
      expect(length('123', 5)).toEqual({ result: false, message: 'Given input does not satisfy given length' });
    });
  
    test('should throw an error for non-integer length', () => {
      expect(() => length('hello', '5')).toThrow('Length must be integer value');
      expect(() => length('123', 3.5)).toThrow('Length must be integer value');
    });
  
    test('should throw an error for non-string input', () => {
      expect(() => length(123, 3)).toThrow('Input string must be of string type');
      expect(() => length(true, 5)).toThrow('Input string must be of string type');
      expect(() => length(null, 0)).toThrow('Input string must be of string type');
      expect(() => length(undefined, 2)).toThrow('Input string must be of string type');
      expect(() => length({}, 4)).toThrow('Input string must be of string type');
      expect(() => length([], 1)).toThrow('Input string must be of string type');
    });
  });
  
  // Test cases for minimumLength function
  describe('minimumLength', () => {
    test('should return true for strings with length greater than or equal to the minimum length', () => {
      expect(minimumLength('hello', 5)).toEqual({ result: true });
      expect(minimumLength('123', 3)).toEqual({ result: true });
      expect(minimumLength('hello', 4)).toEqual({ result: true });
      expect(minimumLength('123', 2)).toEqual({ result: true });
    });
  
    test('should return false with error message for strings with length less than the minimum length', () => {
      expect(minimumLength('hello', 6)).toEqual({ result: false, message: 'Given input does not satisfy minimum length' });
      expect(minimumLength('123', 4)).toEqual({ result: false, message: 'Given input does not satisfy minimum length' });
    });
  
    test('should throw an error for non-integer length', () => {
      expect(() => minimumLength('hello', '5')).toThrow('Length must be integer value');
      expect(() => minimumLength('123', 3.5)).toThrow('Length must be integer value');
    });
  
    test('should throw an error for negative length', () => {
      expect(() => minimumLength('hello', -5)).toThrow('Length can not be negative');
      expect(() => minimumLength('123', -2)).toThrow('Length can not be negative');
    });
  
    test('should throw an error for non-string input', () => {
      expect(() => minimumLength(123, 3)).toThrow('Input string must be of string type');
      expect(() => minimumLength(true, 5)).toThrow('Input string must be of string type');
      expect(() => minimumLength(null, 0)).toThrow('Input string must be of string type');
      expect(() => minimumLength(undefined, 2)).toThrow('Input string must be of string type');
      expect(() => minimumLength({}, 4)).toThrow('Input string must be of string type');
      expect(() => minimumLength([], 1)).toThrow('Input string must be of string type');
    });
  });
  
  // Test cases for maximumLength function
  describe('maximumLength', () => {
    test('should return true for strings with length less than or equal to the maximum length', () => {
      expect(maximumLength('hello', 5)).toEqual({ result: true });
      expect(maximumLength('123', 3)).toEqual({ result: true });
      expect(maximumLength('hello', 6)).toEqual({ result: true });
      expect(maximumLength('123', 4)).toEqual({ result: true });
    });
  
    test('should return false with error message for strings with length greater than the maximum length', () => {
      expect(maximumLength('hello', 4)).toEqual({ result: false, message: 'Given input does not satisfy maximum length' });
      expect(maximumLength('123', 2)).toEqual({ result: false, message: 'Given input does not satisfy maximum length' });
    });
  
    test('should throw an error for non-integer length', () => {
      expect(() => maximumLength('hello', '5')).toThrow('Length must be integer value');
      expect(() => maximumLength('123', 3.5)).toThrow('Length must be integer value');
    });
  
    test('should throw an error for negative length', () => {
      expect(() => maximumLength('hello', -5)).toThrow('Length can not be negative');
      expect(() => maximumLength('123', -2)).toThrow('Length can not be negative');
    });
  
    test('should throw an error for non-string input', () => {
      expect(() => maximumLength(123, 3)).toThrow('Input string must be of string type');
      expect(() => maximumLength(true, 5)).toThrow('Input string must be of string type');
      expect(() => maximumLength(null, 0)).toThrow('Input string must be of string type');
      expect(() => maximumLength(undefined, 2)).toThrow('Input string must be of string type');
      expect(() => maximumLength({}, 4)).toThrow('Input string must be of string type');
      expect(() => maximumLength([], 1)).toThrow('Input string must be of string type');
    });
  });
  
  // Test cases for startsWith function
  describe('startsWith', () => {
    test('should return true for strings that start with the specified characters', () => {
      expect(startsWith('hello', ['h', 'H'])).toEqual({ result: true });
      expect(startsWith('123', ['1'])).toEqual({ result: true });
      expect(startsWith('hello', [])).toEqual({ result: true });
    });
  
    test('should return false with error message for strings that do not start with the specified characters', () => {
      expect(startsWith('hello', ['e'])).toEqual({ result: false, message: 'Given string does not start with mentioned characters' });
      expect(startsWith('123', ['2', '3'])).toEqual({ result: false, message: 'Given string does not start with mentioned characters' });
    });
  
    test('should throw an error for non-string input', () => {
      expect(() => startsWith(123, ['1'])).toThrow('Input string must be of string type');
      expect(() => startsWith(true, ['t'])).toThrow('Input string must be of string type');
      expect(() => startsWith(null, ['n'])).toThrow('Input string must be of string type');
      expect(() => startsWith(undefined, ['u'])).toThrow('Input string must be of string type');
      expect(() => startsWith({}, ['{'])).toThrow('Input string must be of string type');
      expect(() => startsWith([], ['['])).toThrow('Input string must be of string type');
    });
  });
  
  // Test cases for endsWith function
  describe('endsWith', () => {
    test('should return true for strings that end with the specified characters', () => {
      expect(endsWith('hello', ['o'])).toEqual({ result: true });
      expect(endsWith('123', ['3'])).toEqual({ result: true });
      expect(endsWith('hello', [])).toEqual({ result: true });
    });
  
    test('should return false with error message for strings that do not end with the specified characters', () => {
      expect(endsWith('hello', ['l'])).toEqual({ result: false, message: 'Given string does not ends with mentioned characters' });
      expect(endsWith('123', ['1', '2'])).toEqual({ result: false, message: 'Given string does not ends with mentioned characters' });
    });
  
    test('should throw an error for non-string input', () => {
      expect(() => endsWith(123, ['3'])).toThrow('Input string must be of string type');
      expect(() => endsWith(true, ['e'])).toThrow('Input string must be of string type');
      expect(() => endsWith(null, ['l'])).toThrow('Input string must be of string type');
      expect(() => endsWith(undefined, ['d'])).toThrow('Input string must be of string type');
      expect(() => endsWith({}, ['}'])).toThrow('Input string must be of string type');
      expect(() => endsWith([], [']'])).toThrow('Input string must be of string type');
    });
  });
  
  // Test cases for mustNotStartWith function
  describe('mustNotStartWith', () => {
    test('should return true for strings that do not start with the specified characters', () => {
      expect(mustNotStartWith('hello', ['e'])).toEqual({ result: true });
      expect(mustNotStartWith('123', ['2', '3'])).toEqual({ result: true });
      expect(mustNotStartWith('hello', [])).toEqual({ result: true });
    });
  
    test('should return false with error message for strings that start with the specified characters', () => {
      expect(mustNotStartWith('hello', ['h', 'H'])).toEqual({ result: false, message: 'Given string starts with mentioned characters' });
      expect(mustNotStartWith('123', ['1'])).toEqual({ result: false, message: 'Given string starts with mentioned characters' });
    });
  
    test('should throw an error for non-string input', () => {
      expect(() => mustNotStartWith(123, ['1'])).toThrow('Input string must be of string type');
      expect(() => mustNotStartWith(true, ['t'])).toThrow('Input string must be of string type');
      expect(() => mustNotStartWith(null, ['n'])).toThrow('Input string must be of string type');
      expect(() => mustNotStartWith(undefined, ['u'])).toThrow('Input string must be of string type');
      expect(() => mustNotStartWith({}, ['{'])).toThrow('Input string must be of string type');
      expect(() => mustNotStartWith([], ['['])).toThrow('Input string must be of string type');
    });
  });
  
  // Test cases for mustNotEndWith function
  describe('mustNotEndWith', () => {
    test('should return true for strings that do not end with the specified characters', () => {
      expect(mustNotEndWith('hello', ['l'])).toEqual({ result: true });
      expect(mustNotEndWith('123', ['1', '2'])).toEqual({ result: true });
      expect(mustNotEndWith('hello', [])).toEqual({ result: true });
    });
  
    test('should return false with error message for strings that end with the specified characters', () => {
      expect(mustNotEndWith('hello', ['o'])).toEqual({ result: false, message: 'Given string ends with mentioned characters' });
      expect(mustNotEndWith('123', ['3'])).toEqual({ result: false, message: 'Given string ends with mentioned characters' });
    });
  
    test('should throw an error for non-string input', () => {
      expect(() => mustNotEndWith(123, ['3'])).toThrow('Input string must be of string type');
      expect(() => mustNotEndWith(true, ['e'])).toThrow('Input string must be of string type');
      expect(() => mustNotEndWith(null, ['l'])).toThrow('Input string must be of string type');
      expect(() => mustNotEndWith(undefined, ['d'])).toThrow('Input string must be of string type');
      expect(() => mustNotEndWith({}, ['}'])).toThrow('Input string must be of string type');
      expect(() => mustNotEndWith([], [']'])).toThrow('Input string must be of string type');
    });
  });
  
  // Test cases for excludedChars function
  describe('excludedChars', () => {
    test('should return true for strings that do not contain the specified characters', () => {
      expect(excludedChars('hello', ['a', 'b'])).toEqual({ result: true });
      expect(excludedChars('123', ['4'])).toEqual({ result: true });
      expect(excludedChars('hello', [])).toEqual({ result: true });
    });
  
    test('should return false with error message for strings that contain the specified characters', () => {
      expect(excludedChars('hello', ['h', 'o'])).toEqual({ result: false, message: 'The given string has a character that must not be present' });
      expect(excludedChars('123', ['1', '3'])).toEqual({ result: false, message: 'The given string has a character that must not be present' });
    });
  
    test('should throw an error for non-string input', () => {
      expect(() => excludedChars(123, ['1'])).toThrow('Input string must be of string type');
      expect(() => excludedChars(true, ['t'])).toThrow('Input string must be of string type');
      expect(() => excludedChars(null, ['n'])).toThrow('Input string must be of string type');
      expect(() => excludedChars(undefined, ['u'])).toThrow('Input string must be of string type');
      expect(() => excludedChars({}, ['{'])).toThrow('Input string must be of string type');
      expect(() => excludedChars([], ['['])).toThrow('Input string must be of string type');
    });
  });
  
  // Test cases for onlyAllowedChars function
  describe('onlyAllowedChars', () => {
    test('should return true for strings that contain only the specified characters', () => {
      expect(onlyAllowedChars('hello', ['h', 'e', 'l', 'o'])).toEqual({ result: true });
      expect(onlyAllowedChars('123', ['1', '2', '3'])).toEqual({ result: true });
      expect(onlyAllowedChars('hello', [])).toEqual({ result: true });
    });
  
    test('should return false with error message for strings that contain any characters other than the specified characters', () => {
      expect(onlyAllowedChars('hello', ['h', 'o'])).toEqual({ result: false, message: 'The given string has a character that must not be present' });
      expect(onlyAllowedChars('123', ['1', '3'])).toEqual({ result: false, message: 'The given string has a character that must not be present' });
    });
  
    test('should throw an error for non-string input', () => {
      expect(() => onlyAllowedChars(123, ['1'])).toThrow('Input string must be of string type');
      expect(() => onlyAllowedChars(true, ['t'])).toThrow('Input string must be of string type');
      expect(() => onlyAllowedChars(null, ['n'])).toThrow('Input string must be of string type');
      expect(() => onlyAllowedChars(undefined, ['u'])).toThrow('Input string must be of string type');
      expect(() => onlyAllowedChars({}, ['{'])).toThrow('Input string must be of string type');
      expect(() => onlyAllowedChars([], ['['])).toThrow('Input string must be of string type');
    });
  });
  