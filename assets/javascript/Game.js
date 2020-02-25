//Global variables
var wins = 0;
var loses = 0;

//start game
function initializegame(){
    //local variables
    var randNumber = Math.floor(Math.random() * 102) + 19;
    var guessedNum = 0;
    var addNumber = 0;
    var rubyNum = Math.floor(Math.random() * 11) + 1;
    var sappNum = Math.floor(Math.random() * 11) + 1;
    var topaNum = Math.floor(Math.random() * 11) + 1;
    var ametNum = Math.floor(Math.random() * 11) + 1;


console.log(rubyNum);
console.log(sappNum);
console.log(topaNum);
console.log(ametNum);


//display randNumber 
    $("#RandomNumber").text(randNumber);
    console.log(randNumber);

//button 1 add random value 
$(".ruby").on("click", function(){
    guessedNum += rubyNum;
    $("#UserGuess").text(guessedNum);
});
//button 2 add random value 
$(".sapp").on("click", function(){
    guessedNum += sappNum;
    $("#UserGuess").text(guessedNum);
});
//button 3 add random value 
$(".topa").on("click", function(){
    guessedNum += topaNum;
    $("#UserGuess").text(guessedNum);
});
//button 4 add random value 
$(".amet").on("click", function(){
    guessedNum += ametNum;
    $("#UserGuess").text(guessedNum);
});


//update display 

//win condition, match guessNum to randNumber

//lose condition, guessNum over randNumber



}
initializegame();

//reset game
function resetGame(){

}