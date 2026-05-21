function romanToInt(s: string): number {
    if (s.length === 0) return 0; // Base case.

    const map: Record<string, number> = { I: 1, V: 5, X: 10, L: 50, C: 100, D: 500, M: 1000 };

    if (s.length === 1) return map[s[0]];

    const a = map[s[0]];
    const b = map[s[1]];

    if (a < b) {
        return (b - a) + romanToInt(s.slice(2));
    }
    
    return a + romanToInt(s.slice(1));
};

/*
I = 1
V = 5
X = 10
L = 50
C = 100
D = 500
M = 1000

- There's a pattern here, alternates 1 -> 5, then adds 0.
    - Pattern feels recursive.

TS Recursion:
    function factorial(n: number): number {
        if (n <= 1) return 1; // Base case
        return n * factorial(n - 1); // Recursive call
    }
*/