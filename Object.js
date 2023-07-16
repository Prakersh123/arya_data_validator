function isObject(data) {
    if (typeof data === 'object' && !Array.isArray(data) && data !== null) return { result: true };
    return { result: false, message: 'The given input is not an object'};
}

function mustPresentKey(inputObject = {}, listOfKeyMustPresent) {
    let listOfCurrentKeys = Object.keys(inputObject);
    for(let i = 0; i < listOfKeyMustPresent; i++) {
        if (!listOfCurrentKeys.includes(listOfKeyMustPresent[i])) return false;
    }
    return true;
}

function mustNotPresentKey(inputObject = {}, listOfKeyMustNotPresent) {
    let listOfCurrentKeys = Object.keys(inputObject);
    for(let i = 0; i < listOfKeyMustNotPresent; i++) {
        if (listOfCurrentKeys.includes(listOfKeyMustNotPresent[i])) return false;
    }
    return true;
}

function exactKeyPresent(inputObject = {}, listOfKeyExactPresent) {
    let listOfCurrentKeys = Object.keys(inputObject);
    if (listOfCurrentKeys.length() !== listOfKeyExactPresent.length()) return false;
    for(let i = 0; i < listOfKeyExactPresent; i++) {
        if (!listOfCurrentKeys.includes(listOfKeyExactPresent[i])) return false;
    }
    return true;
}

function onlyPossibleKeys(inputObject = {}, listOfOnlyPossibleKeys) {
    let keys = Object.keys(inputObject);
    for (let i = 0; i < keys.length; i++) {
        if (!listOfOnlyPossibleKeys.includes(keys[i])) {
            return false;
        }
    }
    return true;
}


module.exports = {
    isObject,
    mustPresentKey,
    mustNotPresentKey,
    exactKeyPresent,
    onlyPossibleKeys
}