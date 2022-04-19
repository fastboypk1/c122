x=0;
y=0;
draw_circle="";
draw_rect="";

var SpeechRecognition = window.webkitSpeechRecognition;
var recognition= new SpeechRecognition();
function start(){
    document.getElementById("status").innerHTML="Systum is listening please speak";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content= event.results[0][0].transcript;
    document.getElementById("status").innerHTML="The speech has been recognized as " + content;
}