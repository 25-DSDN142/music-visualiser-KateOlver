

let firstRun = true;
let firstRun2 = true;
let myImage;
let myImage2;

// vocal, drum, bass, and other are volumes ranging from 0 to 100
function draw_one_frame(words, vocal, drum, bass, other, counter) {

//image
  if(firstRun){
    myImage = loadImage('Background.png')
    firstRun = false;
  }
   image(myImage, 0, 0);

//letf lines   
colorMode(RGB, 53, 46, 93);
rectMode(CENTER);
strokeWeight(12);
stroke(drum,60,60); 

let drumMap = map(counter/4, 0, 100, 0, 300);
let lengthOfLine= 50;
let lineStart = 0; 
let lineEnd = lineStart+lengthOfLine;


for(let i =1; i <= 6; i++){ // 1=i+1 is same as i++ //drumMap
   console.log(lineStart);
   let lineStep = i*bass;
   line(lineStart, lineStep, lineEnd, lineStep);
}


//Plants 
  if(firstRun2){
    myImage2 = loadImage('Plants.png')
    firstRun2 = false;
  }
   image(myImage2, 0, 0);

fill(53, 46, 93); //light yellow
   ellipse(965, 94, 100);
   ellipse(965, 94, 80 + vocal/2, 80 + vocal/2); //x,y,width,height //counter = slowly gets bigger
   ellipse(780, 150, 100);
   ellipse(780, 150, 80 + vocal/2, 80 + vocal/2); //x,y,width,height //counter = slowly gets bigger


// strokeWeight(3);
// stroke(255);
// noFill();ellipse(width/2, height/2, 400 + vocal, 400 + vocal); //x,y,width,height

// stroke(255);
// strokeWeight(3);
// ellipse(690, 180, 150 + other, 150 + other); //x,y,width,height





// //falling circles
// let numCircles = 4;
// let xPositions = [];
// let yPositions = [];
// let speeds = [bass/4, bass/4, bass/4, bass/4]; // different speed for each circle
// let circleSize = 40;

// for (let i = 0; i < numCircles; i++) {
// xPositions.push((i + 1) * width / (numCircles + 1)); // spread evenly
// yPositions.push(0); // start above screen
// speeds.push(random(2, 6)); // random fall speed for each circle
//   }

// for (let i = 0; i < numCircles; i++) {
//     // draw circle
//     fill(100, 150, 255);
//     ellipse(xPositions[i], yPositions[i], circleSize);

//     // move circle down at its own speed
//     yPositions[i] += speeds[i];

//     // if it goes off bottom, reset to top
//     if (yPositions[i] > height + circleSize / 2) {
//       yPositions[i] = -circleSize / 2; 
//       speeds[i] = random(2); // give a new random speed each time
//     }
//   }
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

