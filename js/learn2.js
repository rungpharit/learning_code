// JavaScript Document

//Differences Between the var and let
//let cannot declare twice
var catName = "Quincy";
var quote;

var catName = "Beau";

function catTalk() {
	
	catName = "Oliver";
	quote = catName + "says Meow";
	
}

catTalk();

//Compare Scopes of the var and let
//let defince variable as where they define
function checkScope() {
	
	var i = "function scope";
	if (true) {
		var i = "block scope";
		console.log("Block scope i is : ",i);
	}
	console.log("Function scope i is : ",i);
	return i;
}
checkScope();

//Prevent mutate const
function freezeObj() {
	const MATH_CONSTANTS = {
		PI : 3.14
	};
	
	Object.freeze(MATH_CONSTANTS);// cannot change PI


	try{
		MATH_CONSTANTS.PI = 99;
	} catch(ex) {
		console.log(ex)
	}

	return MATH_CONSTANTS.PI;
}

const PI = freezeObj();
console.log(PI);

//use Arrow functions to Write concise Anonymous function
var magic = function() {
	return new Date();
};
//equal
var magic = () => new Date();

//Write arrow finction with parameters
var myConcat = function(arr1,arr2){
	return arr1.concat(arr2);
};

var myConcat = (arr1,arr2) => arr1.concat(arr2);

console.log(myConcat([1,2],[3,4,5]));

//Write Higher Order Arrow functions
const increment = (function(){
	return function increment(number,value=1) {
		return number + value;
	};
})();
console.log(increment(5,2));
console.log(increment(5));

//create String using Template
const person = {
	name: "Zodiac Hasbro",
	age : 56
};

const greeting = `Hello, my name is ${person.name} !
I am ${person.age} years  old.`;

console.log(greeting);