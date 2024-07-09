"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.digitize = void 0;
const digitize = (n) => {
    let number = String(n).split('');
    return number.reverse().map(Number);
};
exports.digitize = digitize;
