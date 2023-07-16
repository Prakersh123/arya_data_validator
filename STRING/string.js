const { isInteger, onlyPositive } = require("../NUMBER/number");

function isString(data) {
    if (typeof data === 'string') return { result: true };
    return { result: false, message: 'Given input is not of string type'}
}

function noEmpty(data) {
    if (typeof data !== 'string') return { result: false, message: 'Given input is not of string type'}
    if (data.length !== 0) return { result: true };
    return { result: false, message: 'Given string is empty'}
}

function length(data, len) {
    if (!isInteger(len).result) throw new Error('Length must be integer value');
    if (!isString(data).result) throw new Error('Input string must be of string type');
    if (data.length === len) return { result: true};
    return {
        message: 'Given input does not satisfy given length',
        result: false
    }
}

function minimumLength(data, len) {
    if (!isInteger(len).result) throw new Error('Length must be integer value');
    if(!onlyPositive(len).result) throw new Error('Length can not be negative');
    if (!isString(data).result) throw new Error('Input string must be of string type');
    if (data.length >= len) return { result: true};
    return {
        message: 'Given input does not satisfy minimum length',
        result: false
    }
}

function maximumLength(data, len) {
    if (!isInteger(len).result) throw new Error('Length must be integer value');
    if(!onlyPositive(len).result) throw new Error('Length can not be negative');
    if (!isString(data).result) throw new Error('Input string must be of string type');
    if (data.length <= len) return { result: true};
    return {
        message: 'Given input does not satisfy maximum length',
        result: false
    }
}

function startsWith(data, listOfChar) {
    if (!isString(data).result) throw new Error('Input string must be of string type');
    if(data.length > 0 && listOfChar.length > 0 && !listOfChar.includes(data[0])) return {
        result: false,
        message: 'Given string does not start with mentioned characters'
    }
    return {
        result: true
    }
}

function endsWith(data, listOfChar) {
    if (!isString(data).result) throw new Error('Input string must be of string type');
    if(data.length > 0 && listOfChar.length > 0 && !listOfChar.includes(data[data.length - 1])) return {
        result: false,
        message: 'Given string does not ends with mentioned characters'
    }
    return {
        result: true
    }
}

function mustNotStartWith(data, listOfChar) {
    if (!isString(data).result) throw new Error('Input string must be of string type');
    if(data.length > 0 && listOfChar.length > 0 && listOfChar.includes(data[0])) return {
        result: false,
        message: 'Given string starts with mentioned characters'
    }
    return {
        result: true
    }
}

function mustNotEndWith(data, listOfChar) {
    if (!isString(data).result) throw new Error('Input string must be of string type');
    if(data.length > 0 && listOfChar.length > 0 && listOfChar.includes(data[data.length - 1])) return {
        result: false,
        message: 'Given string ends with mentioned characters'
    }
    return {
        result: true
    }
}

function excludedChars(data, listOfChar) {
    if (!isString(data).result) throw new Error('Input string must be of string type');
    for(let i = 0; i < data.length; i++) {
        if (listOfChar.includes(data[i])) {
            return {
                result: false,
                message: 'The given string has a character that must not be present'
            };
        }
    }
    return { result: true };
}

function onlyAllowedChars(data, listOfChar) {
    if (!isString(data).result) throw new Error('Input string must be of string type');
    for(let i = 0; i < data.length; i++) {
        if (listOfChar.length > 0 && !listOfChar.includes(data[i])) {
            return {
                result: false,
                message: 'The given string has a character that must not be present'
            };
        }
    }
    return { result: true };
}

module.exports = {
    isString,
    noEmpty,
    length,
    startsWith,
    endsWith,
    mustNotStartWith,
    mustNotEndWith,
    minimumLength,
    maximumLength,
    onlyAllowedChars,
    excludedChars
}   