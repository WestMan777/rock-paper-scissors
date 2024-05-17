let userChoice = prompt('Rock, Paper, or Scissors?: ');                                     //gets the users answer
let computerChoice;

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
        console.log('its a TIE!')
    }
    else if(computerChoice === 'rock' & userChoice === 'scissors') {
        console.log('Computer Wins!')
    }
    else if(computerChoice === 'paper' & userChoice === 'rock') {
        console.log('Computer Wins!')
    }
    else if(computerChoice === 'scissors' & userChoice === 'paper') {
        console.log('Computer Wins!')
    }
    else if(computerChoice === 'rock' & userChoice === 'paper') {
        console.log('User Wins!')
    }
    else if(computerChoice === 'paper' & userChoice === 'scissors') {
        console.log('User Wins!')
    }
    else if(computerChoice === 'scissors' & userChoice === 'rock') {
        console.log('User Wins!')
    }
    else {
        console.log('Draw');
    }
}

getCompChoice();
console.log('computer chose: ', computerChoice);                                            //prints the user and computer choices to the console
console.log('user chose: ', userChoice);
compareChoices();