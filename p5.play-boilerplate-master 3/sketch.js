var hr
var min
var sec
var hourAngle
var minAngle
var secAngle

function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {
  background("Black");  
  translate(200,200)
  rotate(-90)
  hr = hour()
    min = minute()
    sec = second()
  secAngle = map(sec,0,60,0,360)
  minAngle = map(min,0,60,0,360)
  hourAngle = map(hr%12,0,12,0,360)
  push()
  rotate(secAngle)
  stroke("white")
  strokeWeight(7)
  line(0,0,100,0)
  pop()
  push()
  rotate(minAngle)
  stroke("red")
  strokeWeight(7)
  line(0,0,75,0)
  pop()
  strokeWeight(7)
  point(0,0)
  stroke("white")
  strokeWeight(7)
  noFill()
  push()
  rotate(hourAngle)
  stroke("Blue")
  strokeWeight(7)
  line(0,0,50,0)
  pop()
stroke("green")
strokeWeight(7)
  point(0,0)
  stroke("white")
  strokeWeight(7)
  noFill()
 arc(0,0,250,250,0,secAngle)
 strokeWeight(7)
  point(0,0)
  stroke("red")
  strokeWeight(7)
  noFill()
 arc(0,0,270,270,0,minAngle)
 strokeWeight(7)
  point(0,0)
  stroke("blue")
  strokeWeight(7)
  noFill()
  arc(0,0,230,230,0,hourAngle)


}

