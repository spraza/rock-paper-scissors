var userScore = 0;
var robotScore = 0;
const userScore_span = document.getElementById("user-score");
const robotScore_span = document.getElementById("robot-score");
//const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissor_div = document.getElementById("scissor");
const glowDuration = 500; // 0.5 sec == 500 msec

main();

function main() {
    rock_div.addEventListener('click', function() {
        game("rock", getRobotChoice());
    })
    paper_div.addEventListener('click', function() {
        game("paper", getRobotChoice());
    })
    scissor_div.addEventListener('click', function() {
        game("scissor", getRobotChoice());
    })    
}

function game(userChoice, robotChoice) {
    winner = whoWins(userChoice, robotChoice);
    if (winner == "user") {
        win(userChoice, robotChoice);
    } else if (winner == "robot") {
        lose(userChoice, robotChoice);
    } else if (winner == "nobody") {
        draw(userChoice, robotChoice);
    } else {
        console.log("ERROR!");
    }
}

function getRobotChoice() {
    const choices = ["rock", "paper", "scissor"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

// returns one of {"nobody", "user", "robot"}
function whoWins(userChoice, robotChoice) {
    if (userChoice == robotChoice) {
        return "nobody";
    }
    switch (userChoice + ":" + robotChoice) {
        case "rock:scissor":
        case "paper:rock":
        case "scissor:paper":
            return "user";
        default:
            return "robot";
    }
}

function win(userChoice, robotChoice) {
    ++userScore;
    userScore_span.innerHTML = userScore;
    result_div.innerHTML = "Robot selected " + robotChoice + ", so you win!";
    document.getElementById(userChoice).classList.add("green-glow");
    setTimeout(
        function() {document.getElementById(userChoice).classList.remove("green-glow")}, 
        glowDuration);
}

function lose(userChoice, robotChoice) {
    ++robotScore;
    robotScore_span.innerHTML = robotScore;
    result_div.innerHTML = "Robot selected " + robotChoice + ", so you lose!";
    document.getElementById(userChoice).classList.add("red-glow");
    setTimeout(
        function() {document.getElementById(userChoice).classList.remove("red-glow")}, 
        glowDuration);
}

function draw(userChoice, robotChoice) {
    result_div.innerHTML = "Robot selected " + robotChoice + ", so we have a draw.";
    document.getElementById(userChoice).classList.add("gray-glow");
    setTimeout(
        function() {document.getElementById(userChoice).classList.remove("gray-glow")}, 
        glowDuration);
}