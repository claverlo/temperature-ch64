console.log("The loops js is running...");

// FOR loop syntax -----
// for(start_point; condition; interval){
//   code to be repeated
// }

for (let i = 0; i <= 10; i++) {
    console.log(i);
}

console.log("the code continues here");

// Multiplication table of 2

// Multiplication table of 8

const num = 8;
let result = 0;

document.write(`<h2>Table of ${num}</h2>`);

for (let i = 0; i <= 10; i++) {
  result = num * i;
document.write(`<p>${num} x ${i} = ${result}</p>`);
}

// WHILE Loop
console.log("--- while ---");

let i = 1; // start point

while (i < 10) { // condition
console.log(i);
  i++; // increment
}

// Do-While loop
console.log("--- do-while ---");

let j = 1; // start point

do {
console.log(j);
  j++; // increment
} while (j < 5); // condition

function fillThermo() {
const THERMO = document.getElementById("thermo");
for (let i = 0; i < 10; i++) {
    let level = document.createElement("div");

    console.log(level);
}
}

function fillThermo(){
    const THERMO = document.getElementById("thermo");

    for(let i = 0; i < 10; i++){
        let level = document.createElement("div");
        level.classList.add("level");

        if(i < 3){
            level.style.backgroundColor = "blue";
        } else if(i < 7){
            level.style.backgroundColor = "orange";
        } else {
            level.style.backgroundColor = "red";
        }

        THERMO.appendChild(level);
    }
}

function generateTable(){
    let tbody = document.getElementById("tmpTable");

    for(let i = 0; i < 10; i++){
        let f = (i * 9/5) + 32;

        tbody.innerHTML += `
            <tr>
                <td>${i}</td>
                <td>${f}</td>
            </tr>
        `;
    }
}


generateTable();
