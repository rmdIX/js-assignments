'use strict';

function Rectangle(width, height) {
    return {
        width: width,
        height: height,
        getArea() {
            return this.width * this.height;
        }
    };
}

function getJSON(obj) {
    return JSON.stringify(obj);
}

function fromJSON(proto, json) {
    const parsedObject = JSON.parse(json);
    const newObj = Object.create(proto); // Создаем объект с заданным прототипом

    // Копируем свойства из распарсенного JSON-объекта в новый объект
    for (let prop in parsedObject) {
        newObj[prop] = parsedObject[prop];
    }

    // Копируем методы из прототипа объекта
    Object.getOwnPropertyNames(proto).forEach(prop => {
        if (typeof proto[prop] === 'function') {
            newObj[prop] = proto[prop];
        }
    });

    return newObj;
}



const CssSelector = (function () {
    const extraPartsErrorMsg = 'Element, id and pseudo-element should not occur more then one time inside the selector';
    const invalidOrderErrorMsg = 'Selector parts should be arranged in the following order: element, id, class, attribute, pseudo-class, pseudo-element';
    const map = new WeakMap();
    const State = Object.freeze({
        ELEMENT: 0,
        ID: 1,
        CLASS: 2,
        ATTR: 3,
        PSEUDO_CLASS: 4,
        PSEUDO_ELEMENT: 5,
        COMBINED_SELECTOR: 10
    });
    function internal(ref) {
        if (!map.get(ref)) map.set(ref, {});
        return map.get(ref);
    }
    function addPart(scope, value, validState, nextState) {
        const selector = internal(scope);
        if (selector.alreadyCalled[validState]) throw new Error(extraPartsErrorMsg);
        if (selector.currentState > validState) throw new Error(invalidOrderErrorMsg);
        if (nextState) selector.alreadyCalled[validState] = true;
        scope.selector += value;
        selector.currentState = nextState || validState;
        return scope;
    }
    function CssSelector(selector, state) {
        this.selector = selector || '';
        internal(this).currentState = state || State.ELEMENT;
        internal(this).alreadyCalled = {};
    }
	
    CssSelector.prototype = {

        element: function (value) {
            return addPart(this, value, State.ELEMENT, State.ID);
        },

        id: function (value) {
            return addPart(this, `#${value}`, State.ID, State.CLASS);
        },

        class: function (value) {
            return addPart(this, `.${value}`, State.CLASS);
        },

        attr: function (value) {
            return addPart(this, `[${value}]`, State.ATTR);
        },

        pseudoClass: function (value) {
            return addPart(this, `:${value}`, State.PSEUDO_CLASS);
        },

        pseudoElement: function (value) {
            return addPart(this, `::${value}`, State.PSEUDO_ELEMENT, State.COMBINED_SELECTOR);
        },

        combine: function (second, combinator) {
            const combinedSelector = `${this.selector} ${combinator} ${second.selector}`;
            return new CssSelector(combinedSelector, State.COMBINED_SELECTOR);
        },

        stringify: function () {
            return this.selector;
        }
    };

    return CssSelector;

}());

const cssSelectorBuilder = {

    element: function(value) {
        return new CssSelector().element(value);
    },

    id: function(value) {
        return new CssSelector().id(value);
    },

    class: function(value) {
        return new CssSelector().class(value);
    },

    attr: function(value) {
		return new CssSelector().attr(value);
    },

    pseudoClass: function(value) {
		return new CssSelector().pseudoClass(value);
    },

    pseudoElement: function(value) {
        return new CssSelector().pseudoElement(value);
    },

    combine: function(selector1, combinator, selector2) {
        return selector1.combine(selector2, combinator);
    },
};

module.exports = {
    Rectangle: Rectangle,
    getJSON: getJSON,
    fromJSON: fromJSON,
    cssSelectorBuilder: cssSelectorBuilder
};

