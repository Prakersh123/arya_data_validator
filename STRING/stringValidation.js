const { onlyPossibleKeys } = require("../Object");
const { POSSIBLE_KEYS_FOR_STRING } = require("../constant");
const stringClass = require("./string");
const numberClass = require("../NUMBER/number");
const { isArray } = require("../ARRAY/array");


function callFunctionBasedOnKey(body) {
    if (body.key === 'noEmpty') {
        if (body.value === false) return {result: true};
        return stringClass.noEmpty(body.input);
    }
    if (body.key === 'length') {
        return stringClass.length(body.input, body.value);
    }
    if (body.key === 'startsWith') {
        return stringClass.startsWith(body.input, input.value);
    }
    if (body.key === 'endsWith') {
        return stringClass.endsWith(body.input, body.value);
    }
    if (body.key === 'mustNotStartWith') {
        return stringClass.mustNotStartWith(body.input, body.value);
    }
    if (body.key === 'mustNotEndWith') {
        return stringClass.mustNotEndWith(body.input, body.value);
    }
    if (body.key === 'minimumLength') {
        return stringClass.minimumLength(body.input, body.value);
    }
    if (body.key === 'maximumLength') {
        return stringClass.maximumLength(body.input, body.value);
    }
    if (body.key === 'onlyAllowedChars') {
        return stringClass.onlyAllowedChars(body.input, body.value);
    }
    if (body.key === 'excludedChars') {
        return stringClass.excludedChars(body.input, body.value);
    }
}

function checkSyntaxError(currObject, key) {
    let value = currObject[key];
    if (key === 'noEmpty') {
        if (typeof value !== 'boolean') return { result: false, message: 'Incorrect value provided to noEmpty' };
        return { result: true };
    }
    if (key === 'length') {
        if (!numberClass.onlyPositive(value).result) return { result: false, message: 'Incorrect value provided to length' };
        return { result: true };
    }
    if (key === 'maximumLength') {
        if (!numberClass.onlyPositive(value).result) return { result: false, message: 'Incorrect value provided to maximumLength' };
        return { result: true };
    }
    if (key === 'minimumLength') {
        if (!numberClass.onlyPositive(value).result) return { result: false, message: 'Incorrect value provided to minimumLength' };
        return { result: true };
    }
    if (key === 'onlyAllowedChars') {
        if (!isArray(value).result) return { result: false, message: 'onlyAllowedChars value must be an array' };
        for (let i = 0; i < value.length; i++) {
            if (!stringClass.isString(value[i]).result || value[i].length > 1) return { result: false, message: 'Each value of onlyAllowedChars array must be a char' };
        }
        return { result: true };
    }
    if (key === 'excludedChars') {
        if (!isArray(value).result) return { result: false, message: 'excludedChars value must be an array' };
        for (let i = 0; i < value.length; i++) {
            if (!stringClass.isString(value[i]).result || value[i].length > 1) return { result: false, message: 'Each value of excludedChars array must be a char' };
        }
        return { result: true };
    }
    if (key === 'startsWith') {
        if (!isArray(value).result) return { result: false, message: 'startsWith value must be an array' };
        for (let i = 0; i < value.length; i++) {
            if (!stringClass.isString(value[i]).result || value[i].length > 1) return { result: false, message: 'Each value of startsWith array must be a char' };
        }
        return { result: true };
    }
    if (key === 'endsWith') {
        if (!isArray(value).result) return { result: false, message: 'endsWith value must be an array' };
        for (let i = 0; i < value.length; i++) {
            if (!stringClass.isString(value[i]).result || value[i].length > 1) return { result: false, message: 'Each value of endsWith array must be a char' };
        }
        return { result: true };
    }
    if (key === 'mustNotStartWith') {
        if (!isArray(value).result) return { result: false, message: 'mustNotStartWith value must be an array' };
        for (let i = 0; i < value.length; i++) {
            if (!stringClass.isString(value[i]).result || value[i].length > 1) return { result: false, message: 'Each value of mustNotStartWith array must be a char' };
        }
        return { result: true };
    }
    if (key === 'mustNotEndWith') {
        if (!isArray(value).result) return { result: false, message: 'mustNotEndWith value must be an array' };
        for (let i = 0; i < value.length; i++) {
            if (!stringClass.isString(value[i]).result || value[i].length > 1) return { result: false, message: 'Each value of mustNotEndWith array must be a char' };
        }
        return { result: true };
    }
    
}

function validateString(expectedObject, inputObject) {
    let keys = Object.keys(expectedObject);
    if (!onlyPossibleKeys(expectedObject, POSSIBLE_KEYS_FOR_STRING)) return { result: false, message: 'INVALID COMBINATION OF KEY PROVIDED FOR STRING DATA TYPE' };
    if (expectedObject.isRequired === true && !inputObject.hasOwnProperty(expectedObject.name)) throw new Error(`${expectedObject.name} is required field`);
    if (expectedObject.isRequired === false && !inputObject.hasOwnProperty(expectedObject.name)) return { result: true };
    if (!stringClass.isString(inputObject[expectedObject.name]).result) return { result: false, message: `The ${expectedObject.name} is not string data type`};
    for(let i = 0; i < keys.length; i++) {
        if (!['name', 'type', 'isRequired'].includes(keys[i])) {

            let syntaxCheck = checkSyntaxError(expectedObject, keys[i]);
            if (!syntaxCheck.result) return syntaxCheck;            
            let response = callFunctionBasedOnKey({
                key: keys[i],
                value: expectedObject[keys[i]],
                input: inputObject[expectedObject.name]
            });
            if (response.result === false) {
                return response;
            }
        }
    }
    return { result: true };                  
}

module.exports = {
    validateString,
    checkSyntaxError,
}