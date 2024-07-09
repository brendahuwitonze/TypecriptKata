"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Kata = void 0;
class Kata {
    static getCount(str) {
        const vowels = 'aeiou';
        let count = 0;
        for (let char of str) {
            if (vowels.includes(char))
                count++;
        }
        return count;
    }
}
exports.Kata = Kata;
