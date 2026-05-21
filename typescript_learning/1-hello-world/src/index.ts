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

*/
function calculateTax(income:number): number {
    if (income > 50_000) {
        return (income * 1.2);
    }
}