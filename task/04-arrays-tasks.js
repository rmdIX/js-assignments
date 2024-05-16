function findElement(arr, value) {
    return arr.indexOf(value);
}

function generateOdds(len) {
    return Array.from({ length: len }, (_, i) => 2 * i + 1);
}

function doubleArray(arr) {
    return arr.concat(arr);
}

function getArrayOfPositives(arr) {
    return arr.filter(num => num > 0);
}

function getArrayOfStrings(arr) {
    return arr.filter(item => typeof item === 'string');
}

function removeFalsyValues(arr) {
    return arr.filter(Boolean);
}

function getUpperCaseStrings(arr) {
    return arr.map(item => item.toUpperCase());
}

function getStringsLength(arr) {
    return arr.map(item => item.length);
}

function insertItem(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
}

function getHead(arr, n) {
    return arr.slice(0, n);
}

function getTail(arr, n) {
    return arr.slice(-n);
}

function toCsvText(arr) {
    return arr.map(subArr => subArr.join(',')).join('\n');
}

function toArrayOfSquares(arr) {
    return arr.map(num => num * num);
}

function getMovingSum(arr) {
    return arr.map((_, i) => arr.slice(0, i + 1).reduce((sum, val) => sum + val, 0));
}

function getSecondItems(arr) {
    return arr.filter((_, index) => (index + 1) % 2 === 0);
}

function propagateItemsByPositionIndex(arr) {
    return arr.flatMap((item, index) => Array(index + 1).fill(item));
}

function get3TopItems(arr) {
    return arr.slice(-3).reverse();
}

function getPositivesCount(arr) {
    return arr.filter(num => typeof num === 'number' && num > 0).length;
}

function sortDigitNamesByNumericOrder(arr) {
    const digits = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    return arr.sort((a, b) => digits.indexOf(a) - digits.indexOf(b));
}

function getItemsSum(arr) {
    return arr.reduce((sum, num) => sum + num, 0);
}

function getFalsyValuesCount(arr) {
    return arr.filter(item => !item).length;
}

function findAllOccurences(arr, item) {
    return arr.filter(element => element === item).length;
}

function toStringList(arr) {
    return arr.join(',');
}

function sortCitiesArray(arr) {
    return arr.sort((a, b) => {
        if (a.country === b.country) {
            return a.city.localeCompare(b.city);
        } else {
            return a.country.localeCompare(b.country);
        }
    });
}

function getIdentityMatrix(n) {
    return Array.from({ length: n }, (_, i) =>
        Array.from({ length: n }, (_, j) => i === j ? 1 : 0)
    );
}

function getIntervalArray(start, end) {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
}

function distinct(arr) {
    return [...new Set(arr)];
}

function group(array, keySelector, valueSelector) {
    const map = new Map();
    array.forEach(item => {
        const key = keySelector(item);
        const value = valueSelector(item);
        if (!map.has(key)) {
            map.set(key, []);
        }
        map.get(key).push(value);
    });
    return map;
}

function selectMany(arr, childrenSelector) {
    return arr.flatMap(childrenSelector);
}

function getElementByIndexes(arr, indexes) {
    return indexes.reduce((acc, idx) => acc[idx], arr);
}

function swapHeadAndTail(arr) {
    const mid = Math.floor(arr.length / 2);
    const head = arr.slice(mid + (arr.length % 2));
    const tail = arr.slice(0, mid);
    return [...head, ...(arr.length % 2 === 0 ? [] : [arr[mid]]), ...tail];
}

module.exports = {
    findElement,
    generateOdds,
    doubleArray,
    getArrayOfPositives,
    getArrayOfStrings,
    removeFalsyValues,
    getUpperCaseStrings,
    getStringsLength,
    insertItem,
    getHead,
    getTail,
    toCsvText,
    toStringList,
    toArrayOfSquares,
    getMovingSum,
    getSecondItems,
    propagateItemsByPositionIndex,
    get3TopItems,
    getPositivesCount,
    sortDigitNamesByNumericOrder,
    getItemsSum,
    getFalsyValuesCount,
    findAllOccurences,
    sortCitiesArray,
    getIdentityMatrix,
    getIntervalArray,
    distinct,
    group,
    selectMany,
    getElementByIndexes,
    swapHeadAndTail
};

