alert('Welcome to the secret number game!');

let secretNumber = 13;

let enteredNumber;

while (enteredNumber != secretNumber) {
    enteredNumber = prompt('Choose a number between 1 e 100.');

    if (enteredNumber == secretNumber) {
        alert('You discovered the secret number!');
    } else {
        if (enteredNumber > secretNumber) {
            alert(`The secret number is smaller than ${enteredNumber}!`);
        } else if (enteredNumber < secretNumber) {
            alert(`The secret number is bigger than ${enteredNumber}!`);
        }
    }
};
