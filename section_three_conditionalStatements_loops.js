// SECTION THREE: STATEMENTS AND LOOPS

// Exercise 1: Temperature check
// 1. 
function checkTemp(temp) {
    if (temp < 0) {
        console.log("It's freezing!");
    } else if (temp >= 0 && temp <= 15) {
        console.log("It's cold.");
    } else if (temp >= 16 && temp <= 25) {
        console.log("It's mild.");
    } else {
        console.log("It's warm.");
    }
}

// 2. 
function checkTempSwitch(temp) {
    switch (true) {
        case temp < 0:
            console.log("It's freezing!");
            break;
        case temp >= 0 && temp <= 15:
            console.log("It's cold.");
            break;
        case temp >= 16 && temp <= 25:
            console.log("It's mild.");
            break;
        default:
            console.log("It's warm.");
    }
}

// Exercise 2: Divisibility Check
// 1. 
function checkDiv(num) {
    if (num % 2 === 0 && num % 3 === 0) {
        console.log("Divisible by both.");
    } else if (num % 2 === 0) {
        console.log("Divisible by 2.");
    } else if (num % 3 === 0) {
        console.log("Divisible by 3.");
    } else {
        console.log("Not divisible by 2 or 3.");
    }
}

// 2. 
function checkDivSwitch(num) {
    switch (true) {
        case num % 2 === 0 && num % 3 === 0:
            console.log("Divisible by both.");
            break;
        case num % 2 === 0:
            console.log("Divisible by 2.");
            break;
        case num % 3 === 0:
            console.log("Divisible by 3.");
            break;
        default:
            console.log("Not divisible by 2 or 3.");
    }
}

// Exercise 3: For loops

// 1.
for (let i = 1; i <= 10; i++) {
    console.log(i);
}

// 2.
for (let i = 2; i <= 20; i += 2) {
    console.log(i);
}

// 3. 
let sum = 0;
for (let i = 1; i <= 100; i++) {
    sum += i;
}
console.log("Sum:", sum);

// 4. 
// const numbers = [1, 2, 3, 4, 5];
// for (const num of numbers) {
//     console.log(num);
// }
{
    const numbers = [1, 2, 3, 4, 5];
    for (const num of numbers) {
        console.log(num);
    }
}

// 5. 
const numbers = [3, 7, 2, 5, 10, 6];
let largest = numbers[0];
for (const num of numbers) {
    if (num > largest) {
        largest = num;
    }
}
console.log("Largest number:", largest);

// Exercise 4: While loops

// 1.
let i = 1;
while (i <= 10) {
    console.log(i);
    i++;
}

// 2.
i = 2;
while (i <= 20) {
    console.log(i);
    i += 2;
}

// 3.
sum = 0;
i = 1;
while (i <= 100) {
    sum += i;
    i++;
}
console.log("Sum:", sum);

// 4.
i = 1;
while (i < 50) {
    if (i % 5 === 0) {
        console.log(i);
    }
    i++;
}

// Exercise 5: Do While loops

// 1.
i = 1;
do {
    console.log(i);
    i++;
} while (i <= 10);

// 2. 
sum = 0;
i = 1;
do {
    sum += i;
    i++;
} while (i <= 100);
console.log("Sum:", sum);

// 3. 
let userInput;
do {
    userInput = parseInt(prompt("Enter a number greater than 10: "), 10);
} while (userInput <= 10);

// 4.
const targetNumber = Math.floor(Math.random() * 10) + 1;
let guess;
do {
    guess = parseInt(prompt("Guess a number between 1 and 10: "), 10);
    if (guess !== targetNumber) {
        console.log("Wrong guess. Try again.");
    }
} while (guess !== targetNumber);
console.log("Correct. The number was", targetNumber);