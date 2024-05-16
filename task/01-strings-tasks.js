function concatenateStrings(value1, value2) {
    return value1 + value2;
}

function getStringLength(value) {
    return value.length;
}

function getStringFromTemplate(firstName, lastName) {
    return `Hello, ${firstName} ${lastName}!`;
}

function extractNameFromTemplate(value) {
    return value.split(' ')[1] + ' ' + value.split(' ')[2].slice(0, -1);
}

function getFirstChar(value) {
    return value.charAt(0);
}

function removeLeadingAndTrailingWhitespaces(value) {
    return value.trim();
}

function repeatString(value, count) {
    return value.repeat(count);
}

function removeFirstOccurrences(str, value) {
    return str.replace(value, '');
}

function unbracketTag(str) {
    return str.substring(1, str.length - 1);
}

function convertToUpperCase(str) {
    return str.toUpperCase();
}

function extractEmails(str) {
    return str.split(';');
}

function getRectangleString(width, height) {
    const horizontal = '─'.repeat(width - 2);
    const top = `┌${horizontal}┐\n`;
    const middle = `│${' '.repeat(width - 2)}│\n`.repeat(height - 2);
    const bottom = `└${horizontal}┘\n`;
    return top + middle + bottom;
}

function encodeToRot13(str) {
    return str.replace(/[a-zA-Z]/g, function (c) {
        return String.fromCharCode((c <= 'Z' ? 90 : 122) >= (c = c.charCodeAt(0) + 13) ? c : c - 26);
    });
}

function isString(value) {
    return typeof value === 'string' || value instanceof String;
}

function getCardId(value) {
    const suits = ['♣', '♦', '♥', '♠'];
    const ranks = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    const suit = value.charAt(value.length - 1);
    const rank = value.substring(0, value.length - 1);
    return suits.indexOf(suit) * 13 + ranks.indexOf(rank);
}

module.exports = {
    concatenateStrings,
    getStringLength,
    getStringFromTemplate,
    extractNameFromTemplate,
    getFirstChar,
    removeLeadingAndTrailingWhitespaces,
    repeatString,
    removeFirstOccurrences,
    unbracketTag,
    convertToUpperCase,
    extractEmails,
    getRectangleString,
    encodeToRot13,
    isString,
    getCardId
};

