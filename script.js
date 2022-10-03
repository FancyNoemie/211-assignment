
/**
Portrait
Noémie Carrier


CART 253, Automne 2022

I used Inkscape, a free vectorial software that can be dowloaded here: https://inkscape.org/
Inkscape can give you the coordonates, in pixels, of each point of your drawing.
I made the sketch in inkscape to have a preview, and then entered manually each x and y coordonates.

Besier curves are the same as the handles in illustrator. It gives you more control,
but I don't think it would've used less lines of code.
I instead used curveVertex for the majority of my lines (note that they are not closed shapes).
The line generated will go through each coordonates, but I have a bit less control.
I made two points really close to one another to make more pointy corners.

The result accurately generates what I had in mind, but the code is so big that
it's had to modify.

*/

"use strict";

function preload() {
}

function setup() {
  //https://jsfiddle.net/ozsLtxhb/261/ <------ how to plug P5js into HTML! ;)
    //setting variables for HTML canvas
    var HTMLcanvas = document.getElementById("my-canvas"); // Get element (red) where id=my-canvas
    var HTMLcontext = HTMLcanvas.getContext("2d"); //my-canvas includes all, 2d is an elements more specific inside.
      //setting variables for P5js canvas
      var canvas1 = createCanvas(600, 600);
      noCanvas(); //Prevents canvas to appear one extra time at the end of the webpage??
      var real_canvas = canvas1.canvas;

      //colorpalette
      let glasses = color(50, 37, 44);
      let lineart = color(37,37,55);
      let hair = color(random(145,170),random(1,15),16);
      let darkhair = color(105,39,31)
      let skin = color(232,196,167);
      let skin2 = color(212,166,137)


      background(255); //I made a taller, white background.
      fill(24,100,140);
      noStroke();
      rect(50,50,500,500);

    //CONTOUR

      //shadow
      translate(30,30)
      fill(0,20,0,30);
      beginShape();  //create a continuous spline curve.
        curveVertex(125,600); //the first and the last point are used as curve control point. They will not be visible.
        curveVertex(125,600);
        curveVertex(108,519);
        curveVertex(115,438);
        curveVertex(169,410);//bretelle
        curveVertex(233,392);
        curveVertex(266,370);//cou
        curveVertex(266,374);
        curveVertex(263,342);
        curveVertex(231,321);
        curveVertex(213,286);//cheveux
        curveVertex(212,285);
        curveVertex(188,276);
        curveVertex(176,234);
        curveVertex(145,189);
        curveVertex(155,144);
        curveVertex(181,118);
        curveVertex(181,118);
        curveVertex(201,54);
        curveVertex(333,27);
        curveVertex(390,84);//moitié des cheveux
        curveVertex(392,84);
        curveVertex(427,95);
        curveVertex(460,160);
        curveVertex(465,226);
        curveVertex(448,237);
        curveVertex(443,263);
        curveVertex(421,270);
        curveVertex(421,271);//cheveux
        curveVertex(411,319);
        curveVertex(375,342);//cou
        curveVertex(375,377);
        curveVertex(396,383);//bretelle
        curveVertex(479,432);
        curveVertex(515,473);
        curveVertex(518,560);
        curveVertex(511,600);
        curveVertex(511,600);
      endShape();

      //silhouette
      translate(-40,-30)
      fill(lineart);
      beginShape();
        curveVertex(125,600);//the first and the last point are used as curve control point
        curveVertex(125,600);
        curveVertex(108,519);
        curveVertex(115,438);
        curveVertex(169,410);//bretelle
        curveVertex(233,392);
        curveVertex(266,370);//cou
        curveVertex(266,374);
        curveVertex(263,342);
        curveVertex(231,321);
        curveVertex(213,286);//cheveux
        curveVertex(212,285);
        curveVertex(188,276);
        curveVertex(176,234);
        curveVertex(145,189);
        curveVertex(155,144);
        curveVertex(181,118);
        curveVertex(181,118);
        curveVertex(201,54);
        curveVertex(333,27);
        curveVertex(390,84);//moitié des cheveux
        curveVertex(392,84);
        curveVertex(427,95);
        curveVertex(460,160);
        curveVertex(465,226);
        curveVertex(448,237);
        curveVertex(443,263);
        curveVertex(421,270);
        curveVertex(421,271);//cheveux
        curveVertex(411,319);
        curveVertex(375,342);//cou
        curveVertex(375,377);
        curveVertex(396,383);//bretelle
        curveVertex(479,432);
        curveVertex(515,473);
        curveVertex(518,560);
        curveVertex(511,600);
        curveVertex(511,600);
      endShape();

      //Skin
      fill(skin);
      beginShape();
        curveVertex(135,600);
        curveVertex(135,600);
        curveVertex(118,519);
        curveVertex(125,448);
        curveVertex(169,418);//bretelle
        curveVertex(233,400);
        curveVertex(276,380);//cou
        curveVertex(276,384);
        curveVertex(273,348);
        curveVertex(238,321);
        curveVertex(223,286);//cheveux
        curveVertex(214,254);
        curveVertex(278,197);
        curveVertex(352,184);
        curveVertex(375,160);//moitié des cheveux
        curveVertex(395,201);
        curveVertex(401,271);//cheveux
        curveVertex(395,319);
        curveVertex(365,352);//cou
        curveVertex(365,387);
        curveVertex(396,393);//bretelle
        curveVertex(489,452);
        curveVertex(510,493);
        curveVertex(510,560);
        curveVertex(500,600);
        curveVertex(500,600);
      endShape();

      //Jawline
      noFill();
      stroke(lineart);
      strokeWeight(6);
      beginShape();
        curveVertex(350,357);
        curveVertex(340,357);
        curveVertex(315,357);
        curveVertex(263,342);
        curveVertex(231,321);
        curveVertex(213,286);//cheveux
        curveVertex(213,286);//cheveux
      endShape();

      //CAMISOLE
      fill(36,54,89);
      stroke(lineart);
      strokeWeight(7);
      beginShape();
        curveVertex(165,600);
        curveVertex(165,600);
        curveVertex(160,519);
        curveVertex(169,418);//bretelle
        curveVertex(233,390);//bretelle
        curveVertex(233,400);//bretelle
        curveVertex(300,438);
        curveVertex(370,410);//bretelle
        curveVertex(396,383);//bretelle
        curveVertex(475,426);//bretelle
        curveVertex(455,440);//bretelle
        curveVertex(436,490);
        curveVertex(430,600);
        curveVertex(430,600);
      endShape();

    //FACE

      //glasses
      fill(200,200,203,200);
      stroke(0,0,0);
      strokeWeight(0);
      ellipse(371,240,73,78);  //ellipse(x,y,w,h)
      ellipse(276,240,81,78);
      noFill();
      stroke(255);
      strokeWeight(3);
      angleMode(DEGREES);//start by changing the input of the "start" and "stop".
      arc(371,240,73,78, 0,46);//arc(x, y, w, h, start, stop, [mode], [detail]) https://p5js.org/reference/#/p5/arc
      arc(276,240,81,78, 0,46);
      stroke(glasses);
      strokeWeight(8);
      arc(371,240,73,78, 220,0);
      arc(276,240,81,78, 220,0);
      beginShape(LINES);
        vertex(330,240);
        vertex(317,240);
      endShape();

      //eyes
      push();
      noFill();
      stroke(glasses);
      strokeWeight(30);
      beginShape(LINES);
        vertex(277, 227);
        vertex(277, 259);
        vertex(360, 224);
        vertex(360, 254);
      endShape();
      pop();
      //mouth
      fill(255,200);
      noStroke();
      beginShape();
        curveVertex(311,314);
        curveVertex(311,314);
        curveVertex(340,302);
        curveVertex(356,305);
        curveVertex(339,312);
        curveVertex(311,314);
        curveVertex(311,314);
      endShape();
      push();
      fill(lineart);
      noStroke();
      beginShape();
        curveVertex(320,315);
        curveVertex(320,315);
        curveVertex(340,316);
        curveVertex(365,306);
        curveVertex(374,304);
        curveVertex(376,296);
        curveVertex(360,302);
        curveVertex(344,296);
        curveVertex(326,305);
        curveVertex(309,310);
        curveVertex(293,308);
        curveVertex(294,316);
        curveVertex(311,314);
        curveVertex(340,302);
        curveVertex(356,305);
        curveVertex(339,312);
        curveVertex(325,314);
        curveVertex(320,315);
        curveVertex(320,315);
      endShape();
      pop();

      //nose
      fill(skin2);
      noStroke();
      beginShape();
        curveVertex(323,288);
        curveVertex(307,289);
        curveVertex(322,276);
        curveVertex(343,275);
        curveVertex(339,285);
        curveVertex(323,288);
      endShape();

      //hair
      let middlehair = lerpColor(hair, darkhair, 0.5)//(color1 , color2 , amount between 0 and 1) https://p5js.org/reference/#/p5/lerpColor

      push();
      fill(darkhair);
      translate(-28,-53);
      scale(1.01,0.8);
      rotate();//https://p5js.org/reference/#/p5/rotate
      beginShape();
        curveVertex(277,181);
        curveVertex(215,239);
        curveVertex(210,227);
        curveVertex(240,143);
        curveVertex(344,109);
        curveVertex(377,145);
        curveVertex(373,177);
      endShape();
      pop();

      push();
      fill(middlehair);
      translate(-25,-56);
      scale(1.05,1.15);//https://p5js.org/reference/#/p5/scale
      beginShape();
        curveVertex(277,181);
        curveVertex(215,239);
        curveVertex(210,227);
        curveVertex(240,143);
        curveVertex(344,89);
        curveVertex(377,125);
        curveVertex(373,157);
      endShape();
      pop();

      fill(hair);
      beginShape();
        curveVertex(344,89);
        curveVertex(377,95);
        curveVertex(383,137);
        curveVertex(348,172);
        curveVertex(277,181);
        curveVertex(215,239);
        curveVertex(200,247);
        curveVertex(240,143);
        curveVertex(344,89);
        curveVertex(377,95);
        curveVertex(383,137);
      endShape();

      beginShape();
        curveVertex(387,158);
        curveVertex(387,158);
        curveVertex(394,132);
        curveVertex(394,97);
        curveVertex(422,108);
        curveVertex(436,156);
        curveVertex(419,206);
        curveVertex(387,158);
        curveVertex(387,158);
      endShape();

    //Freckles experiment, inspired by double random https://p5js.org/examples/math-double-random.html
    //this will generate a defined number of points, all at the same y distance from one another, but at a random limited y value.
      let pts = 51; //number of points it will generate, from x=0.
      let y = 15; // the hight variation of the array of points, the higher the number, the wider it will be.

    //For creates a loop! this is what makes it possible to make more than one point! see  https://p5js.org/reference/#/p5/for
      for (let i = 25; i<pts ;i++){//for (repeats sequence) (define a variable (it can be outside, before) ; define an end condition ; action at each sequence (it can be outside, after))
          //i = where the x will start
        stroke(random(10,20),random(15,20));
        strokeWeight(random(2,5));
        point((400/ pts) * i, 530 / 2 + random(-y, y)); //((where the x will stop / steps) * i, height / 2 + random(-y,y))
      }

  		HTMLcontext.drawImage(real_canvas,0,0,600,600); //put p5js canvas into HTML canvas, change here the size of what's inside the P5js canvas! drawImage (image, destinationx, dy, dwidth, dHeight)

}

/**
Description of draw(It runs on and on and on)
*/
function draw() {


}
