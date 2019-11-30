// JavaScript Document

function phoneticLookup(val){
	var result = "";
	
	var lookup = {
		"alpha" : "Adams",
		"bravo" : "Boston",
		
	};
	result = lookup[val];
	
	return result;
	
}

console.log(phoneticLookup("bravo")); 


var myObj = {
	gift : "pony",
	pet : "kitten"
	
};

function checkObj(checkProp){
	
	if(myObj.hasOwnProperty(checkProp)){
		return myObj[checkProp];
	} else {
		return "Not Found"
	}
}
console.log(phoneticLookup("gift"))

//Manipulating Complex Objects

var myMusic = [
	{
		"artist" : "Billy Joel",
		"title" : "Piano Man",
		"release_year" : 1973,
		"formats" : [
			"CD",
			"8T"
		],
		"gold" : true
	},
	
	{
		"artist" : "Beau Carnes",
		"title" : "Cereal Man",
		"release_year" : 2003,
		"formats" : [
			"YouTube Video",
		],
		
	}
	
]

//Accessing Nested Arrays
var myPlants = [
	{
		type : "flowers",
		list : [
			"rose",
			"tulip"
		]
	},
	{
		type : "trees",
		list : [
			"fir",
			"pine"
		]
	}
];

var secondTree = myPlants[1].list[1];
console.log(secondTree)