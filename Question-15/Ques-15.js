function double(num){
    return num * 2;
}

function square(num){
    return num ** 2;
}

const startingNumber = 5;
console.log(square(double(startingNumber)));
