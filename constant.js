// number
const POSSIBLE_KEYS_FOR_NUMBER = ['name', 'type', 'isRequired', 'onlyInteger', 'minimumValue', 'maximumValue', 'notEqualTo', 'equalsTo', 'onlyPositive', 'onlyNegative', 'maxLength', 'minLength', 'exactLength'];

// string
const POSSIBLE_KEYS_FOR_STRING = ['name', 'type', 'isRequired', 'noEmpty', 'length', 'minimumLength', 'maximumLength', 'startsWith', 'endsWith', 'mustNotStartWith', 'mustNotEndWith', 'onlyAllowedChars', 'excludedChars'];

// array
const POSSIBLE_KEYS_FOR_ARRAY = ['name', 'type', 'isRequired', 'maximumLength', 'minimumLength', 'nonEmptyArray', 'length'];

// boolean
const POSSIBLE_KEYS_FOR_BOOLEAN = ['name', 'type', 'isRequired'];


// ERROR
const SYNTAX_ERROR = 'INVALID SYNTAX FOR DATA VALIDATION'

module.exports = {
    POSSIBLE_KEYS_FOR_NUMBER,
    POSSIBLE_KEYS_FOR_STRING,
    POSSIBLE_KEYS_FOR_ARRAY,
    POSSIBLE_KEYS_FOR_BOOLEAN,
    SYNTAX_ERROR
}