var timeEl = document.querySelector(".time");

var startQuiz = document.querySelector("#start-quiz");

var questionOne = document.querySelector("#question1");
var questionTwo = document.querySelector("#question2");
var questionThree = document.querySelector("#question3");
var questionFour = document.querySelector("#question4");
var questionFive = document.querySelector("#question5");

var secondsLeft = 0;

//When you click the START button, a timer starts and you are presented with a question
startQuiz.addEventListener("click", function gameBegins(){
    
    secondsLeft = 100;

    var startPage = document.querySelector("#start-page");
    
    if (startPage.style.display === "none") {
        startPage.style.display = "block";
    } else {
        startPage.style.display = "none";
    };

    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Time Remaining: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            recordScore();
        }
    }, 1000);
});


//When you answer the question, you are presented with another question



//When you answer incorrectly, then time is subrtracted from the clock (something like 10 sec?)



/* When you answer all questions the timer will stop 
OR IF the timer reaches 0
Then the game is over.*/

function recordScore() {

}


/*When the game is over, THEN you can save your initials and score into local storage.
Should we explore redirecting to a new HTML page? Or should we switch between divs that
dynamically change depending on the conditions... That way keeping only one HTML to worry about. */

