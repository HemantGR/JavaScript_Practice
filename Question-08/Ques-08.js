function toCelsius(fahrenheit){
    return (fahrenheit-32)*5/9;
}

const tempInC = toCelsius(100);
console.log(`100F is equal to ${tempInC}`);