// JavaScript Document

//object
const circlee = {
	radius : 1,
	location : {
		x:1,
		y:1
	},
	draw: function(){
		console.log('draw');
	}
};

circlee.draw();

//Factory Function
function createCircle(radius){
	 return {
		radius, //ES6 if  key and value is the same we can remove value
		draw: function(){
		console.log('draw2');
			}
		}
		
	 };


const circle  = createCircle(1);
circle.draw();
console.log(circle.radius);

//construtors Function
function Circle(radius){
	//console.log('this',this);
	this.radius = radius;
	this.draw = function() {
		console.log('law');
	}
}

const another = new Circle(1);

//Constructor property
let x0 = {};
//let x = new Object();

let x1 = 10 ;
let y = x1 ;

x=20
//x = 20 , y = 10

let x2 = { value :10} ;
let y2 = x2 ;

x.value = 20 ;
//x = 20 , y = 20 keep address instead of value x2 address 1234  memmory 1234 value 10

let number = 10;
function increase(number) {
	number++;
}
increase(number);
console.log(number);
//number = 10

let obj = {value : 10 };
function increase(obj) {
	obj.value++;
}
increase(obj);
console.log(obj);
//obj = 11

function Circlee(radius){
	//console.log('this',this);
	this.radius = radius;
	this.draw = function() {
		console.log('law');
	}
}
const circleee = new Circlee(10);


circleee.location ={x : 1}; //add properties
const propertyName = 'location'
//circlee['location'] = {x:1};
circleee[propertyName] = {x:1};
delete circleee.location


function Circle(radius){
	//console.log('this',this);
	this.radius = radius;
	this.draw = function() {
		console.log('law');
	}
}

const circlle = new Circle(10);

for (let key in circlle) {
	if (typeof circlle[key] !== 'function')
		console.log(key,circlle[key]);
}

const keys = Object.keys(circle);
console.log(keys);

if ('radius' in circle)
	console.log('Circle has a radius');

//Getter Setter