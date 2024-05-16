'use strict';

function findString(p, s) {
	class Route {
        constructor() {
            this._r = {};
            this._w = p[0].length;
            this._h = p.length;
        }

        _k(x, y) {
            return `${x},${y}`;
        }

        mAv(x, y) {
            this._r[this._k(x, y)] = false;
        }

        mVis(x, y) {
            this._r[this._k(x, y)] = true;
        }

        isAv(x, y) {
            return x >= 0
                && x < this._w
                && y >= 0
                && y < this._h
                && !this._r[this._k(x, y)];
        }
    }

    function* getSib(x, y) {
        yield [x - 1, y];
        yield [x + 1, y];
        yield [x, y - 1];
        yield [x, y + 1];
    }

    function checkR(x, y, search, route) {
        if (!route.isAv(x, y) || p[y][x] !== search[0]) return false;
        if (search.length === 1) return true;
        route.mVis(x, y);
        const nSearch = search.slice(1);
        for (let [sx, sy] of getSib(x, y))
            if (checkR(sx, sy, nSearch, route)) return true;
        route.mAv(x, y);
        return false;
    }

    for (let y = 0; y < p.length; ++y) {
        for (let x = 0; x < p[0].length; ++x) {
            if (checkR(x, y, s, new Route())) return true;
        }
    }
    return false;
}


function Perm(chars) {
    let ret = [];
    if (chars.length == 1) return [chars];
    if (chars.length == 2) return chars != chars[1] + chars[0] ? [chars, chars[1] + chars[0]] : [chars];
    chars.split('').forEach(function (chr, idx, arr) {
        let sub = [...arr];
        sub.splice(idx, 1);
        Perm(sub.join('')).forEach(function (perm) {
            ret.push(chr + perm);
        });
    });
    return ret.filter((elem, pos, arr) => {
        return arr.indexOf(elem) == pos;
    });
}
function* getPerms(chars) {
	let ret = Perm(chars);
    for (let i = 0; i < ret.length; i++) yield ret[i];
}


function getProfit(q) {
	if (!q.length) return 0;
    let mNum = Math.max.apply(null, q);
    let indM = q.lastIndexOf(mNum);
    return q.slice(0, indM).reduce((prev, curr) => prev += mNum - curr, 0) +
        getProfit(q.slice(indM + 1));
}


function UrlShortener() {
    this.urlAllowedChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"+
                           "abcdefghijklmnopqrstuvwxyz"+
                           "0123456789-_.~!*'();:@&=+$,/?#[]";
}

UrlShortener.prototype = {
	encode: function (url) {
		var res = '';
		for (let i = 0; i * 2 < url.length; i++)
			res += String.fromCodePoint(url.codePointAt(2 * i) * 256 + (url.codePointAt(2 * i + 1) || 0))
		return res;
	},
	decode: function (code) {
		var res = '';
		for (let i = 0; i < code.length; i++)
		{
			let c = code.codePointAt(i);
			res += String.fromCodePoint(c / 256 | 0) + (c % 256 ? String.fromCodePoint(c % 256) : '');
		}
		return res;
	}
}


module.exports = {
    findStringInSnakingPuzzle: findString,
    getPermutations: getPerms,
    getMostProfitFromStockQuotes: getProfit,
    UrlShortener: UrlShortener
};

