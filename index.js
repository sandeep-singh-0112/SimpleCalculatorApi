'use strict';
console.log("\x1b[1m\x1b[37m");
console.log('Simple APP for calculation');

const argumentList = process.argv;
const addThese = argumentList.slice(2, argumentList.length);
let firstNumber = 0;
let secondNumber = 0;
let option = 0;
let len = addThese.length;

if(len === 0) {
	console.log('Please enter command line options like <any interger> <any interger> <1-4>');
	console.log("1 for Add, 2 for Diff, 3 for Mul and 4 for Div");
	process.exit(1);
}
firstNumber = Number(addThese[0]);

if (isNaN(firstNumber)) {
    console.log('firstNumber is not integer number');
	process.exit(1);
}
secondNumber = Number(addThese[1]);
if (isNaN(secondNumber)) {
    console.log('secondNumber is not integer number');
	process.exit(1);
}
option = Number(addThese[2]);
if (isNaN(option)) {
    console.log('option is not integer number');
	process.exit(1);
}

console.log("firstNumber = " + firstNumber);
console.log("secondNumber = " + secondNumber);
console.log("your option = " + option);

switch(option) {
  case 1:
    // code block
	var add = require('./sum.js');
	let sum = add.addition(firstNumber, secondNumber);
	console.log("Sum is = " + sum);
    break;
  case 2:
    // code block
	var sub = require('./diff.js');
	let diff = sub.subtraction(firstNumber, secondNumber);
	console.log("diff is = " + diff);
    break;
  case 3:
    // code block
	var mul = require('./mul.js');
	let mull = mul.multiplication(firstNumber, secondNumber);
	console.log("mull is = " + mull);
    break;
  case 4:
    // code block
	var div = require('./div.js');
	let divv = div.division(firstNumber, secondNumber);
	console.log("divv is = " + divv);
    break;
  default:
    // code block
	console.log("1 for Add, 2 for Diff, 3 for Mul and 4 for Div");
}

