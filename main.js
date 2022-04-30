music1 = "";
music2 = "";
function preload() {
    music1 = loadSound("music.mp3");
    music1 = loadSound("music2.mp3")
}
function setup() {
    canvas = createCanvas(600, 500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}
function draw() {
    image(video, 0, 0, 600, 500);
}
function modelLoaded() {
    console.log("Posenet has started. Yipee!")
}
function gotPoses(results) {
    if(results.length > 0) {
        console.log(results);
        leftwristX = results[0].pose.leftWrist.x;
        leftwristY = results[0].pose.leftWrist.y;
        console.log("left wrist's x cords are " + leftwristX + "left wrists's y cords are" + leftwristY);

        rightwristX = results[0].pose.rightWrist.x;
        rightwristY = results[0].pose.rightWrist.y;
        console.log("right wrist's x cords are " + rightwristX + "right wrists's y cords are" + rightwristY);
    }
}