const { onlyPositive, isInteger } = require("../NUMBER/number");

function isArray(arr) {
    if (Array.isArray(arr)) { return { result: true }};
    return { result: false, message: 'Given input is not of array type'};
}

function noEmptyArray(arr) {
    if (!isArray(arr).result) throw new Error('The given data type is not array');
    if (arr.length === 0) return { result: false, message: 'Empty array is not allowed'};
    return { result: true };
}

function length(arr, len) {
    if (!isArray(arr).result) throw new Error('The given data type is not array');
    if (arr.length !== len) return { result: false, message: 'Wrong array length'};
    return { result: true };
}

function minimumLength(arr, len) {
    if (!isInteger(len).result) throw new Error('Length must be integer value');
    if(!onlyPositive(len).result) throw new Error('Length can not be negative');
    if (!isArray(arr).result) throw new Error('The given data type is not array');
    if (arr.length >= len) return { result: true};
    return {
        message: 'Given input does not satisfy minimum length',
        result: false
    }
}

function maximumLength(arr, len) {
    if (!isInteger(len).result) throw new Error('Length must be integer value');
    if(!onlyPositive(len).result) throw new Error('Length can not be negative');
    if (!isArray(arr).result) throw new Error('The given data type is not array');
    if (arr.length <= len) return { result: true};
    return {
        message: 'Given input does not satisfy maximum length',
        result: false
    }
}


module.exports = {
    isArray,
    noEmptyArray,
    length,
    maximumLength,
    minimumLength,
}
