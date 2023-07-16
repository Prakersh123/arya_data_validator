const {
  isNumber,
  isInteger,
  minimumValue,
  maximumValue,
  notEqualTo,
  equalsTo,
  onlyPositive,
  onlyNegative,
  maxLength,
  minLength,
  exactLength,
} = require('../NUMBER/number'); // Replace 'your-file' with the actual file name where the functions are defined

// Test cases for isNumber function
describe('isNumber', () => {
  test('should return true for valid numbers', () => {
    expect(isNumber(5)).toEqual({ result: true });
    expect(isNumber(3.14)).toEqual({ result: true });
    expect(isNumber(-10)).toEqual({ result: true });
  });

  test('should return false with error message for non-number inputs', () => {
    expect(isNumber('123')).toEqual({ result: false, message: 'Given data is not a number' });
    expect(isNumber(null)).toEqual({ result: false, message: 'Given data is not a number' });
    expect(isNumber(undefined)).toEqual({ result: false, message: 'Given data is not a number' });
    expect(isNumber(NaN)).toEqual({ result: false, message: 'Given data is not a number' });
    expect(isNumber(true)).toEqual({ result: false, message: 'Given data is not a number' });
    expect(isNumber(false)).toEqual({ result: false, message: 'Given data is not a number' });
    expect(isNumber([])).toEqual({ result: false, message: 'Given data is not a number' });
    expect(isNumber({})).toEqual({ result: false, message: 'Given data is not a number' });
  });
});

// Test cases for isInteger function
describe('isInteger', () => {
  test('should return true for valid integers', () => {
    expect(isInteger(5)).toEqual({ result: true });
    expect(isInteger(0)).toEqual({ result: true });
    expect(isInteger(-10)).toEqual({ result: true });
  });

  test('should return false with error message for non-integer inputs', () => {
    expect(isInteger(3.14)).toEqual({ result: false, message: 'Given data is not integer' });
    expect(isInteger('123')).toEqual({ result: false, message: 'Given data is not integer' });
    expect(isInteger(null)).toEqual({ result: false, message: 'Given data is not integer' });
    expect(isInteger(undefined)).toEqual({ result: false, message: 'Given data is not integer' });
    expect(isInteger(NaN)).toEqual({ result: false, message: 'Given data is not integer' });
    expect(isInteger(true)).toEqual({ result: false, message: 'Given data is not integer' });
    expect(isInteger(false)).toEqual({ result: false, message: 'Given data is not integer' });
    expect(isInteger([])).toEqual({ result: false, message: 'Given data is not integer' });
    expect(isInteger({})).toEqual({ result: false, message: 'Given data is not integer' });
  });
});

// Test cases for minimumValue function
describe('minimumValue', () => {
  test('should return true for values greater than or equal to the minimum value', () => {
    expect(minimumValue(5, 3)).toEqual({ result: true });
    expect(minimumValue(0, -10)).toEqual({ result: true });
    expect(minimumValue(-5, -10)).toEqual({ result: true });
  });

  test('should return false with error message for values less than the minimum value', () => {
    expect(minimumValue(3, 5)).toEqual({ result: false, message: 'Given data is less than minimum value' });
    expect(minimumValue(-10, 0)).toEqual({ result: false, message: 'Given data is less than minimum value' });
  });
});

// Test cases for maximumValue function
describe('maximumValue', () => {
  test('should return true for values less than or equal to the maximum value', () => {
    expect(maximumValue(5, 10)).toEqual({ result: true });
    expect(maximumValue(0, 10)).toEqual({ result: true });
    expect(maximumValue(-5, -2)).toEqual({ result: true });
  });

  test('should return false with error message for values greater than the maximum value', () => {
    expect(maximumValue(10, 5)).toEqual({ result: false, message: 'Given value is greater than maximum value' });
    expect(maximumValue(5, 0)).toEqual({ result: false, message: 'Given value is greater than maximum value' });
  });
});

