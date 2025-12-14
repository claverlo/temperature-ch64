console.log("Running conditional js");

// if-statement condition (y/n)
// Syntax
// if (condition) {
// code to be run if the condition is TRUE
// }

let result = 41;

if (result > 40) {
    console.log("You passed the exam");
}

let result2 = 50;

if (result == result2) {
    console.log("The values are the same");
}

// --------------------
// = for assign a value
// == for compare
// case 1: 5 == 5
// case 2: 5 == "5" -> compares the value
// case 3: 5 === "5" -> compares datatype and value

// if-else statement condition (y/n)
// Syntax
// if (condition) {
// code to be run if the condition is TRUE
// } else {
// code to be run if the condition is false
// }

result = 20;

if (result > 40) {
    console.log("you passed the exam");
} else {
    console.error("you did not pass the exam");
}
let waterTemp = 105;

if (waterTemp > 100) {
    console.log("The water is boiling");
} else {
    console.log("The water is not boling");
}

// else-if statement
// Syntax
// if (condition1) {
// code to be run if the condition1 is TRUE
// } else if (condition2) {
// code to be run if the condition2 is TRUE
// } else {
// code to be executed if conditions are FALSE
// }

function ageCalculator() {
    let age = prompt("Enter your age: ");

    if (age < 13) {
        console.log("You are a child");
    } else if (age < 21) {
        console.log("Your are a teenager");
    } else if (age < 64) {
        console.log("You are an adult");
    } else {
        console.log("You are a senior");
    }
}


// challenge 1
// Scenario:
// You're designing a tiny system for self-driving bikes.

// Instructions:
// Ask for the traffic light color (use a prompt)
// ("green", "yellow", or "red") and tell the
// bike what to do (Go, Slow down, Stop)




// challenge 1 - Professor's solution


function trafficchallenge(){
    let light = prompt("Enter a color:");

    if(light.toLowerCase() == "green"){ 
        console.log("Go!");
    }else if(light.toLowerCase() == "yellow"){
        console.log("Slow Down!");
    }else if(light.toLowerCase() == "red"){
        console.log("Stop!");
    }else{
        console.error("Unknown light color. Please proceed with caution.");
    }
}

let userType = "Admin";

if (userType == "Admin") {
    console.log("Full access");
    document.write("Welcome admin.");
} else if (userType == "Editor") {
    console.log("Access but limited actions");
    document.write("Welcome editor.");
} else {
    console.log("You do not have access");
    document.write("Error!");

}


// switch-case

let paymentMethod = "paypal";

switch (paymentMethod) {
    case "cash":
        console.log("You paid with cash");
        break;
    case "bitcoin":
        console.log("You paid with bitcoin");
        break;
    case "card":
        console.log("You paid with credit card");
        break;
    case "paypal":
        console.log("You paid with paypal");
        break;
    case "wise":
        console.log("You paid with wise");
        break;
    default:
        console.log("We can't process the payment method");
}

function weatherOutfit(){
    console.log("weather outfit fn");
    const DIV = document.getElementById("results");
    let tmp = prompt("Enter the weather");

    // clear section
    DIV.innerHTML = "";
    DIV.classList.remove("hot", "cold");

    if (tmp < 15) {
        DIV.innerHTML = "Jacket";
        DIV.classList.add("cold");
    } else if (tmp < 25) {
        DIV.innerHTML = "Sweater";
    } else {
        DIV.innerHTML = "T-Shirt";
        DIV.classList.add("hot");
    }
}



