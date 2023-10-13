function converterTemperatura() {
    var celsius = parseFloat(document.getElementById("celsiusInput").value);

    
    var fahrenheit = (celsius * 9/5) + 32;
    var kelvin = celsius + 273.15;
    var rankine = (celsius + 273.15) * 9/5;


    document.getElementById("fahrenheitOutput").innerText = "Fahrenheit: " + fahrenheit.toFixed(2) + " °F";
    document.getElementById("kelvinOutput").innerText = "Kelvin: " + kelvin.toFixed(2) + " K";
    document.getElementById("rankineOutput").innerText = "Rankine: " + rankine.toFixed(2) + " °R";
}
