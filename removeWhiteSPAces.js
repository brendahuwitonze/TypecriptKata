"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noSpace = noSpace;
function noSpace(x) {
    const newString = x.split("").filter(eleme => eleme !== ' ').join("");
    return newString;
}
