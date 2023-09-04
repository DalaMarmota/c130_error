var x = 0;
var y = 0;

var drawCircle = "";
var drawRect = "";

var SpeechRecognition =window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();

function start(){
    document.getElementById("status").innerHTML="o sistema está ouvindo. Por favor, fale!";
    recognition.start();
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    document.getElementById("status").innerHTML="A fala foi reconhecida como:"+ content;

    if(content==='círculo'){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="Desenhando um círculo";
        drawCircle="set";
    }
    if(content==='retângulo'){
        x=Math.floor(Math.random()*900);
        y=Math.floor(Math.random()*500);
        document.getElementById("status").innerHTML="Desenhando um círculo";
        drawRect="set";
    }
}
function setup(){
    canvas=createCanvas(900, 500);
}
function draw(){
    if(drawCircle=="set"){
     radius=Math.floor(Math.random()*200);
      drawCircle(x,y,radius);
       document.getElementById("status").innerHTML="Círculo desenhado";
       drawCircle="";
        if(drawRect=="set"){
         rect(x, y, 50, 70);
     drawRect(x,y,radius);
      document.getElementById("status").innerHTML="Retângulo desenhado";
       drawRect="";
     }
}