/*
Info came from a YouTube video:
https://www.youtube.com/watch?v=d56mG7DezGs&t=1631s
*/

/*
Compile with: `tsc`
"Run" JS with: `node dist/index.js`

The TS compiler is *smart*; it will heavily optimize your resultant JS code.
TS Compiler options: npx tsc --init
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

JS/TS does **NOT** have chars; single characters are simply represented as strings of length one.
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


/* OBJECTS (basic)
Objects are NOT dynamic like in JS.
    `employee.name = "Muffins";` will not work.
`readonly` basically makes a parameter const.
*/
// let employee: {
//     readonly id: number,
//     name: string
//     retire: (date: Date) => void
// } = {
//     id: 1,
//     name: 'username',
//     retire: (date:Date) => {
//         console.log(date);
//     }
// };


/* TYPE ALIASES
The above object instantiation is hard to comprehend and will require lots of repeat typing.
Instead create a type alias.
*/
// type Employee {
//     readonly id: number,
//     name: string
//     retire: (date: Date) => void
// };

// let employee: Employee = {
//     id: 1,
//     name: 'Muffins',
//     retire: (date:Date) => {console.log(date);}
// }


/* UNION TYPES
Allowing two different types as a parameter.
*/
// function kgToLbs(weight:(number | string)): number {
//     // Narrowing
//     if (typeof weight === `number`) { // Compiler knows `weight` is a number.
//         // weight. shows all the number methods available.
//         return (weight * 2.2);
//     }
//     else {
//         // weight. shows all string methods available.
//         return (parseInt(weight) * 2.2);
//     }
// }
// console.log(kgToLbs('25kg'));


/* INTERSECTION TYPES
Allows for data or a function parameter to be two data types simultaneously.
*/
// type Draggable = {
//     drag: () => void
// };
// type Resizable = {
//     resize: () => void
// };
// type UIWidget = Draggable & Resizable;
// let textBox: UIWidge = {
//     drag: () => {},
//     resize: () => {}
// };


/* LITERAL TYPES
Left off here.
*/