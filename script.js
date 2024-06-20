const celsiusInput = document.getElementById('celsius');
const fahrenheitInput = document.getElementById('fahrenheit');
const konversiButton = document.getElementById('konversi');
const resetButton = document.getElementById('reset');
const reverseButton = document.getElementById('reverse');
const formulaElement = document.getElementById('formula');

konversiButton.addEventListener('click', convertCelsiusToFahrenheit);
resetButton.addEventListener('click', resetInputs);
reverseButton.addEventListener('click', convertFahrenheitToCelsius);

function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(celsiusInput.value);
    const fahrenheit = (celsius * 9/5) + 32;
    fahrenheitInput.value = fahrenheit.toFixed(2);


    formulaElement.textContent = '°C * (9/5) + 32 = °F';
}

function convertFahrenheitToCelsius() {
    const fahrenheit = parseFloat(fahrenheitInput.value);
    const celsius = (fahrenheit - 32) * 5/9;
    celsiusInput.value = celsius.toFixed(2);


    formulaElement.textContent = '°F - 32) * 5/9 = °C';
}

function resetInputs() {
    celsiusInput.value = 0;
    fahrenheitInput.value = 0;
    formulaElement.textContent = '°C * (9/5) + 32 = °F';
    formulaElement.textContent = '°F - 32) * 5/9 = °C';

}