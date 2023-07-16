const { checkSyntaxError } = require("../ARRAY/arrayValidation");
const numberClass = require("../NUMBER/number");

describe('checkSyntaxError', () => {
  // Boolean values for validation options
  test('Validating noEmptyArray with correct value', () => {
    const currObject = { noEmptyArray: true };
    const key = 'noEmptyArray';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating noEmptyArray with incorrect value', () => {
    const currObject = { noEmptyArray: 'true' };
    const key = 'noEmptyArray';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to noEmptyArray' });
  });

  // Validation options with number values
  test('Validating length with correct value', () => {
    const currObject = { length: 10 };
    const key = 'length';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating length with non-positive value', () => {
    const currObject = { length: -5 };
    const key = 'length';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to length' });
  });

  test('Validating maximumLength with correct value', () => {
    const currObject = { maximumLength: 100 };
    const key = 'maximumLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating maximumLength with non-positive value', () => {
    const currObject = { maximumLength: -10 };
    const key = 'maximumLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to maximumLength' });
  });

  test('Validating minimumLength with correct value', () => {
    const currObject = { minimumLength: 5 };
    const key = 'minimumLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating minimumLength with non-positive value', () => {
    const currObject = { minimumLength: -3 };
    const key = 'minimumLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to minimumLength' });
  });
});
