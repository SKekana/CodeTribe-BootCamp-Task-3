//SECTION TWO: DATA TYPES AND OPERATORS

// Exercise 1: Numbers

let integerNum = 20;
let floatingNum = 1.4142356;

let addition = integerNum + floatingNum;
let subtraction = integerNum - floatingNum;
let multiplication = integerNum * floatingNum;
let division = integerNum / floatingNum;
let modulus = integerNum % 3;
let exponentiation = integerNum ** 2;

console.log("Integer Number:", integerNum);
console.log("Floating Number:", floatingNum);
console.log("Addition:", addition);
console.log("Subtraction:", subtraction);
console.log("Multiplication:", multiplication);
console.log("Division:", division);
console.log("Modulus:", modulus);
console.log("Exponentiation:", exponentiation);

// Exercise 2: Boolean and Operators

// 1.
let numOne = 5;
let numTwo = 10;

let isGreater = numOne > numTwo;
let isLess = numOne < numTwo;
let isEqual = numOne === numTwo;
let isNotEqual = numOne !== numTwo;

console.log("Is Greater:", isGreater);
console.log("Is Less:", isLess);
console.log("Is Equal:", isEqual);
console.log("Is Not Equal:", isNotEqual);

// 2.
let x = 8;
let y = 12;


console.log("x is greater than y:", x > y);
console.log("x is less than or equal to y:", x <= y);
console.log("x is equal to y:", x === y);
console.log("x is not equal to y:", x !== y);

// 3. 
let a = true;
let b = false;

console.log("a AND b:", a && b);
console.log("a OR b:", a || b);
console.log("NOT a:", !a);

// 4. 
let p = 10;

p += 1;
console.log("p after += 1:", p);

p -= 5;
console.log("p after -= 5:", p);

p *= 3;
console.log("p after *= 3:", p);

p /= 6;
console.log("p after /= 6:", p);

p %= 2;
console.log("p after %= 2:", p);