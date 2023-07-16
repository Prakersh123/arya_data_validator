<!-- Replace the placeholders with your actual content -->

# Arya Data Validator

[![npm version](https://img.shields.io/npm/v/arya_data_validator.svg)](https://www.npmjs.com/package/arya_data_validator)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)

Arya Data Validator is a versatile and comprehensive JavaScript library for validating data inputs. It offers a wide range of validation rules and functions to ensure data integrity and enforce specific data requirements.

## Features

- Supports validation for various data types, including strings, numbers, arrays, and objects.
- Validates required fields, data formats, lengths, ranges, and more.
- Provides an intuitive and flexible API with customizable validation rules.
- Lightweight and dependency-free.
- Compatible with both Node.js and browser environments.

## Installation

You can install the Arya Data Validator package via npm:

```shell
npm install arya_data_validator
```

## Usage
```shell
const aryaDataValidator = require('arya_data_validator);
const aryaDataValidator = require('arya_data_validator');

let expectedObj = [
    { type: 'number', name: 'phoneNumber', isRequired: true, minLength: 7, maxLength: 10 },
    { type: 'string', name: 'name', isRequired: true, maximumLength: 10, startsWith: ['p', 'P'] },
];
let inputObj = {
    phoneNumber: 89123456,
    name: 'Prakersh'
}
console.log(aryaDataValidator.validateData(inputObj, expectedObj))
// output: {result: true}

```

## NUMBER
- We support following properties
  - ## isInteger: true/false
      - To check whether the given value is integer or not.
  - ## maximumValue: y
      - To check whether the given value is always less than or equal to y.
  - ## minimumValue: y
      - To check whether the given value is always greter than or equal to y.
  - ## equalsTo: arr( Note: arr is always an array)
      - To check whether the given value is always equal to one of the values present in arr array.
  - ## notEqualTo: arr( Note: arr is always an array)
      - To check whether the given value is never equal to any of the values present in arr array.
  - ## onlyPositive: true
      - To check whether the given value is always positive.
  - ## onlyNegative: true
      - To check whether the given value is always negative.
  - ## maxLength: N(integer)
      - To check the maximum number of digit in the given input is N
  - ## minLength: N(integer)
      - To check the minimum number of digit in the given input is N
  - ## exactLength: N(integer)
      - To check the number of digit in the given input is always N


## STRING
- We support following properties
  - ## noEmpty: true
      - To check whether the given string is not empty.
  - ## length: y(Integer)
      - To check whether the given string has length equal to y.
  - ## minimumLength: y(Integer)
      - To check whether the given string length is always greater than or equal to y.
  - ## maximumLength: y(Integer)
      - To check whether the given string length is always less than or equal to y.
  - ## startsWith: arr(Array of chars only)
      - To check whether the given string always start with any of the char present in the arr.
  - ## endsWith: arr(Array of chars only)
      - To check whether the given string always end with any of the char present in the arr.
  - ## mustNotStartWith: arr(Array of chars only)
      - To check whether the given string never start with any of the char present in the arr.
  - ## mustNotEndWith: arr(Array of chars only)
      - To check whether the given string never end with any of the char present in the arr.

  - ## onlyAllowedChars: arr(Array of chars only)
      - To check whether the given string consist of only char present in the arr.
  - ## excludedChars: arr(Array of chars only)
      - To check whether the given string never consist of any char present in the arr.
 

 ## ARRAY
- We support following properties
  - ## noEmptyArray: true
      - To check whether the given array is not empty.
  - ## length: y(Integer)
      - To check whether the given array has length equal to y.
  - ## minimumLength: y(Integer)
      - To check whether the given array length is always greater than or equal to y.
  - ## maximumLength: y(Integer)
      - To check whether the given array length is always less than or equal to y.

## Contributing
Contributions are welcome! If you find any issues or have suggestions for improvement, please open an issue or submit a pull request on the GitHub repository (https://github.com/Prakersh123).

## License
This package is open source and available under the MIT License.

## Credits
Arya Data Validator is developed and maintained by <b>Prakersh Kumar Arya</b>.
