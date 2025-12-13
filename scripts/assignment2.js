function convertTemperature() {
    let temperature = prompt("Enter temperature in Celsius:");

    let fahrenheit = (temperature * 9 / 5) + 32;

    let resultBox = document.getElementById("result");

    resultBox.innerHTML =
    `The conversion of Celsius ${temperature}° to Fahrenheit is ${fahrenheit}°`;

    resultBox.style.display = "block"; 
}


