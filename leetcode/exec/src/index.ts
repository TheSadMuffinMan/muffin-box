function isPalindrome(x: number): boolean {
    const xstr:string = x.toString();

    const strlen:number = ((xstr.length) / 2);

    for (let i:number = 0; i < strlen; i++) {
        let currChar = xstr.charAt(i);

        if (currChar == xstr.charAt(strlen - i)) { continue; }
        else {
            return false;
        }
    }

    return true;
};