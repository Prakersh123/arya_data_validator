const { isArray } = require("../ARRAY/array");
const { onlyPossibleKeys } = require("../Object");
const { POSSIBLE_KEYS_FOR_NUMBER } = require("../constant");
const numberClass = require("./number");


function callFunctionBasedOnKey(body) {
    if (body.key === 'onlyInteger') {
        return numberClass.isInteger(body.input) === body.value;
    }
    if (body.key === 'onlyPositive') {
        return numberClass.onlyPositive(body.input) === body.value;
    }
    if (body.key === 'onlyNegative') {
        return numberClass.onlyNegative(body.input) === body.value;
    }
    if (body.key === 'minimumValue') {
        return numberClass.minimumValue(body.input, body.value);
    }
    if (body.key === 'maximumValue') {
        return numberClass.maximumValue(body.input, body.value);
    }
    if (body.key === 'notEqualTo') {
        return numberClass.notEqualTo(body.input, body.value);
    }
    if (body.key === 'equalsTo') {
        return numberClass.equalsTo(body.input, body.value);
    }
    if (body.key === 'maxLength') {
        return numberClass.maxLength(body.input, body.value);
    }
    if (body.key === 'minLength') {
        return numberClass.minLength(body.input, body.value);
    }
    if (body.key === 'exactLength') {
        return numberClass.exactLength(body.input, body.value);
    }
}
function checkSyntaxError(currObject, key) {
    let value = currObject[key];
    if (key === 'onlyInteger') {
        if (typeof value !== 'boolean') return { result: false, message: 'Incorrect value provided to onlyInteger' };
        return { result: true };
    }
    if (key === 'onlyPositive') {
        if (typeof value !== 'boolean') return { result: false, message: 'Incorrect value provided to onlyPositive' };
        return { result: true };
    }
    if (key === 'onlyNegative') {
        if (typeof value !== 'boolean') return { result: false, message: 'Incorrect value provided to onlyNegative' };
        return { result: true };
    }
    if (key === 'minimumValue') {
        if (!numberClass.isNumber(value).result) return { result: false, message: 'Incorrect value provided to minimumValue' };
        return { result: true };
    }
    if (key === 'maximumValue') {
        if (!numberClass.isNumber(value).result) return { result: false, message: 'Incorrect value provided to maximumValue' };
        return { result: true };
    }
    if (key === 'notEqualTo') {
        if (!isArray(value).result) return { result: false, message: 'notEqualTo value must be an array' };
        for (let i = 0; i < value.length; i++) {
            if (!numberClass.isNumber(value[i]).result) return { result: false, message: 'Each value of notEqualTo array must be a number' };
        }
        return { result: true };
    }
    if (key === 'equalsTo') {
        if (!isArray(value).result) return { result: false, message: 'equalsTo value must be an array' };
        for (let i = 0; i < value.length; i++) {
            if (!numberClass.isNumber(value[i]).result) return { result: false, message: 'Each value of equalsTo array must be a number' };
        }
        return { result: true };    
    }
    if (key === 'maxLength') {
        if (!numberClass.isInteger(value).result || !numberClass.onlyPositive(value).result) return { result: false, message: 'Incorrect value provided to maxLength' };
        return { result: true };
    }
    if (key === 'minLength') {
        if (!numberClass.isInteger(value).result || !numberClass.onlyPositive(value).result) return { result: false, message: 'Incorrect value provided to minLength' };
        return { result: true };
    }
    if (key === 'exactLength') {
        if (!numberClass.isInteger(value).result || !numberClass.onlyPositive(value).result) return { result: false, message: 'Incorrect value provided to exactLength' };
        return { result: true };
    }
}

function validateNumber(expectedObject, inputObject) {
    let keys = Object.keys(expectedObject);
    if (!onlyPossibleKeys(expectedObject, POSSIBLE_KEYS_FOR_NUMBER)) return { result: false, message: 'INVALID COMBINATION OF KEY PROVIDED FOR NUMBER DATA TYPE' };
    if (expectedObject.isRequired === true && !inputObject.hasOwnProperty(expectedObject.name)) return { result: false, message: `${expectedObject.name} is required field` };
    if (expectedObject.isRequired === false && !inputObject.hasOwnProperty(expectedObject.name)) return true;
    for(let i = 0; i < keys.length; i++) {
        if (!['name', 'type', 'isRequired'].includes(keys[i])) {
            let syntaxCheck = checkSyntaxError(expectedObject, keys[i]);
            if (!syntaxCheck.result) return syntaxCheck;
            let data = callFunctionBasedOnKey({
                key: keys[i],
                value: expectedObject[keys[i]],
                input: inputObject[expectedObject.name]
            });
            if (!data.result) return data;
        }
    }
    return { result: true };                  
}

module.exports = {
    validateNumber,
    checkSyntaxError
}