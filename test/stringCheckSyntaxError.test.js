const { checkSyntaxError } = require('../STRING/stringValidation');

describe('checkSyntaxError', () => {
  test('should return true for valid key-value pairs', () => {
    expect(checkSyntaxError({ noEmpty: true }, 'noEmpty')).toEqual({ result: true });
    expect(checkSyntaxError({ length: 10 }, 'length')).toEqual({ result: true });
    expect(checkSyntaxError({ maximumLength: 5 }, 'maximumLength')).toEqual({ result: true });
    expect(checkSyntaxError({ minimumLength: 3 }, 'minimumLength')).toEqual({ result: true });
    expect(checkSyntaxError({ onlyAllowedChars: ['a', 'b', 'c'] }, 'onlyAllowedChars')).toEqual({ result: true });
    expect(checkSyntaxError({ excludedChars: ['x', 'y', 'z'] }, 'excludedChars')).toEqual({ result: true });
    expect(checkSyntaxError({ startsWith: ['a', 'b', 'c'] }, 'startsWith')).toEqual({ result: true });
    expect(checkSyntaxError({ endsWith: ['x', 'y', 'z'] }, 'endsWith')).toEqual({ result: true });
    expect(checkSyntaxError({ mustNotStartWith: ['a', 'b', 'c'] }, 'mustNotStartWith')).toEqual({ result: true });
    expect(checkSyntaxError({ mustNotEndWith: ['x', 'y', 'z'] }, 'mustNotEndWith')).toEqual({ result: true });
  });

  test('should return false with error message for invalid values', () => {
    expect(checkSyntaxError({ noEmpty: 'true' }, 'noEmpty')).toEqual({ result: false, message: 'Incorrect value provided to noEmpty' });
    expect(checkSyntaxError({ length: -10 }, 'length')).toEqual({ result: false, message: 'Incorrect value provided to length' });
    expect(checkSyntaxError({ maximumLength: -5 }, 'maximumLength')).toEqual({ result: false, message: 'Incorrect value provided to maximumLength' });
    expect(checkSyntaxError({ minimumLength: -3 }, 'minimumLength')).toEqual({ result: false, message: 'Incorrect value provided to minimumLength' });
    expect(checkSyntaxError({ onlyAllowedChars: ['abc'] }, 'onlyAllowedChars')).toEqual({ result: false, message: 'Each value of onlyAllowedChars array must be a char' });
    expect(checkSyntaxError({ excludedChars: ['xyz'] }, 'excludedChars')).toEqual({ result: false, message: 'Each value of excludedChars array must be a char' });
    expect(checkSyntaxError({ startsWith: ['abc'] }, 'startsWith')).toEqual({ result: false, message: 'Each value of startsWith array must be a char' });
    expect(checkSyntaxError({ endsWith: ['xyz'] }, 'endsWith')).toEqual({ result: false, message: 'Each value of endsWith array must be a char' });
    expect(checkSyntaxError({ mustNotStartWith: ['abc'] }, 'mustNotStartWith')).toEqual({ result: false, message: 'Each value of mustNotStartWith array must be a char' });
    expect(checkSyntaxError({ mustNotEndWith: ['xyz'] }, 'mustNotEndWith')).toEqual({ result: false, message: 'Each value of mustNotEndWith array must be a char' });
  });

  test('should return true for valid char array values', () => {
    expect(checkSyntaxError({ onlyAllowedChars: ['a', 'b', 'c'] }, 'onlyAllowedChars')).toEqual({ result: true });
    expect(checkSyntaxError({ excludedChars: ['x', 'y', 'z'] }, 'excludedChars')).toEqual({ result: true });
    expect(checkSyntaxError({ startsWith: ['a', 'b', 'c'] }, 'startsWith')).toEqual({ result: true });
    expect(checkSyntaxError({ endsWith: ['x', 'y', 'z'] }, 'endsWith')).toEqual({ result: true });
    expect(checkSyntaxError({ mustNotStartWith: ['a', 'b', 'c'] }, 'mustNotStartWith')).toEqual({ result: true });
    expect(checkSyntaxError({ mustNotEndWith: ['x', 'y', 'z'] }, 'mustNotEndWith')).toEqual({ result: true });
  });

  test('should return false with error message for invalid char array values', () => {
    expect(checkSyntaxError({ onlyAllowedChars: 'abc' }, 'onlyAllowedChars')).toEqual({
      result: false,
      message: 'onlyAllowedChars value must be an array',
    });
    expect(checkSyntaxError({ excludedChars: 'xyz' }, 'excludedChars')).toEqual({
      result: false,
      message: 'excludedChars value must be an array',
    });
    expect(checkSyntaxError({ startsWith: 'abc' }, 'startsWith')).toEqual({
      result: false,
      message: 'startsWith value must be an array',
    });
    expect(checkSyntaxError({ endsWith: 'xyz' }, 'endsWith')).toEqual({
      result: false,
      message: 'endsWith value must be an array',
    });
    expect(checkSyntaxError({ mustNotStartWith: 'abc' }, 'mustNotStartWith')).toEqual({
      result: false,
      message: 'mustNotStartWith value must be an array',
    });
    expect(checkSyntaxError({ mustNotEndWith: 'xyz' }, 'mustNotEndWith')).toEqual({
      result: false,
      message: 'mustNotEndWith value must be an array',
    });
  });
});