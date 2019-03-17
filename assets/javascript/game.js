var min = 19;
var max = 120;
let randomItemNumber;
//function to generate a random target number within the min/max
function randomTargetNumber() {
    var targetNumber = Math.floor(Math.random() * (max - min+1)) + min;
    console.log(targetNumber);
}
//function to generate a random number with the clickable items min/mas
function genRandNumber() {
    var itemMin = 1;
    var itemMax = 12;
    var randomItemNumber = Math.floor(Math.random() * (itemMax - itemMin + 1)) +itemMin;
    return randomItemNumber;
    console.log(randomItemNumber);
}
//reset function
function restart() {
    //generate numbers
    var target = randomTargetNumber();
    var item1 = genRandNumber();
    console.log("New Item 1: " + item1);
    var item2 = genRandNumber();
    console.log("New Item 2: " + item2);
    var item3 = genRandNumber();
    console.log("New Item 3: " + item3);
    var item4 = genRandNumber();
    console.log("New Item 4: " + item4);

    //assign values to the img
    $("#item1").attr("value", item1);
    $("#item2").attr("value", item2);
    $("#item3").attr("value", item3);
    $("#item4").attr("value", item4);
    
}
// START game Loop      function startGame () {

//generate Target and magical item values
    restart();

    var currentScore = 0;
    $("#item1").on("click", function(event) {
        console.log("clicked");

            if(item1){
                var currentScore = currentScore + item1;
                $(".player-score").html(currentScore);
            } else if (currentScore!=0 && (item2)) {
                currentScore + item2;
            }
    
            
    });

// END game loop     }

