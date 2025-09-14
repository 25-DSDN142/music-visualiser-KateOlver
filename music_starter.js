
//Images
let firstRun = true;
let myImage;
let firstRun2 = true;
let myImage2;
let firstRun3 = true;
let myImage3;

//Background Lines
let firstRun4 = true;
let myImage4;

//Red circles
let shapeTime = 0;
const amplitude = 50; // The maximum vertical distance (in pixels) from the center.
const frequency = 0.025; // The speed of the oscillation.
let shapeTime2 = 0;
const amplitude2 = 50; // The maximum vertical distance (in pixels) from the center.
const frequency2 = 0.025; // The speed of the oscillation.

//Orange rotating circle
let angle = 0;  // starting angle
let radius = 350; // distance from center
let scaleFactor = 1; // Current scale
let t = 0;           // Time for oscillation

// Rotating stars 
let starAngle2 = 0;
let starAngle3 = 0;
let pulseTime = 0;


// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

 background (0);

 //Background Lines
if(firstRun4){
myImage4 = loadImage('Lines.png')
firstRun4 = false;
}
image(myImage4, 0, 0);  //image

//red circles - This was created with the help of AI
//right
let shapeYOffset = Math.cos(shapeTime) * amplitude;
fill(119, 6, 22);
shapeTime += frequency;
ellipse(675, 960 + shapeYOffset, 200+shapeYOffset/2); //x,y,width,height makes shape pulse and move up and down

//left
let shapeYOffset2 = Math.cos(shapeTime2) * amplitude;
fill(119, 6, 22);
shapeTime2 += frequency;
ellipse(225, 320 + shapeYOffset2, 200+shapeYOffset2/2); //x,y,width,height makes shape pulse and move up and down
 
//Rotating circle - This was created with the help of AI
  let x = width/2 + cos(angle) * radius;
  let y = height/2 + sin(angle) * radius
  // draw the path center
  fill(0);
  ellipse(width/2, height/2, 10, 10);
  // draw the rotating circle
  noStroke();
  fill(244, 134, 0);
  ellipse(x, y, 20);
  // update angle (positive = clockwise in p5.js)
  angle += 0.25;
map bass (0–100) to circle size (50–200)
let circleSize = map(bass, 0, 100, 50, 200);
ellipse(x, y, circleSize);


//cassette
  if(firstRun){
    myImage = loadImage('Cassette.png')
    firstRun = false;
  }
   image(myImage, 0, 70);  //image
 
//zooming cassette 
 // Update scale factor to oscillate smoothly
  scaleFactor = 1 + 0.15 * sin(t); // 1 is original size, 0.1 is zoom amplitude
  t += 0.5 ; // speed of zoom in/out

  // Draw image at center with scaling
  push();
  translate(width / 2, 70 + myImage.height / 2); // move to image center
  scale(scaleFactor);
  imageMode(CENTER);
  image(myImage, 0, 0);
  pop();


//four corners 
 fill(103, 115, 14); //green
   ellipse(120, 140, 80 + drum/2, 80 + drum/2); //x,y,width,height //counter = slowly gets bigger
   ellipse(780, 140, 80 + drum/2, 80 + drum/2); //x,y,width,height //counter = slowly gets bigger
   ellipse(127.5, 1140, 80 + drum/2, 80 + drum/2); //x,y,width,height //counter = slowly gets bigger
   ellipse(780, 1140, 80 + drum/2, 80 + drum/2); //x,y,width,height //counter = slowly gets bigger 

//stars were created with help form AI
//star 2
  if(firstRun2){
    myImage2 = loadImage('Star.png')
    firstRun2 = false;
  }

push();
translate(700, 320); // this is now the star’s CENTER
rotate(starAngle2);
scale(1 + 0.1 * sin(pulseTime) + vocal * 0.005); // twinkle
imageMode(CENTER);
image(myImage2, 0, 0);
pop();
starAngle2 += 0.02; // keep updating the angle

//star 3
  if(firstRun3){
    myImage3 = loadImage('Star2.png')
    firstRun3 = false;
  }
  
push();
translate(190, 900); // this is now the star’s CENTER
rotate(starAngle2);
scale(1 + 0.1 * sin(pulseTime) + vocal * 0.005); // twinkle
imageMode(CENTER);
image(myImage2, 0, 0);
pop();
starAngle2 += 0.02; // keep updating the angle








}

   





  



//   background(20)
//   textFont('Verdana'); // please use CSS safe fonts
//   rectMode(CENTER)
//   textSize(24);
  
//    let bar_spacing = height / 10;
//    let bar_height = width / 12;
//    let bar_pos_x = width / 2;
 
// // changes 
//    // vocal bar is red
//    fill(200, 0, 0);
//    rect(bar_pos_x, height / 2 + 1 * bar_spacing, 4 * vocal, bar_height);
//    fill(0);
//    text("vocals", bar_pos_x, height / 2 + 1 * bar_spacing + 8);
 
//    // drum bar is green
//    fill(0, 200, 0);
//    rect(bar_pos_x, height / 2 + 2 * bar_spacing, 4 * drum, bar_height);
//    fill(0);
//    text("drums", bar_pos_x, height / 2 + 2 * bar_spacing + 8);
 
//    // bass bar is blue
//    fill(50, 50, 240);
//    rect(bar_pos_x, height / 2 + 3 * bar_spacing, 4 * bass, bar_height);
//    fill(0);
//    text("bass", bar_pos_x, height / 2 + 3 * bar_spacing + 8);
 
//    // other bar is white
//    fill(200, 200, 200);
//    rect(bar_pos_x, height / 2 + 4 * bar_spacing, 4 * other, bar_height);
//    fill(0);
//    text("other", bar_pos_x, height / 2 + 4 * bar_spacing + 8);
//    fill(255, 255, 0);
 
//    // display "words"
//    textAlign(CENTER);
//    textSize(vocal);
//    text(words, width/2, height/3);

