const { validateData } = require('../index');
const objectClass = require('../Object');
const arrayClass = require('../ARRAY/array');
const stringClass = require('../STRING/stringValidation');
const numberClass = require('../NUMBER/number');

describe('validateData', () => {
  // Valid input scenarios
  test('Validating valid input data', () => {
    const actualDataObject = { username: 'JohnDoe', age: 25 };
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true },
      { name: 'age', type: 'number', isRequired: true }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: true });
  });

  // Invalid input scenarios
  test('Validating invalid actual data type', () => {
    const actualDataObject = 'invalid';
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true },
      { name: 'age', type: 'number', isRequired: true }
    ];
    expect(() => {
      validateData(actualDataObject, expectedDataObjectList);
    }).toThrow('Input body must be an object');
  });

  test('Validating invalid expected data type', () => {
    const actualDataObject = { username: 'JohnDoe', age: 25 };
    const expectedDataObjectList = 'invalid';
    expect(() => {
      validateData(actualDataObject, expectedDataObjectList);
    }).toThrow('ExpectedDataObjectList must be an array of objects');
  });

  test('Validating empty expected data array', () => {
    const actualDataObject = { username: 'JohnDoe', age: 25 };
    const expectedDataObjectList = [];
    expect(() => {
      validateData(actualDataObject, expectedDataObjectList);
    }).toThrow('NoEmptyArray must be non empty');
  });

  test('Validating invalid expected data object', () => {
    const actualDataObject = { username: 'JohnDoe', age: 25 };
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true },
      'invalid'
    ];
    expect(() => {
      validateData(actualDataObject, expectedDataObjectList);
    }).toThrow("INVALID SYNTAX FOR DATA VALIDATION");
  });

  test('Validating empty expected data object', () => {
    const actualDataObject = { username: 'JohnDoe', age: 25 };
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true },
      {}
    ];
    expect(() => {
      validateData(actualDataObject, expectedDataObjectList);
    }).toThrow('INVALID SYNTAX FOR DATA VALIDATION');
  });

  // Individual type validations
  test('Validating string type', () => {
    const actualDataObject = { username: 'JohnDoe' };
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: true });
  });

  test('Validating number type', () => {
    const actualDataObject = { age: 25 };
    const expectedDataObjectList = [
      { name: 'age', type: 'number', isRequired: true }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: true });
  });

  test('Validating array type', () => {
    const actualDataObject = { numbers: [1, 2, 3] };
    const expectedDataObjectList = [
      { name: 'numbers', type: 'array', isRequired: true }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: true });
  });

  // Advanced validations
  test('Validating combination of types', () => {
    const actualDataObject = {
      username: 'JohnDoe',
      age: 25,
      numbers: [1, 2, 3],
      settings: { darkMode: true }
    };
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true },
      { name: 'age', type: 'number', isRequired: true },
      { name: 'numbers', type: 'array', isRequired: true },
      { name: 'settings', type: 'object', isRequired: true },
      { name: 'darkMode', type: 'boolean', isRequired: true }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: true });
  });

  // Additional validation options
  test('Validating additional validation options', () => {
    const actualDataObject = { username: 'JohnDoe' };
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true, maxLength: 10 }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: false, message: 'INVALID COMBINATION OF KEY PROVIDED FOR STRING DATA TYPE' });
  });

// Test case for missing required field
test('Validating missing required field', () => {
    const actualDataObject = { username: 'JohnDoe' };
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true },
      { name: 'age', type: 'number', isRequired: true }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: false, message: 'age is required field' });
  });
  
  // Test case for invalid data type
  test('Validating invalid data type', () => {
    const actualDataObject = { username: 123 };
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: false, message: 'The username is not string data type' });
  });
  
  // Test case for string length
  test('Validating string length', () => {
    const actualDataObject = { username: 'JohnDoe' };
    const expectedDataObjectList = [
      { name: 'username', type: 'string', isRequired: true, minimumLength: 8, maximumLength: 10 }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: false, message: 'Given input does not satisfy minimum length' });
  });
  
  // Test case for array length
  test('Validating array length', () => {
    const actualDataObject = { numbers: [1, 2, 3] };
    const expectedDataObjectList = [
      { name: 'numbers', type: 'array', isRequired: true, minimumLength: 5, maximumLength: 10 }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: false, message: 'Given input does not satisfy minimum length' });
  });
  
  // Test case for number range
  test('Validating number range', () => {
    const actualDataObject = { age: 15 };
    const expectedDataObjectList = [
      { name: 'age', type: 'number', isRequired: true, minimumValue: 18, maximumValue: 60 }
    ];
    const result = validateData(actualDataObject, expectedDataObjectList);
    expect(result).toEqual({ result: false, message: 'Given data is less than minimum value' });
  });
  
  // Test case for object structure

  
});
