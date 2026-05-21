function isPalindrome(x: number): boolean {
    if (x < 0) { return false; } // Negative values.

    const xstr:string = x.toString();
    if (xstr.length == 1) { return true; } // Single char values.

    const strlen:number = xstr.length;

    for (let i:number = 0; i < (strlen / 2); i++) {
        let currChar = xstr.charAt(i);

        if (currChar == xstr.charAt(strlen - 1 - i)) { continue; }
        else {
            return false;
        }
    }

    // If we get to this point, `x` is a palindrome.
    return true;
};

/*  **TESTING LOGIC**

The examples had...
- 121 = true
- -121 = false
- 10 = false

Tests below should pass that logic.
*/

let testNums:number[] = [121, -121, 10];

for (let j:number = 0; j < testNums.length; j++ ) {
    const curNum = testNums[j];
    if (curNum !== undefined) {
        console.log(curNum, ' = ', isPalindrome(curNum));
    }
}

/*  OR
for (const num of testNums) {
    isPalindrome(num);
}
*/
