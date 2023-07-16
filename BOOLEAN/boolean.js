function isBoolean(data) {
    if (typeof data !== 'boolean') return { result: false, message: 'Given input is not boolean' };
    return { result: true };
}

module.exports = {
    isBoolean,
}
