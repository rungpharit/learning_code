// JavaScript Document



const hamburger = document.querySelector('.hamburger');
const lineOne = hamburger.querySelector('.line_one');
const lineTwo = hamburger.querySelector('.line_two');
const lineThree = hamburger.querySelector('.line_three');

const lines = [lineOne,lineTwo,lineThree];

const tlm = new TimelineMax({});
const toggleMenu = new TimelineMax({paused : true,reversed:true});

//TweenMax.to(hamburger,2,{x:100});
//TweenMax.from(hamburger,2,{x:100});

hamburger.addEventListener('mouseenter', _ => {
	if(hamburger.classList.contains('js')){
	   return; 
	   }
	//TweenMax.to(lineOne,1, {scaleX : 1.5});
	//TweenMax.to(lineOne,2, {scaleX : 1}); can't do
	
	//tlm.to(lineOne,1, {scaleX : 1.5});
	//tlm.to(lineOne,1, {scaleX : 1}); You also write
	
	//tlm
	//	.to(lineOne,1, {scaleX : 1.5})
	//	.to(lineOne,1, {scaleX : 1}); 
	//It is pretty annoying to write every lines so let see stagger
	
	tlm.staggerTo(lines, 0.25 , {scaleX: 1.5,repeat:1,yoyo:true}, 0.125); //delay 0.125 It gonna animate lineone then wait 0.3 and animate linethree , yoyo : run forward and bachward
});

toggleMenu
	//.to(lineTwo, 1  ,{scaleX:0},0)
	//.to(lineOne, 0.125,{rotation:45,transformOrigin:  "50% 50%", y : 8 },"+=0.125") //delay after prevoius line 0.125
	//.to(lineThree, 0.125,{rotation:-45,transformOrigin:  "50% 50%",y : -8});

	.to(lineTwo, 0.125  ,{scaleX:0},0)
	.to(lineOne, 0.125,{rotation:45,transformOrigin:  "50% 50%", y : 8 },"cross") //delay after prevoius line 0.125
	.to(lineThree, 0.125,{rotation:-45,transformOrigin:  "50% 50%",y : -8},"cross");

hamburger.addEventListener('click', _ => {
	hamburger.classList.toggle('js') // not working //toggle means if it's there take it away , if it isn't adde it
	console.log("if : " + toggleMenu.reversed());
	toggleMenu.reversed() ? toggleMenu.play() : toggleMenu.reverse();
	//if revesred     is true then  play       , is it is not true then reversed
})