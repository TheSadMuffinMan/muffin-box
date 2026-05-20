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
*/

let sales:number = 123_456_789; // Can remove `:number` section, compiler can infer data types. 
let course:string = 'TypeScript';
let is_published:boolean = false;

let level; // Type `any`: can represent any type of values. This feature removes all the benefits of TS, so use sparingly.