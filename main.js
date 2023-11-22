status="";
function setup(){
    canvas=createCanvas(450, 300);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(450, 300);
    video.hide();
}
function draw(){
    image(video, 0, 0, 450, 300);
}
function start(){
    objectdetector=ml5.objectDetector("cocossd", modelLoaded);
    document.getElementById("model_status").innerHTML="status: detecting objects";
    input_value=document.getElementById("inputbox").value;
}
function modelLoaded() {
    console.log("Model Loaded!");
    status=true;
}