const { onlyPossibleKeys } = require("../Object");
const { POSSIBLE_KEYS_FOR_ARRAY } = require("../constant");
const arrayClass = require("./array");
const numberClass = require("../NUMBER/number");

function callFunctionBasedOnKey(body) {
    if (body.key === 'noEmptyArray') {
        if (body.value === false) return {result: true};
        return arrayClass.noEmptyArray(body.input);
    }
    if (body.key === 'length') {
        return arrayClass.length(body.input, body.value);
    }
    if (body.key === 'minimumLength') {
        return arrayClass.minimumLength(body.input, body.value);
    }
    if (body.key === 'maximumLength') {
        return arrayClass.maximumLength(body.input, body.value);
    }
}

function checkSyntaxError(currObject, key) {
    let value = currObject[key];
    if (key === 'noEmptyArray') {
        if (typeof value !== 'boolean') return { result: false, message: 'Incorrect value provided to noEmptyArray' };
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
}

function validateArray(expectedObject, inputObject) {
    let keys = Object.keys(expectedObject);
    if (!onlyPossibleKeys(expectedObject, POSSIBLE_KEYS_FOR_ARRAY)) return { result: false, message: 'INVALID COMBINATION OF KEY PROVIDED FOR ARRAY DATA TYPE' };
    if (expectedObject.isRequired === true && !inputObject.hasOwnProperty(expectedObject.name)) throw new Error(`${expectedObject.name} is required field`);
    if (expectedObject.isRequired === false && !inputObject.hasOwnProperty(expectedObject.name)) return { result: true };
    if (!arrayClass.isArray(inputObject[expectedObject.name]).result) return { result: false, message: `The ${expectedObject.name} is not array data type`};
    for(let i = 0; i < keys.length; i++) {
        if (!['name', 'type', 'isRequired'].includes(keys[i])) {
            if (!checkSyntaxError(expectedObject, keys[i]).result) throw new Error(result.message);
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
    validateArray,
    checkSyntaxError
}