'use strict';

function* get99BottlesOfBeer() {
    let bottles = 99;
    while (bottles > 0) {
        yield `${bottles} bottle${bottles === 1 ? '' : 's'} of beer on the wall, ${bottles} bottle${bottles === 1 ? '' : 's'} of beer.`;
        bottles--;
        if (bottles > 0) {
            yield `Take one down and pass it around, ${bottles} bottle${bottles === 1 ? '' : 's'} of beer on the wall.`;
        } else {
            yield 'Take one down and pass it around, no more bottles of beer on the wall.';
            yield 'No more bottles of beer on the wall, no more bottles of beer.';
            yield 'Go to the store and buy some more, 99 bottles of beer on the wall.';
        }
    }
}

function* getFibonacciSequence() {
    let a = 0, b = 1;
    while (true) {
        yield a;
        [a, b] = [b, a + b];
    }
}

function* depthTraversalTree(root) {
    const stack = [root];
    while (stack.length > 0) {
        const node = stack.pop();
        yield node;
        if (node.children) {
            for (let i = node.children.length - 1; i >= 0; i--) {
                stack.push(node.children[i]);
            }
        }
    }
}

function* breadthTraversalTree(root) {
    const queue = [root];
    let index = 0;
    while (index < queue.length) {
        const node = queue[index];
        yield node;
        if (node.children) {
            queue.push(...node.children);
        }
        index++;
    }
}

function* mergeSortedSequences(source1, source2) {
    const iterator1 = source1();
    const iterator2 = source2();
    let value1 = iterator1.next().value;
    let value2 = iterator2.next().value;

    while (true) {
        if (value1 === undefined && value2 === undefined) {
            break;
        } else if (value1 === undefined) {
            yield value2;
            value2 = iterator2.next().value;
        } else if (value2 === undefined) {
            yield value1;
            value1 = iterator1.next().value;
        } else if (value1 < value2) {
            yield value1;
            value1 = iterator1.next().value;
        } else {
            yield value2;
            value2 = iterator2.next().value;
        }
    }
}

module.exports = {
    get99BottlesOfBeer: get99BottlesOfBeer,
    getFibonacciSequence: getFibonacciSequence,
    depthTraversalTree: depthTraversalTree,
    breadthTraversalTree: breadthTraversalTree,
    mergeSortedSequences: mergeSortedSequences
};

