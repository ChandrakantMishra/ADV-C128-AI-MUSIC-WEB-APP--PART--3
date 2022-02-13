leftwristX = 0;
leftwristY = 0;
rightwristX = 0;
rightwristY = 0;
song1= "";
song2= "";

function preload(){
 song1 = loadSound("music.mp3");
 song2 = loadSound("music2.mp3");
}

function setup(){
    canvas = createCanvas(600,500);
    canvas.center();
    video = createCapture(VIDEO);
    video.hide();

    poseNet = ml5.poseNet(video,modelLoaded);
    poseNet.on('pose',gotPoses);
}

function modelLoaded(){
    console.log("PoseNet is initialized");
}

function draw(){
    image(video,0,0,600,500);
}

function play(){
    song1.play();
}

function gotPoses(results){
    if(results.length>0){
        scoreleftwristY = results[0].pose.keypoints[9].score;
       console.log(results);
       leftwristX = results[0].pose.leftwrist.x;
       leftwristY = results[0].pose.leftwrist.y;

       rightwristX = results[0].pose.rightwrist.x;
       rightwristY = results[0].pose.rightwrist.y;
    }
}