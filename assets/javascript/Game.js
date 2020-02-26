$(document).ready(function(){

//Global variables
var wins = 0;
var loses = 0;
var base = true;
var guessedNum = 0;
var randNumber = 100000;
var rubyNum = 0;
var sappNum = 0;
var topaNum = 0;
var ametNum = 0;


//start game
function start(){
    guessedNum = 0;
    randNumber = Math.floor(Math.random() * 102) + 19;
    rubyNum = Math.floor(Math.random() * 11) + 1;   
    sappNum = Math.floor(Math.random() * 11) + 1;
    topaNum = Math.floor(Math.random() * 11) + 1;
    ametNum = Math.floor(Math.random() * 11) + 1;
    $("#UserGuess").empty();

console.log(rubyNum);
console.log(sappNum);
console.log(topaNum);
console.log(ametNum);

//display randNumber 
$("#RandomNumber").text(randNumber);

}
$(".bt").on("click", function(){
    $("#UserGuess").text(guessedNum);
    test();
    updateDisplay();
})

//button 1 add random value 
$(".ruby").click(function(){
    guessedNum += rubyNum;
});
//button 2 add random value 
$(".sapp").on("click", function(){
    guessedNum += sappNum;
});
//button 3 add random value 
$(".topa").on("click", function(){
    guessedNum += topaNum;
});
//button 4 add random value 
$(".amet").on("click", function(){
    guessedNum += ametNum;
});
function test(){
if (guessedNum === randNumber){
    wins++;
    resetgame();
}
else if (guessedNum > randNumber){
    loses++;
    resetgame();
}
else if (guessedNum < randNumber){
    updateDisplay();
}
}
//update display 
function updateDisplay(){
    $("#Wins").text(wins);
    $("#Losses").text(loses);
    $("#UserGuess").text(guessedNum);
}
//reset game

function resetgame(){
 
    guessedNum = 0;
    rubyNum = 0;
    sappNum = 0;
    topaNum = 0;
    ametNum = 0;
    start();
}
start();
});