// Test cases for notEqualTo function
describe('notEqualTo', () => {
  test('should return true for values not equal to the notEqualValues', () => {
    expect(notEqualTo(5, [3, 7, 9])).toEqual({ result: true });
    expect(notEqualTo('abc', ['xyz', 'def'])).toEqual({ result: true });
  });

  test('should return false with error message for values equal to any of the notEqualValues', () => {
    expect(notEqualTo(5, [3, 5, 9])).toEqual({ result: false, message: 'Given data value is not allowed' });
    expect(notEqualTo('abc', ['xyz', 'abc'])).toEqual({ result: false, message: 'Given data value is not allowed' });
  });
});

// Test cases for equalsTo function
describe('equalsTo', () => {
  test('should return true for values equal to any of the equalValues', () => {
    expect(equalsTo(5, [3, 5, 9])).toEqual({ result: true });
    expect(equalsTo('abc', ['xyz', 'abc'])).toEqual({ result: true });
  });

  test('should return false with error message for values not equal to any of the equalValues', () => {
    expect(equalsTo(5, [3, 7, 9])).toEqual({ result: false, message: 'Given data value is not allowed' });
    expect(equalsTo('abc', ['xyz', 'def'])).toEqual({ result: false, message: 'Given data value is not allowed' });
  });
});

// Test cases for onlyPositive function
describe('onlyPositive', () => {
  test('should return true for positive values', () => {
    expect(onlyPositive(5)).toEqual({ result: true });
    expect(onlyPositive(0)).toEqual({ result: true });
  });

  test('should return false with error message for non-positive values', () => {
    expect(onlyPositive(-5)).toEqual({ result: false, message: 'Given data must be positive value only' });
    expect(onlyPositive(-10)).toEqual({ result: false, message: 'Given data must be positive value only' });
  });
});

// Test cases for onlyNegative function
describe('onlyNegative', () => {
  test('should return true for negative values', () => {
    expect(onlyNegative(-5)).toEqual({ result: true });
  });

  test('should return false with error message for non-negative values', () => {
    expect(onlyNegative(0)).toEqual({ result: false, message: 'Given data must be negative value only' });
    expect(onlyNegative(5)).toEqual({ result: false, message: 'Given data must be negative value only' });
    expect(onlyNegative(10)).toEqual({ result: false, message: 'Given data must be negative value only' });
  });
});

// Test cases for maxLength function
describe('maxLength', () => {
  test('should return true for values with length less than or equal to numberOfDigits', () => {
    expect(maxLength(123, 3)).toEqual({ result: true });
    expect(maxLength(0, 2)).toEqual({ result: true });
    expect(maxLength(-5, 4)).toEqual({ result: true });
  });

  test('should return false with error message for values with length greater than numberOfDigits', () => {
    expect(maxLength(123, 2)).toEqual({ result: false, message: 'Given data does not follow maxLength constraint' });
  });
});

// Test cases for minLength function
describe('minLength', () => {
  test('should return true for values with length greater than or equal to numberOfDigits', () => {
    expect(minLength(123, 2)).toEqual({ result: true });
    expect(minLength(0, 0)).toEqual({ result: true });
    expect(minLength(-5, 1)).toEqual({ result: true });
  });

  test('should return false with error message for values with length less than numberOfDigits', () => {
    expect(minLength(123, 4)).toEqual({ result: false, message: 'Given data does not follow minLength constraint' });
    expect(minLength(0, 2)).toEqual({ result: false, message: 'Given data does not follow minLength constraint' });
  });
});

// Test cases for exactLength function
describe('exactLength', () => {
  test('should return true for values with exact length equal to the specified exactLength', () => {
    expect(exactLength(123, 3)).toEqual({ result: true });
    expect(exactLength(0, 1)).toEqual({ result: true });
    expect(exactLength(-5, 2)).toEqual({ result: true });
  });

  test('should return false with error message for values with length not equal to the specified exactLength', () => {
    expect(exactLength(123, 2)).toEqual({ result: false, message: 'Given data does not follow exact length constraint' });
    expect(exactLength(0, 0)).toEqual({ result: false, message: 'Given data does not follow exact length constraint' });
  });
});
