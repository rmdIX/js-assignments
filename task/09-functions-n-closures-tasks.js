'use strict';

function getComposition(f, g) {
    return function(x) {
        return f(g(x));
    };
}

function getPowerFunction(exponent) {
    return function(x) {
        return Math.pow(x, exponent);
    };
}

function getPolynom(...coefficients) {
    if (coefficients.length === 0) return null;
    return function(x) {
        let result = 0;
        for (let i = 0; i < coefficients.length; i++) {
            result += coefficients[i] * Math.pow(x, coefficients.length - i - 1);
        }
        return result;
    };
}

function memoize(func) {
    const cache = new Map();
    return function(...args) {
        const key = args.join(',');
        if (cache.has(key)) {
            return cache.get(key);
        }
        const result = func(...args);
        cache.set(key, result);
        return result;
    };
}

function retry(func, attempts) {
    return function() {
        for (let i = 0; i < attempts; i++) {
            try {
                return func();
            } catch (error) {
                if (i === attempts - 1) {
                    throw error;
                }
            }
        }
    };
}

function logger(func, logFunc) {
    return function(...args) {
        const argString = args.map(arg => JSON.stringify(arg)).join(',');
        logFunc(`${func.name}(${argString}) starts`);
        const result = func(...args);
        logFunc(`${func.name}(${argString}) ends`);
        return result;
    };
}

function partialUsingArguments(fn, ...partialArgs) {
    return function(...args) {
        return fn(...partialArgs, ...args);
    };
}

function getIdGeneratorFunction(startFrom) {
    let id = startFrom;
    return function() {
        return id++;
    };
}

module.exports = {
    getComposition: getComposition,
    getPowerFunction: getPowerFunction,
    getPolynom: getPolynom,
    memoize: memoize,
    retry: retry,
    logger: logger,
    partialUsingArguments: partialUsingArguments,
    getIdGeneratorFunction: getIdGeneratorFunction,
};

