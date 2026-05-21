"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function isPalindrome(x) {
    const xstr = x.toString();
    const strlen = ((xstr.length) / 2);
    for (let i = 0; i < strlen; i++) {
        let currChar = xstr.charAt(i);
        if (currChar == xstr.charAt(strlen - i)) {
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