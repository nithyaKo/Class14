var Student = {
  name: "Sammy",
  class: 7,
  roll_no:21,
  favorite_subject: "coding",
  marks : [30,35,40,50]
  
};

var ball = {
  x:20,
  y:30,
  r:30,
  xspeed:0,
  yspeed:0,
  color:["red,","orange","purple","blue"]


}

function setup() {
  
  createCanvas(400, 400);
  //changing the roll no
  console.log(Student.roll_no);
  Student.roll_no = 45;
  console.log(Student.roll_no); 
  console.log(ball.color[2]) 
}

function draw() {
  background(220);
  circle(ball.x,ball.y,ball.r)
  fill(ball.color[3])
  ball.xspeed = 1
  ball.x = ball.x + ball.xspeed
}
