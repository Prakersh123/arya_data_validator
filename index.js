const { isArray, noEmptyArray } = require("./ARRAY/array");
const { validateArray } = require("./ARRAY/arrayValidation");
const { validateNumber } = require("./NUMBER/numberValidation");
const objectClass = require("./Object");
const { validateString } = require("./STRING/stringValidation");
const { SYNTAX_ERROR } = require("./constant");

function validateData (actualDataObject, expectedDataObjectList) {
    if (!objectClass.isObject(actualDataObject).result) throw new Error('Input body must be an object');
    if (!isArray(expectedDataObjectList).result) throw new Error('ExpectedDataObjectList must be an array of objects');
    if (!noEmptyArray(expectedDataObjectList).result) throw new Error('NoEmptyArray must be non empty');
    for (let i = 0; i < expectedDataObjectList.length; i++) {
        let eachObject = expectedDataObjectList[i];

        if (!objectClass.isObject(eachObject).result) throw new Error(SYNTAX_ERROR);
        if (Object.keys(eachObject).length === 0) throw new Error(SYNTAX_ERROR);
        
        if (!eachObject.hasOwnProperty('type')) throw new Error('type must be present with each object');
        if (!['string', 'number', 'array', 'object', 'boolean'].includes(eachObject.type)) throw new Error('Invalid value provided for type');
        
        if (!eachObject.hasOwnProperty('name')) throw new Error('name must be present with each object');
        if (typeof eachObject.name !== 'string' || eachObject.name.length === 0) throw new Error('name must be non empty string');
        
        if (!eachObject.hasOwnProperty('isRequired')) throw new Error('isRequired field is mandatory');
        if (typeof eachObject.isRequired !== 'boolean') throw new Error('isRequired field type must be boolean');

        // name, type and isRequired is validated for syntax error
        if (eachObject.type === 'number') {
            try {
                let response = validateNumber(eachObject, actualDataObject);
                if (response.result === false) return response;
            } catch (error) {
                throw new Error(error.message);
            }
        }

        if (eachObject.type === 'string') {
            try {
                let response = validateString(eachObject, actualDataObject);
                if (response.result === false) return response;
            } catch (error) {
                throw new Error(error.message);
            }
        }

        if (eachObject.type === 'array') {
            try {
                let response = validateArray(eachObject, actualDataObject);
                if (response.result === false) return response;
            } catch (error) {
                throw new Error(error.message);
            }
        }
    }
    return { result: true };
}
module.exports = {
    validateData
}