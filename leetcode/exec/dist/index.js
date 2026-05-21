"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindrome(x) {
    if (x < 0) {
        return false;
    }
    const xstr = x.toString();
    if (xstr.length == 1) {
        return true;
    }
    const strlen = xstr.length;
    for (let i = 0; i < (strlen / 2); i++) {
        let currChar = xstr.charAt(i);
        if (currChar == xstr.charAt(strlen - 1 - i)) {
            continue;
        }
        else {
            return false;
        }
    }
    return true;
}
;
let testNums = [121, -121, 10];
for (let j = 0; j < testNums.length; j++) {
    const curNum = testNums[j];
    if (curNum !== undefined) {
        console.log(curNum, ' = ', isPalindrome(curNum));
    }
}
//# sourceMappingURL=index.js.map