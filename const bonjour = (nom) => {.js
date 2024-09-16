function convertir_temperature(celsius) {
    let fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
}


let tempCelsius = 7;
console.log(`La température en Fahrenheit est : ${convertir_temperature(tempCelsius)}`);
