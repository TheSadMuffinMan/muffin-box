/*
Info came from a YouTube video:
https://www.youtube.com/watch?v=d56mG7DezGs&t=1631s
*/

// Basic console print:
// console.log('Hello World.');

// let age:number = 28; // 'age' is now a number. age = 'a'; Line doesn't work: "Type 'string' is not assignable to type 'number'." TS catches this error before compilation!

/* 
JS (and therefore TS) has several native types:
- number
- string
- boolean
- null
- undefined
- object
*/

/*
TS introduces a few new types:
- any
- unknown
- never
- enum
- tuple

See commented section below.
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

/* ENUMS
x
*/