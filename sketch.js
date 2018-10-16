var myColor = ['#6b5abd',//0. blue
               '#c51162', //1. red
               '#603222',//2. brown
               '#FEC07D',//3. skindark
               '#e9e9e9',//4.white
               '#FEC07D',//5. skindark
               '#fadae5',//6.skin
               '#03dac6',//7.treelight
               '#A0A067',//8.treedark
               '#5D4B5D'//9.trunk
               ]

var mic;


function setup() {
  createCanvas(windowWidth, windowHeight);
  
  mic = new p5.AudioIn();
  mic.start();
  
}


function draw() {

  background(myColor[0]);
  var myVolume = mic.getLevel();
  
  //snow
    fill(255);
    noStroke();
         var rx = random() * width;
         var ry = random() * height;
         var rr = random() * 100;
    textSize(rr);
    text("*",rx,ry);

  //text
  textAlign(CENTER);
  textFont('Dhurjati');
  textSize(28);
  fill(255);
  noStroke();
  text("* Merry Christmas *",width/2,height*4/4.7);
  textSize(22);
  fill(myColor[6]);
  text("Where is Santa? (try play a song)",width/2,height*4/5);
  
    
  //var ellipseColor = lerpColor (startingColor,endingColor,myVolume*5); 
  
  //eye
  var mySize = map(myVolume,0,1,5,20);
  
  var mySizeeye = map(myVolume,0,1,5,60);
  
  var mySizenose = map(myVolume,0,1,2,30);
  
  var mySizehat = map(myVolume,0,1,1,1000);

  
  push();
  translate(width/2,height/2);
  
    
  //beard
  fill(255);
  noStroke();
  ellipse(0,60,180,180);
  
  //face
  fill(myColor[6]);
  noStroke();
  rectMode(CENTER);
  rect(0,10,70,70,10);
  
  //hat
  fill(myColor[1]);
  noStroke();
  triangle(-35,-20,0,-100-mySizehat,30,-20);
  fill(myColor[4]);
  ellipse(0,-100-mySizehat,20);

  //hatline
  stroke(myColor[4]);
  strokeWeight(18);  
  line(-35,-20,35,-20); 
 
  
  //nose
  stroke(myColor[1]);
  strokeWeight(mySizenose*4+5)
  line(0,40,0,55);
  
  
  //tree    
  fill(myColor[7]); 
  noStroke();
    

  quad(-100+20,0-50-mySizehat*9+40,
       -50+30,-50-50-mySizehat*9+40,
       50-30,-50-50-mySizehat*9+40,
       100-20,0-50-mySizehat*9+40); 
  
  //tree1
  quad(-100-10,0-mySizehat*7+30,
       -50-10,-50-mySizehat*7+30,
       50+10,-50-mySizehat*7+30,
       100+10,0-mySizehat*7+30);
  
  //tree+50 x+50
  quad(-100-60,0+50-mySizehat*3+20,
       -50-40,-50+50-mySizehat*3+20,
       50+40,-50+50-mySizehat*3+20,
       100+60,0+50-mySizehat*3+20); 
    
  //tree+100 x+100
  quad(-100-110,0+100-mySizehat+10,
       -50-90,-50+100-mySizehat+10,
       50+90,-50+100-mySizehat+10,
       100+110,0+100-mySizehat+10);
    
  //tree+150 x+150
  quad(-100-160,0+150,
       -50-140,-50+150,
       50+140,-50+150,
       100+160,0+150);
    
  
  //eyes white  
    noStroke;
    fill(255);
    ellipse(-14,10,mySizeeye+10);
    ellipse(14,10,mySizeeye+10);

  //eyes black
  strokeWeight(mySize);
  stroke(0);
  line(-11,10,-18,10);
  line(11,10,18,10);
    
}

function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
