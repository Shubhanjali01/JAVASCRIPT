const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit"); // ✅ Fixed spelling
const toCelsius = document.getElementById("toCelsius");
const result = document.getElementById("result");

let temp;

function convert() {
    if (toFahrenheit.checked) {
        temp = Number(textBox.value);
        temp = temp * 9/5 + 32;
        result.textContent = temp.toFixed(1) + "°F"
        // result.textContent = "You selected to Fahrenheit";
    } else if (toCelsius.checked) {
          temp = Number(textBox.value);
        temp = (temp - 32 ) * (5/9);
        result.textContent = temp.toFixed(1) + "°C"
        // result.textContent = "You selected to Celsius";
    } else {
        result.textContent = "Select a unit";
    }
}


//  function convert() {
//       let temp = parseFloat(textBox.value);
// 
//       if (ToFahrenheit.checked) {
//         let f = (temp * 9/5) + 32;
//         result.textContent = `${temp}°C = ${f.toFixed(2)}°F`;
//       } else if (ToCelsius.checked) {
//         let c = (temp - 32) * 5/9;
//         result.textContent = `${temp}°F = ${c.toFixed(2)}°C`;
//       } else {
//         result.textContent = "Select a unit";
//       }
//     }