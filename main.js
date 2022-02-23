Webcam.set({
width:350,
height:300,
image_format:"png",
png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach("#camera");
function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML="<img id='captured_img' src='"+data_uri+"'>";
    });
}
console.log("ml5version: ",ml5.version);
classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/wj4vqzfvg/model.json", modelLoaded);
function modelLoaded(){
    console.log("modelLoaded");
}
function speak(){
    var synth=window.speechSynthesisutterThis;
    speakdata1="The first prediction is "+prediction_1;
    speakdata2="The second prediction is "+prediction_2;
    var utterThis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterThis);
}
function check(){
    img=document.getElementById("captured_img");
    classifier.classify(img,gotResult);

}
function gotResult(error,results){
if(error){
    console.error(error);
}
else{
    console.log(results);
document.getElementById("result_emotion_name_1").innerHTML=results[0].label;
document.getElementById("result_emotion_name_2").innerHTML=results[1].label;
prediction_1=results[0].label;
prediction_2=results[1].label;
speak();
if(results[0].label=="happy"){
    document.getElementById("result_emotion_name_1").innerHTML="&#128516;";
}
if(results[0].label=="straight_face"){
    document.getElementById("result_emotion_name_1").innerHTML="&#128528;";
}
if(results[0].label=="sad"){
    document.getElementById("result_emotion_name_1").innerHTML="&#128533;";
}
if(results[0].label=="masked"){
    document.getElementById("result_emotion_name_1").innerHTML="&#128567;";
}
if(results[0].label=="angry"){
    document.getElementById("result_emotion_name_1").innerHTML="&#128545;";
}
if(results[1].label=="happy"){
    document.getElementById("result_emotion_name_2").innerHTML="&#128516;";
}
if(results[1].label=="straight_face"){
    document.getElementById("result_emotion_name_2").innerHTML="&#128528;";
}
if(results[1].label=="sad"){
    document.getElementById("result_emotion_name_2").innerHTML="&#128533;";
}
if(results[1].label=="masked"){
    document.getElementById("result_emotion_name_2").innerHTML="&#128567;";
}
if(results[1].label=="angry"){
    document.getElementById("result_emotion_name_2").innerHTML="&#128545;";
}
}
}