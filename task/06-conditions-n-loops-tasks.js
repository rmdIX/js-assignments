'use strict';

/**************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Control_flow_and_error_handling  *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Loops_and_iteration              *
 *                                                                                                *
 **************************************************************************************************/


function getFizzBuzz(num) {
    if (num % 3 === 0 && num % 5 === 0) {
        return 'FizzBuzz';
    } else if (num % 3 === 0) {
        return 'Fizz';
    } else if (num % 5 === 0) {
        return 'Buzz';
    } else {
        return num;
    }
}


function getFactorial(n) {
    let result = 1;
    for (let i = 2; i <= n; i++) {
        result *= i;
    }
    return result;
}


function getSumBetweenNumbers(n1, n2) {
    let sum = 0;
    for (let i = n1; i <= n2; i++) {
        sum += i;
    }
    return sum;
}


function isTriangle(a, b, c) {
    return a + b > c && b + c > a && a + c > b;
}


function doRectanglesOverlap(rect1, rect2) {
    return rect1.left < rect2.left + rect2.width &&
           rect1.left + rect1.width > rect2.left &&
           rect1.top < rect2.top + rect2.height &&
           rect1.top + rect1.height > rect2.top;
}


function isInsideCircle(circle, point) {
    const dx = point.x - circle.center.x;
    const dy = point.y - circle.center.y;
    return dx * dx + dy * dy < circle.radius * circle.radius;
}


function findFirstSingleChar(str) {
    for (let i = 0; i < str.length; i++) {
        if (str.indexOf(str[i]) === str.lastIndexOf(str[i])) {
            return str[i];
        }
    }
    return null;
}


function getIntervalString(a, b, isStartIncluded, isEndIncluded) {
    return `${isStartIncluded ? '[' : '('}${Math.min(a, b)}, ${Math.max(a, b)}${isEndIncluded ? ']' : ')'}`;
}


function reverseString(str) {
    return str.split('').reverse().join('');
}


function reverseInteger(num) {
    return parseInt(num.toString().split('').reverse().join(''), 10);
}


function isCreditCardNumber(ccn) {
    const digits = ccn.toString().split('').map(Number);
    let sum = 0;
    for (let i = digits.length - 1; i >= 0; i--) {
        let digit = digits[i];
        if ((digits.length - i) % 2 === 0) {
            digit *= 2;
            if (digit > 9) {
                digit -= 9;
            }
        }
        sum += digit;
    }
    return sum % 10 === 0;
}


function getDigitalRoot(num) {
    if (num < 10) {
        return num;
    }
    let sum = 0;
    while (num > 0) {
        sum += num % 10;
        num = Math.floor(num / 10);
    }
    return getDigitalRoot(sum);
}


function isBracketsBalanced(str) {
    const stack = [];
    const bracketsMap = { '(': ')', '[': ']', '{': '}', '<': '>' };
    for (const char of str) {
        if (char in bracketsMap) {
            stack.push(char);
        } else {
            const lastBracket = stack.pop();
            if (char !== bracketsMap[lastBracket]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}


function timespanToHumanString(startDate, endDate) {
    const diff = Math.abs(new Date(startDate) - new Date(endDate)) / 1000; // difference in seconds
    const minutes = Math.floor(diff / 60);
    const hours = Math.floor(diff / (60 * 60));
    const days = Math.floor(diff / (24 * 60 * 60));
    const months = Math.floor(diff / (30 * 24 * 60 * 60));
    const years = Math.floor(diff / (365 * 24 * 60 * 60));

    if (diff <= 45) {
        return 'a few seconds ago';
    } else if (diff <= 90) {
        return 'a minute ago';
    } else if (diff <= 45 * 60) {
        return `${minutes} minutes ago`;
    } else if (diff <= 90 * 60) {
        return 'an hour ago';
    } else if (diff <= 22 * 60 * 60) {
        return `${hours} hours ago`;
    } else if (diff <= 36 * 60 * 60) {
        return 'a day ago';
    } else if (diff <= 25 * 24 * 60 * 60) {
        return `${days} days ago`;
    } else if (diff <= 45 * 24 * 60 * 60) {
        return 'a month ago';
    } else if (diff <= 345 * 24 * 60 * 60) {
        return `${months} months ago`;
    } else if (diff <= 545 * 24 * 60 * 60) {
        return 'a year ago';
    } else {
        return `${years} years ago`;
    }
}




function toNaryString(num, n) {
    return num.toString(n);
}


function getCommonDirectoryPath(pathes) {
    const dirs = pathes.map(path => path.split('/'));
    let result = '';
    for (let i = 0; i < dirs[0].length; i++) {
        const currentDir = dirs[0][i];
        if (dirs.every(dir => dir[i] === currentDir)) {
            result += `${currentDir}/`;
        } else {
            break;
        }
    }
    return result;
}



function getMatrixProduct(m1, m2) {
    const result = [];
    for (let i = 0; i < m1.length; i++) {
        result[i] = [];
        for (let j = 0; j < m2[0].length; j++) {
            let sum = 0;
            for (let k = 0; k < m1[0].length; k++) {
                sum += m1[i][k] * m2[k][j];
            }
            result[i][j] = sum;
        }
    }
    return result;
}


function evaluateTicTacToePosition(position) {
    const checkWinner = (a, b, c) => a === b && b === c && a !== undefined;

    // Проверка строк
    for (let i = 0; i < 3; i++) {
        if (checkWinner(position[i][0], position[i][1], position[i][2])) {
            return position[i][0];
        }
    }

    // Проверка столбцов
    for (let i = 0; i < 3; i++) {
        if (checkWinner(position[0][i], position[1][i], position[2][i])) {
            return position[0][i];
        }
    }

    // Проверка диагоналей
    if (checkWinner(position[0][0], position[1][1], position[2][2])) {
        return position[0][0];
    }
    if (checkWinner(position[0][2], position[1][1], position[2][0])) {
        return position[0][2];
    }

    // Никто не выиграл
    return undefined;
}


module.exports = {
    getFizzBuzz: getFizzBuzz,
    getFactorial: getFactorial,
    getSumBetweenNumbers: getSumBetweenNumbers,
    isTriangle: isTriangle,
    doRectanglesOverlap: doRectanglesOverlap,
    isInsideCircle: isInsideCircle,
    findFirstSingleChar: findFirstSingleChar,
    getIntervalString : getIntervalString,
    reverseString: reverseString,
    reverseInteger: reverseInteger,
    isCreditCardNumber: isCreditCardNumber,
    getDigitalRoot: getDigitalRoot,
    isBracketsBalanced: isBracketsBalanced,
    timespanToHumanString : timespanToHumanString,
    toNaryString: toNaryString,
    getCommonDirectoryPath: getCommonDirectoryPath,
    getMatrixProduct: getMatrixProduct,
    evaluateTicTacToePosition : evaluateTicTacToePosition
};

