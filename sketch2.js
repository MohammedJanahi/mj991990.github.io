// Coding Rainbow
// Daniel Shiffman
// http://patreon.com/codingtrain
// Code for: https://youtu.be/0jjeOYMjmDU

var angle = 0;
var slider;
var Csize = 800;
function setup() {
  createCanvas(Csize , Csize);
  //slider =  createSlider(0, TWO_PI, PI / 4, 0.01);
  //slider2 = createSlider(1, 15, 8);
  //slider2 = document.getElementById("myRange");
}

function draw() {
  background(255);
  angle = PI/8;
  //slider.value();
  stroke(1);
  dept = document.getElementById("myRange").value;
  linelength = 50
  
  translate(Csize/2, Csize/2);
  line(0,0,-linelength,0)
  rotate(PI/4);
  branch( linelength , dept , dept/2);
  
  translate(0,linelength);
  rotate(PI/4);
  line(0,0,linelength,0)
  translate(linelength,0)
  rotate(PI/4);
  branch( linelength , dept , dept/2);
  
  translate(0,linelength);
  rotate(PI/4);
  line(0,0,linelength,0)
  translate(linelength,0)
  rotate(PI/4);
  branch( linelength , dept , dept/2);
  
  translate(0,linelength)
  rotate(PI/4);
  line(0,0,linelength,0)
  translate(linelength,0)
  rotate(PI/4);
  branch( linelength , dept , dept/2);

}

function branch(len , dep , dep2) {
  if(dep > 0 ){
	dep = dep - 1 ;
	line(0, 0, 0, -len);
	translate(0, -len);
	if (len > 4) {
		push();
		rotate(angle);
		
		branch(len * 0.9 , dep , dep2);
		pop();
		push();
		rotate(-angle);
		branch(len * 0.9 , dep , dep2);
		pop();
	}
  }

  //line(0, 0, 0, -len * 0.67);
}
