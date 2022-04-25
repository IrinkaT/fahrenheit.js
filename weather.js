// the value is constant so we choose this variable that wont change in the code
const kelvin = 293;
//we convert kelvin to celsius
const celsius = kelvin - 273;
//we convert celsius to fahrenheit
let fahrenheit = celsius *(9/5) + 32;
// we round down the fahrenheit temperature
fahrenheit = Math.floor(fahrenheit);

 console.log(`The temperature is ${fahrenheit} degrees Fahrenheit.`)