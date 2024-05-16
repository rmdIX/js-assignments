function getRegexForGuid() {
    return /^\{[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}\}$/;
}

function getRegexForPitSpot() {
    return /^(?!.*\s).*p[^eo]t.*$/;
}

function getRegexForIPv4() {
    return /^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
}

function getRegexForSSN() {
    return /^(?!000|666|9\d{2})\d{3}-(?!00)\d{2}-(?!0000)\d{4}$/;
}

function getPasswordValidator(minLength) {
    return new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[a-zA-Z\\d]{' + minLength + ',}$');
}

module.exports = {
    getRegexForGuid: getRegexForGuid,
    getRegexForPitSpot: getRegexForPitSpot,
    getRegexForIPv4: getRegexForIPv4,
    getRegexForSSN: getRegexForSSN,
    getPasswordValidator: getPasswordValidator
};

