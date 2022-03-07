tc =0;
timc="";
drawn="";
Answer="";
Score=0;


Arr= ["Butterfly","Book","Mug","Bottle","Lamp","airplane","alarm clock","ambulance","angel","animal migration","ant","anvil","apple","arm","asparagus","axe","backpack","banana","bandage","barn","baseball","baseball bat","basket","basketball","bat","bathtub","beach","bear","beard","bed","bee","belt","bench","bicycle","binoculars","bird","birthday cake","blackberry","blueberry","book","boomerang","bottlecap","bowtie","bracelet","brain","bread","bridge","broccoli","broom","bucket","bulldozer","bus","bush","butterfly","cactus","cake","calculator","calendar","camel","camera","camouflage","campfire","candle","cannon","canoe","car","carrot","castle","cat","ceiling fan","cello","cell phone","chair","chandelier","church","circle","clarinet","clock","cloud","coffee cup","compass","computer","cookie","cooler","couch","cow","crab","crayon","crocodile","crown","cruise ship","cup","diamond","dishwasher","diving board","dog","dolphin","donut","door","dragon","dresser","drill","drums","duck","dumbbell","ear", "elbow","elephant","envelope","eraser","eye"]

r= Math.floor((Math.random()* Arr.length)+1);
console.log(Arr[r]);
// le = Arr.length;
sketch =Arr[r];
document.getElementById('h').innerHTML = sketch ;

function preload(){
    classifer = ml5.imageClassifier("DoodleNet");
}

function setup(){
canvas = createCanvas(280,280);
canvas.center();
background("pink");
 canvas.mouseReleased(classifyCanvas);

}

function draw(){
    strokeWeight(8);
    stroke(0);
    if (mouseIsPressed){
        line(pmouseX, pmouseY, mouseX, mouseY); 
    }

    checkSketch()
    if(drawn == sketch ){
        Answer="set";
        Score++;
        document.getElementById('score').innerHTML = Score;
    }

}

function checkSketch(){
    tc++;
    document.getElementById('timer').innerHTML = tc;
    if(tc > 400){
        tc = 0;
        timc = "Passed";
    }

    if(timc == "Passed" || Answer== "set"){
        timc = "";
        Answer = "";
        updateCanvas();
    }
}

function updateCanvas(){
    setup();
    // r= Math.floor((Math.random()*le)+1);
    r= Math.floor((Math.random()* Arr.length)+1);
    console.log(Arr[r]);
    sketch =Arr[r];
    document.getElementById('h').innerHTML = sketch ;
}

function classifyCanvas(){
    classifer.classify(canvas, gotResult);
}

function gotResult(error, results){
if (error){
    console.error(error);
}
console.log(results);
drawn = results[0].label;
document.getElementById("drawing").innerHTML = "Drawing is:" + drawn;
document.getElementById("con").innerHTML = "Efficiency:" + Math.round(results[0].confidence * 100) + '%';

// else{
//     p = results[0].confidence*100;


//     ss = window.speechSynthesis
//     utterThis = new SpeechSynthesisUtterance(results[0].label);
//     ss.speak(utterThis);
// }
}

        


