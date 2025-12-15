function convertTemperature(temp, scale) {
    const DIV = document.getElementById("results");


    DIV.innerHTML = "";
    DIV.classList.remove("hot", "cold");

    if (scale == "C") {
        let fahrenheit = (temp * 9 / 5) + 32;
        DIV.innerHTML = fahrenheit;

        if (fahrenheit > 80) {
            DIV.classList.add("hot");
        } else {
            DIV.classList.add("cold");
        }

    } else if (scale == "F") {
        let celsius = (temp - 32) * 5 / 9;
        DIV.innerHTML = celsius;

        if (celsius > 25) {
            DIV.classList.add("hot");
        } else {
            DIV.classList.add("cold");
        }
    }
}

function runConverter() {
    let temp = prompt("Enter the temperature:");
    let scale = prompt("Enter the scale (C or F):");

    scale = scale.toUpperCase(); 

    convertTemperature(temp, scale);
}
