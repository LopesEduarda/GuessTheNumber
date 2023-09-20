/*
Desafios
1- Pergunte ao usuário qual é o dia da semana. Se a resposta for "Sábado" ou "Domingo", mostre "Bom fim de semana!". Caso contrário, mostre "Boa semana!".

2- Verifique se um número digitado pelo usuário é positivo ou negativo. Mostre um alerta informando.

3- Crie um sistema de pontuação para um jogo. Se a pontuação for maior ou igual a 100, mostre "Parabéns, você venceu!". Caso contrário, mostre "Tente novamente para ganhar.".

4- Crie uma mensagem que informa o usuário sobre o saldo da conta, usando uma template string para incluir o valor do saldo.

5- Peça ao usuário para inserir seu nome usando prompt. Em seguida, mostre um alerta de boas-vindas usando esse nome.
*/

// 1-
const userResponse = 'Monday';
const weekends = ['Saturday', 'Sunday'];
const weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'];

if (weekends.includes(userResponse)) {
    console.log('Have a good weekend!');
} else {
    console.log('Have a good week!');
};

// 2-
const userNumber = -4;

if (userNumber > 0) {
    console.log('Positive number!');
} else {
    console.log('Negative number!');
};

// 3-
const points = 198;

if (points >= 100) {
    console.log('You win!');
} else {
    console.log('Ops! Try again!');
};

// 4- 
const balance = 4.989;

console.log(`Your balance is ${balance}!`);

// 5-
const userName = 'Maria Eduarda';
console.log(`Your name is ${userName}!`);