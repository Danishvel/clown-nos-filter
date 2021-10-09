Nose_X = 0;
Nose_Y = 0;
function preload(){
nose = loadImage("https://i.postimg.cc/ZnVBQn1M/clown-2.png");
}

function setup(){
    canvas = createCanvas(300, 300);
    canvas.position(530, 200);
    video = createCapture(VIDEO);
    video.size(300, 300);
    video.hide();

    pose = ml5.poseNet(video, loaded);
    pose.on("pose", gotposes);
}

function gotposes(results){
 if (results.length > 0) {
     console.log(results);
    console.log("Nose X = " + results[0].pose.nose.x + "Nose Y = " + results[0].pose.nose.y);
    Nose_X = results[0].pose.nose.x - 10;
    Nose_Y = results[0].pose.nose.y - 10;
 }
}

function loaded(){
    console.log("Model llllllllllloooooooooddddddddeeed!!!!!!!!!!!")
}

function draw(){
    image(video, 0, 0, 300, 300);
    image(nose, Nose_X, Nose_Y, 30, 30)
}

function Snap(){
    Name = document.getElementById("Name").value;
    save(Name + ".PNG")
}