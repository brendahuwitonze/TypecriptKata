"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = isSquare;
function isSquare(n) {
    const sqr = Math.sqrt(n);
    if (sqr === Math.floor(sqr)) {
        return true;
    }
    else {
        return false;
    }
}
;
