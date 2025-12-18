function convertTemperature(temp, scale) {
  const DIV = document.getElementById("results");

  DIV.innerHTML = "";
  DIV.classList.remove("hot", "cold");

  temp = Number(temp);

  if (scale == "C") {
    let fahrenheit = (temp * 9 / 5) + 32;

    DIV.innerHTML = temp + "°C = " + fahrenheit + "°F";
    updateThermo(temp);

    if (fahrenheit > 80) {
      DIV.classList.add("hot");
    } else {
      DIV.classList.add("cold");
    }

  } else if (scale == "F") {
    let celsius = (temp - 32) * 5 / 9;

    DIV.innerHTML = temp + "°F = " + celsius + "°C";
    updateThermo(celsius);

    if (celsius > 25) {
      DIV.classList.add("hot");
    } else {
      DIV.classList.add("cold");
    }
  }
}

function convertCtoF() {
let temp = prompt("Enter temperature in Celsius:");
convertTemperature(temp, "C");
}

function convertFtoC() {
let temp = prompt("Enter temperature in Fahrenheit:");
convertTemperature(temp, "F");
}

function generateTable() {
let tbody = document.getElementById("tmpTable");
tbody.innerHTML = "";

for (let c = 0; c <= 100; c += 10) {
let f = (c * 9 / 5) + 32;

tbody.innerHTML += `
<tr>
<td>${c}</td>
<td>${f}</td>
</tr>`;
}
}

function updateThermo(celsius) {
const THERMO = document.getElementById("thermo");
THERMO.innerHTML = "";

let level = document.createElement("div");
level.classList.add("level");

let height = Math.min(Math.max(celsius, 0), 100);
level.style.height = height + "%";

if (celsius <= 10) {
level.style.backgroundColor = "blue";
} else if (celsius <= 25) {
level.style.backgroundColor = "orange";
} else {
level.style.backgroundColor = "red";
}

THERMO.appendChild(level);
}
