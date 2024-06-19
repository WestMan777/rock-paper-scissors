var userChoice = "blank"; 
let computerChoice;
let output;

const rock = document.querySelector("#rock");                                               //query selectors for buttons
const paper = document.querySelector("#paper");
const scissors = document.querySelector("#scissors");
const playButton = document.querySelector("#play-button");
const shootButton = document.querySelector("#shoot-button");

const pChoice = document.querySelector("#player-choice");                                   //query selectors for outputs
const cChoice = document.querySelector("#computer-choice");
const result = document.querySelector("#result");

function getCompChoice() {                                                                  //function that randomly chooses the computers answer
    let answer = 0;

    let number = Math.random();                                                             //generates random number
    let newNumber = number.toString()[3];                                                   //picks the 3rd didget in the random number
    answer = Number(newNumber);

    if(answer <= 0 | answer >= 10) {                                                        //tests to make sure the chosen number is between 1 and 9 for the next part of the code
        getCompChoice();
    }
    else if(answer >= 1 & answer <= 3) {                                                    //decides the computers answer based on the chosen number above
        computerChoice = 'rock';
    }
    else if(answer >= 4 & answer <= 6) {
        computerChoice = 'paper';
    }
    else if(answer >= 7 & answer <= 9) {
        computerChoice = 'scissors';
    }
    
    return computerChoice;                                                                  //returns computers choice
}

function compareChoices() {                                                                 //function that tests who the winner is by comparing the choices
    if(computerChoice === userChoice) {
        output = 'its a TIE!';
    }
    else if(computerChoice === 'rock' & userChoice === 'scissors') {
        output = 'Computer Wins!';
    }
    else if(computerChoice === 'paper' & userChoice === 'rock') {
        output = 'Computer Wins!';
    }
    else if(computerChoice === 'scissors' & userChoice === 'paper') {
        output = 'Computer Wins!';
    }
    else if(computerChoice === 'rock' & userChoice === 'paper') {
        output = 'User Wins!';
    }
    else if(computerChoice === 'paper' & userChoice === 'scissors') {
        output = 'User Wins!';
    }
    else if(computerChoice === 'scissors' & userChoice === 'rock') {
        output = 'User Wins!';
    }
    else {
        output = '';
    }
}

function showResults() {
    if(userChoice === ""){
        cChoice.textContent = "";
        pChoice.textContent = "";
        result.textContent = "";
    }
    else {
        cChoice.textContent = computerChoice;
        pChoice.textContent = userChoice;
        result.textContent = output;
    }
}

var playCount = 0;

function play() {
    playCount = playCount++;

    rock.addEventListener("click", function(){
        userChoice = "rock";
        return userChoice;
    });
    
    paper.addEventListener("click", function(){
        userChoice = "paper";
        return userChoice;
    });
    
    scissors.addEventListener("click", function(){
        userChoice = "scissors";
        return userChoice;
    });
}

function shoot() {
    getCompChoice();
    compareChoices();
    showResults();
}

playButton.addEventListener('click', play);
shootButton.addEventListener('click', shoot)