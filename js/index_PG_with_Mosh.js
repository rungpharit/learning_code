// JavaScript Document
console.log('Hello world 2');

let name = 'Ong';
console.log(name);

//Cannot be a reserved keyword
//Should be meaningful
//Cannot start with a number
//Cannot contain a space ot hyphen
//Are case sensitive fisrtName =! firstname

//let interestRate = 0.3;
//const interestRate = 1;

let age = 30; //Number
let isApproved = true; //Boolean

// Object
let person = { //declare person object
	name: 'Mosh',
	age:30
	
};

//Dot Notation
person.name = 'John'

//Bracket Motation
person['name'] = 'Marry';

console.log(person.name);


//Array
let selectedColors = ['red','blue'];
selectedColors[2] = 'green'
console.log(selectedColors);
console.log(selectedColors[0]);
console.log(selectedColors);

//function
//Perfoming a task
function greet(name,lastname) {
	
	console.log('Hello ' + name + ' ' + lastname);
	
}
greet('John','Smith');

//Calculating a value
function square(number){
	return number*number;
}
let number = square(2);
console.log(number);
console.log(square(4));

