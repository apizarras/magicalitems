let playerScore = 0;
let winCounter = 0;

$("#win").text(winCounter);

$(".win-loss-message").html("");

const min = 19;
const max = 120; 
let targetNumber = Math.floor(Math.random() * (max - min+1)) + min;
console.log(targetNumber);
$("#target-number").text(targetNumber);
let item1 = Math.floor(Math.random() *12 +1);
console.log(item1);
let item2 = Math.floor(Math.random() *12 +1);
console.log(item2);
let item3 = Math.floor(Math.random() *12 +1);
console.log(item3);
let item4 = Math.floor(Math.random() *12 +1);
console.log(item4);

$(document).ready(function() {

//function to generate a random target number within the min/max
function randomTargetNumber() {
    const min = 19;
    const max = 120;  
    const targetNumber = Math.floor(Math.random() * (max - min+1)) + min;
    return targetNumber;
    console.log(targetNumber);
}
//function to generate a random number with the clickable items min/mas
function genRandNumber() {
    const itemMin = 1;
    const itemMax = 12;
    const randomItemNumber = Math.floor(Math.random() * (itemMax - itemMin + 1)) +itemMin;
    return randomItemNumber;
    console.log(randomItemNumber);
}
//reset function
function restart() {
    //generate numbers
    targetNumber = randomTargetNumber();
    $("#target-number").text(targetNumber);
    console.log(targetNumber);
    item1 = genRandNumber();
    item2 = genRandNumber();
    item3 = genRandNumber();
    item4 = genRandNumber();
    
    //assign values to the img
    $("#item1").attr("value", item1);
    console.log("New Item 1: " + item1);
    $("#item2").attr("value", item2);
    console.log("New Item 2: " + item2);
    $("#item3").attr("value", item3);
    console.log("New Item 3: " + item3);
    $("#item4").attr("value", item4);
    console.log("New Item 4: " + item4);

    //reset playerScore
    playerScore = 0;
    $(".player-score").html(playerScore);
    console.log(playerScore);
}

function win() {
        $(".win-loss-message").html("Congratulations! You've Won!!!");
        winCounter++;
        console.log("winCounter= " + winCounter);
        $("#win").append(winCounter);
        restart();
}

function lost() {
        console.log("lost function run");
        $(".win-loss-message").html("Sorry, You've Lost...");
        restart();
}

    $("#item1").on("click", function(event) {
        console.log("clicked");
        $(".win-loss-message").html("");
        playerScore = playerScore + item1;
        console.log(playerScore);
        console.log(targetNumber);
        $(".player-score").text(playerScore);
            if (playerScore == targetNumber) {
                console.log("THINKS YOU WON");
                win();
            } else if (playerScore > targetNumber) {
                console.log("THINKS YOU LOST");
                lost();
            }
            else if (playerScore < targetNumber) {
                console.log("Still Playing");
                } 
    });

    $("#item2").on("click", function(event) {
        console.log("clicked");
        $(".win-loss-message").html("");
        playerScore = playerScore + item2;
        console.log("current player score: " + playerScore);
        $(".player-score").text(playerScore);
            if (playerScore == targetNumber) {
                console.log("THINKS YOU WON");
                win();
            } else if (playerScore > targetNumber) {
                console.log("THINKS YOU LOST");
                lost();
            }
            else if (playerScore < targetNumber) {
                console.log("Still Playing");
                } 
    });
    $("#item3").on("click", function(event) {
        console.log("clicked");
        $(".win-loss-message").html("");
        playerScore = playerScore + item3;
        console.log("current player score: " + playerScore);
        $(".player-score").text(playerScore);
            if (playerScore == targetNumber) {
                console.log("THINKS YOU WON");
                win();
            } else if (playerScore > targetNumber) {
                console.log("THINKS YOU LOST");
                lost();
            }
            else if (playerScore < targetNumber) {
                console.log("Still Playing");
                } 
    });
    $("#item4").on("click", function(event) {
        console.log("clicked");
        $(".win-loss-message").html("");
        playerScore = playerScore + item4;
        console.log("current player score: " + playerScore);
        $(".player-score").text(playerScore);
            if (playerScore == targetNumber) {
                console.log("THINKS YOU WON");
                win();
            } else if (playerScore > targetNumber) {
                console.log("THINKS YOU LOST");
                lost();
            }
            else if (playerScore < targetNumber) {
                console.log("Still Playing");
                } 
    });



// END game loop     }
});
