let showInfo = false;
let img;
let tiger;
let songOn = false;

function preload() {

  tiger = loadSound('Eye of the tiger --.mp3');

}



function setup() {
  createCanvas(windowWidth, windowHeight);

  let hover = createElement("h1", ["sss"]);
  hover.mouseOver(() => showInfo = true);
  hover.mouseOut(() => showInfo = false);
  img = loadImage("CSheart(transparent).png");
  hover.position(5, 1 / 2 * height - 5);
  hover.style('font-size', '18px');
  hover.style('color', '#C65D57');


}

function draw() {

  background('#C65D57');

  textSize(10);
  fill('white');
  textSize(14);
  text('Hover your mouse around the screen to find the hidden heart.', 1 / 6 * width, 1 / 3 * height);
  text('Click for helpful links. Hint:Use the sound as a guide get it perfect!! <3', 1 / 6 * width, 1 / 3 * height + 12.8);

  let volume = map(mouseX, 0, width, 1, 2);
  let speed = map(mouseY, 0.1, height, 0, 2);
  volume = constrain(volume, 1, 2);
  tiger.amp(volume);
  speed = constrain(speed, 0.01, 4);
  tiger.rate(speed);

  if (showInfo) {
    image(img, 1 / 2 * width, 0, img.width * 2, img.height * 2);
    text('Congrats! Click this space.', 5, 1 / 2 * height)

  }

  text("Click for audio hint! Give it at least 30 seconds to load up. :p", 30, height - 90)
}

function mousePressed() {
  if(songOn === false) {
     tiger.play();
     songOn = true;
  }
  if (pmouseX <= 50 &&
      pmouseY >= 1 / 2 * height - 10 && 
      pmouseY < 1 / 2 * height + 10) {
    window.open("https://docs.google.com/spreadsheets/d/1d8lhdKIpkIwz7LwLpVJ0COycmR-sGkiRZHhvavq5WCo/edit?usp=sharing");
    
  } else {}

}