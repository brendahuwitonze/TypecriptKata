"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.shortLongShort = shortLongShort;
function shortLongShort(a, b) {
    if (a.length < b.length) {
        return a + b + a;
    }
    else {
        return b + a + b;
    }
}
console.log(shortLongShort('1', '222'));
