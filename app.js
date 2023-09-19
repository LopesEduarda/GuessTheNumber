alert('Welcome to the secret number game!');

let secretNumber = 71;

let enteredNumber = prompt('Choose a number between 1 e 30.');

if (enteredNumber == secretNumber) {
    console.log('You discovered the secret number!');
    alert('You discovered the secret number!');
} else {
    console.log('Ops! Wrong number!');
    alert('Ops! Wrong number!');
};