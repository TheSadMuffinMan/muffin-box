/*
Info came from a YouTube video:
https://www.youtube.com/watch?v=d56mG7DezGs&t=1631s
*/

/*
Compile with: `tsc`
"Run" JS with: `node dist/index.js`

The TS compiler is *smart*; it will heavily optimize your resultant JS code.
*/


// Basic console print:
// console.log('Hello World.');


/* 
JS (and therefore TS) has several native types:
- number
- string
- boolean
- null
- undefined
- object

TS introduces a few new types:
- any
- unknown
- never
- enum
- tuple
*/
// let sales:number = 123_456_789; // Can remove `:number` section, compiler can infer data types. 
// let course:string = 'TypeScript';
// let is_published:boolean = false;
// let level; // Type `any`: can represent any type of values. This feature removes all the benefits of TS, so use sparingly.


/* ARRAYS
TS arrays are DYNAMIC: the elements do not need to all be the same type.
*/
// let numbers:number[] = [1, 2, 3];
// numbers.forEach(n => n.toString);


/* TOUPLES
For this example, we want to assign a userId and name to data.
*/
// let user:[number, string] = [2002, 'Muffins'];


/* ENUMS (list of related constants)
Prevents this:
    const small = 1;
    const medium = 2;
    const large = 3;
*/
// enum Size {Small = 1, Medium, Large}; // Medium == 2, Large == 3;
// let mySize:Size = Size.Medium;
// console.log(mySize);


/* FUNCTIONS
`?` OPERATOR signifies that a parameter is optional, very cool.
The `(taxYear || 2022)` portion supports the `?` operator by saying "if a taxYear is not provided, go with 2022".
    - Video recommends giving the parameter a default value:
                 ... (income:number, taxYear = 2022): ...
*/
// function calculateTax(income:number, taxYear?:number): number {
//     if ((taxYear || 2022) < 2022) {
//         return (income * 1.2);
//     }
//     else {
//         return (income * 1.3);
//     }
// }

// calculateTax(25_000)


/* OBJECTS

*/