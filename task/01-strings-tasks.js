'use strict';

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
    return value.replace(/^Hello, (.+?)!$/, '$1');
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
    return str.replace(/^<|>$/g, '');
}

function convertToUpperCase(str) {
    return str.toUpperCase();
}

function extractEmails(str) {
    return str.split(';');
}

function getRectangleString(width, height) {
    const horizontalLine = `┌${'─'.repeat(width - 2)}┐\n`;
    const middleLine = `│${' '.repeat(width - 2)}│\n`;
    const bottomLine = `└${'─'.repeat(width - 2)}┘\n`;
    return `${horizontalLine}${middleLine.repeat(height - 2)}${bottomLine}`;
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
    const cards = [
        'A♣','2♣','3♣','4♣','5♣','6♣','7♣','8♣','9♣','10♣','J♣','Q♣','K♣',
        'A♦','2♦','3♦','4♦','5♦','6♦','7♦','8♦','9♦','10♦','J♦','Q♦','K♦',
        'A♥','2♥','3♥','4♥','5♥','6♥','7♥','8♥','9♥','10♥','J♥','Q♥','K♥',
        'A♠','2♠','3♠','4♠','5♠','6♠','7♠','8♠','9♠','10♠','J♠','Q♠','K♠'
    ];
    return cards.indexOf(value);
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
