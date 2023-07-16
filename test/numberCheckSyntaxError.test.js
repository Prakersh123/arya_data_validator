const numberClass = require("../NUMBER/number");
const { checkSyntaxError } = require("../NUMBER/numberValidation");

describe('checkSyntaxError', () => {
  // Boolean values for validation options
  test('Validating onlyInteger with correct value', () => {
    const currObject = { onlyInteger: true };
    const key = 'onlyInteger';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating onlyInteger with incorrect value', () => {
    const currObject = { onlyInteger: 'true' };
    const key = 'onlyInteger';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to onlyInteger' });
  });

  test('Validating onlyPositive with correct value', () => {
    const currObject = { onlyPositive: true };
    const key = 'onlyPositive';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating onlyPositive with incorrect value', () => {
    const currObject = { onlyPositive: 'true' };
    const key = 'onlyPositive';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to onlyPositive' });
  });

  test('Validating onlyNegative with correct value', () => {
    const currObject = { onlyNegative: true };
    const key = 'onlyNegative';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating onlyNegative with incorrect value', () => {
    const currObject = { onlyNegative: 'true' };
    const key = 'onlyNegative';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to onlyNegative' });
  });

  // Validation options with number values
  test('Validating minimumValue with correct value', () => {
    const currObject = { minimumValue: 10 };
    const key = 'minimumValue';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating minimumValue with non-number value', () => {
    const currObject = { minimumValue: '10' };
    const key = 'minimumValue';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to minimumValue' });
  });

  test('Validating maximumValue with correct value', () => {
    const currObject = { maximumValue: 100 };
    const key = 'maximumValue';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating maximumValue with non-number value', () => {
    const currObject = { maximumValue: '100' };
    const key = 'maximumValue';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to maximumValue' });
  });

  // Validation options with array values
  test('Validating notEqualTo with correct value', () => {
    const currObject = { notEqualTo: [1, 2, 3] };
    const key = 'notEqualTo';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating notEqualTo with non-array value', () => {
    const currObject = { notEqualTo: 5 };
    const key = 'notEqualTo';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'notEqualTo value must be an array' });
  });

  test('Validating notEqualTo with array of non-number values', () => {
    const currObject = { notEqualTo: ['1', '2', '3'] };
    const key = 'notEqualTo';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Each value of notEqualTo array must be a number' });
  });

  test('Validating equalsTo with correct value', () => {
    const currObject = { equalsTo: [1, 2, 3] };
    const key = 'equalsTo';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating equalsTo with non-array value', () => {
    const currObject = { equalsTo: 5 };
    const key = 'equalsTo';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'equalsTo value must be an array' });
  });

  test('Validating equalsTo with array of non-number values', () => {
    const currObject = { equalsTo: ['1', '2', '3'] };
    const key = 'equalsTo';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Each value of equalsTo array must be a number' });
  });

  // Validation options for length
  test('Validating maxLength with correct value', () => {
    const currObject = { maxLength: 10 };
    const key = 'maxLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating maxLength with non-integer value', () => {
    const currObject = { maxLength: '10' };
    const key = 'maxLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to maxLength' });
  });

  test('Validating maxLength with negative value', () => {
    const currObject = { maxLength: -5 };
    const key = 'maxLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to maxLength' });
  });

  test('Validating minLength with correct value', () => {
    const currObject = { minLength: 5 };
    const key = 'minLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating minLength with non-integer value', () => {
    const currObject = { minLength: '5' };
    const key = 'minLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to minLength' });
  });

  test('Validating minLength with negative value', () => {
    const currObject = { minLength: -3 };
    const key = 'minLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to minLength' });
  });

  test('Validating exactLength with correct value', () => {
    const currObject = { exactLength: 8 };
    const key = 'exactLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: true });
  });

  test('Validating exactLength with non-integer value', () => {
    const currObject = { exactLength: '8' };
    const key = 'exactLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to exactLength' });
  });

  test('Validating exactLength with negative value', () => {
    const currObject = { exactLength: -6 };
    const key = 'exactLength';
    const result = checkSyntaxError(currObject, key);
    expect(result).toEqual({ result: false, message: 'Incorrect value provided to exactLength' });
  });
});
