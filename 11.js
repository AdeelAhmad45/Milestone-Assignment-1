/*Oue11) Unit converter
A local weather station needs to convert tempqrature data collected in Celsius to Fahrenheit before displaying
it on its website. They want a function that can convert Celsius to Fahrenheit accurately and efficiently. The
function should take input in Celsius and return output in Fahrenheit. This function will help the weather station
to provide temperature readings that are easily understandable to a wider audience.*/

function celsiusToFahrenheit(celsius) {
    const fahrenheit = (celsius * 9/5) + 32;
    return fahrenheit;
  }
  const celsiusTemp = 30;
  const fahrenheitTemp = celsiusToFahrenheit(celsiusTemp);
  console.log(`${celsiusTemp}°C = ${fahrenheitTemp}°F`);
  
  /**Output: 30°C = 86°F */