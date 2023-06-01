var minecraft = "";
var harry_potter = "";

function preload() {
    minecraft = loadSound('Minecraft.mp3');
    harry_potter = loadSound('Harry Potter Theme Song.mp3');
}

function setup() {
    canvas = createCanvas(450, 450);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();
}

function draw() {
    image(video, 0, 0, 500, 500);
}