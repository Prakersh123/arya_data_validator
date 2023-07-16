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
```

## NUMBER
- We support following properties
  - ## isInteger: true/false
      -To check whether the given value is integer or not.
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
