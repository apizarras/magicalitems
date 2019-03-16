var min = 19;
var max = 120;
let randomItemNumber;
//function to generate a random target number within the min/max
function randomTargetNumber() {
var targetNumber = Math.floor(Math.random() * (max - min+1)) + min;
console.log(targetNumber);
$("#target-number").text(targetNumber);
}
//function to generate a random number with the clickable items min/mas
function genRandNumber() {
var itemMin = 1;
var itemMax = 12;
var randomItemNumber = Math.floor(Math.random() * (itemMax - itemMin + 1)) +itemMin;
$("randomItemNumber").push(randomItemNumber);
console.log(randomItemNumber);
}

// START game Loop      function startGame () {

//generate Target and magical item values
    randomTargetNumber();

    var currentScore = 0;
    $("#item1").on("click", function(event) {
        console.log("clicked");
        genRandNumber();
        $("item1").prepend( "<p>item1</p>");
        currentScore.push(randomItemNumber);
        console.log("this is" + randomItemNumber);
        console.log(currentScore);
    });

// END game loop     }

