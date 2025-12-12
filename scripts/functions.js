console.log("functions running ...");

// 1. function declaration (creating the fn)
function sayHello() {
    // the body of fn
    console.log("Hello cohort 64");
}

// 2. call/run/trigger/execute the fn (code, console, user)
sayHello(); // code run
sayHello(); // code run
sayHello(); // code run


// Example 2 with 1 parameter
function greetBird(birdName) {
    document.write(`<p>Hello <b>${birdName}</b>! ready to destroy some pigs </p>`);
}

greetBird("Blue");
greetBird("Red");
greetBird("Yellow");

// Example 3 with 2 parameters

function greetPlayer(firstName, lastName) {
    document.write(`<p> Welcome back ${firstName} ${lastName}! </p>`);
}

greetPlayer("Mark", "York");
greetPlayer("Ron", "Person");

// Challenge 1:
// task:
// Create a function called `doubleScore` that takes one number
// (the player's score).
// The function should display the score multiplied by 2. (console)

function doubleScore(score) {
    let total = score * 2;
    console.log(`Your new score is: ${total}`);
}

doubleScore(10); // 20
doubleScore(12); // 24
doubleScore(8);  // 16

// Example 4 with prompt()

function askPigName() {
    let pigName = prompt("Enter the Pig's name: ");
    console.log(`Target: ${pigName}`);
}

// Example 5 with default parameters
function add(num1 = 0, num2 = 0) {
    let total = num1 + num2;
    console.log(`The total is: ${total}`);
}

add();          // 0
add(2, 2);      // 4
add(5, 22);     // 27


function combineNames(firstName = "Unknown", lastName = "Unknown") {
    console.log(`${firstName} ${lastName}`);
}

combineNames("Alice", "Johnson");  // Alice Johnson
combineNames("Alice");             // Alice Unknown
combineNames();                    // Unknown Unknown


// Challenge 3: Convert Minutes to Seconds
// Task:
// - Create a function called `timeInSeconds` that takes one parameter, `minutes`.
// - The function should calculate the seconds by multiplying the minutes by 60.
// - Call the function with different values of minutes and print the results.

// function convertToSeconds(mins){
//     let secs = mins * 60;
//     console.log(`${mins} mins are ${secs} secs`)
// }

// convertToSeconds(1);
// convertToSeconds(10);
// convertToSeconds(3);

// more dynamic

function convertToSeconds() {
    let mins = prompt("Enter the mins");
    let secs = mins * 60;
    document.getElementById("results").innerHTML = `<p>${mins} mins are ${secs} secs</p>`;
}
