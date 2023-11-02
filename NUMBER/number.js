function isNumber(x) {
    if (Number.isNaN(Number(x)) === false) {
        return { result: true };
    }
    return { result: false, message: 'Given data is not a number' };
}

function isInteger(x) {
    if (Number.isInteger(x)) return { result: true };
    return { result: false, message: 'Given data is not integer' };
}

function minimumValue(data, minValue) {
    if (!isNumber(data)) throw new Error('GIVEN DATA IS NOT A NUMBER');
    if (!isNumber(minValue)) throw new Error('INVALID VALUE PROVIDED FOR MINIMUM VALUE');
    if (data >= minValue) return { result: true };
    return { result: false, message: 'Given data is less than minimum value' };
}

function maximumValue(data, maxValue) {
    if (!isNumber(data)) throw new Error('GIVEN DATA IS NOT A NUMBER');
    if (!isNumber(maxValue)) throw new Error('INVALID VALUE PROVIDED FOR MINIMUM VALUE');
    if (data <= maxValue) return { result: true };
    return { result: false, message: 'Given value is greater than maximum value' };
}

function notEqualTo(data, notEqualValues = []) {
    if (!isNumber(data)) throw new Error('GIVEN DATA IS NOT A NUMBER');
    if (notEqualValues.includes(data)) return { result: false, message: 'Given data value is not allowed'};
    return { result: true };
}

function equalsTo(data, equalValues = []) {
    if (!isNumber(data)) throw new Error('GIVEN DATA IS NOT A NUMBER');
    if (equalValues.includes(data)) return { result: true };
    return { result: false, message: 'Given data value is not allowed'};
}

function onlyPositive(data) {
    if (!isNumber(data)) throw new Error('GIVEN DATA IS NOT A NUMBER');
    if (data >= 0) return { result: true };
    return { result: false, message: 'Given data must be positive value only'};
}

function onlyNegative(data) {
    if (!isNumber(data)) throw new Error('GIVEN DATA IS NOT A NUMBER');
    if (data < 0) return { result: true };
    return { result: false, message: 'Given data must be negative value only'};
}

function maxLength(data, numberOfDigits) {
    if (!isNumber(data)) throw new Error('GIVEN DATA IS NOT A NUMBER');
    if (!isNumber(numberOfDigits)) throw new Error('GIVEN numberOfDigits IS NOT A NUMBER');

    // data must be of number type
    data = Number(data);
    let stringValueOfData = String(data);
    if (stringValueOfData.length <= numberOfDigits) return { result: true };
    return { result: false, message: 'Given data does not follow maxLength constraint'};
}

function minLength(data, numberOfDigits) {
    // data must be of number type
    if (!isNumber(data)) throw new Error('GIVEN DATA IS NOT A NUMBER');
    if (!isNumber(numberOfDigits)) throw new Error('GIVEN numberOfDigits IS NOT A NUMBER');
    data = Number(data);
    let stringValueOfData = String(data);
    if (stringValueOfData.length >= numberOfDigits) return { result: true };
    return { result: false, message: 'Given data does not follow minLength constraint'};
}

function exactLength(data, exactLength) {
    if (!isNumber(data)) throw new Error('GIVEN DATA IS NOT A NUMBER');
    if (!isNumber(exactLength)) throw new Error('GIVEN exactLength IS NOT A NUMBER');
    data = Number(data);
    let stringValueOfData = String(data);
    if (stringValueOfData.length === exactLength) return { result: true };
    return { result: false, message: 'Given data does not follow exact length constraint'};
}


module.exports = {
    isNumber,
    exactLength,
    minLength,
    maxLength,
    onlyNegative,
    onlyPositive,
    equalsTo,
    notEqualTo,
    maximumValue,
    minimumValue,
    isInteger,
    isNumber
}