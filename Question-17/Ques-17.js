function isPrime(num) {
  if (num <= 1) return false;

  for (let i = 2; i <= num - 1; i++) {
    if (num % i === 0) return false;
  }

  return true;
}

console.log(isPrime(2)); // true

let i = 1;
while(i<=50){
    if(isPrime(i)===true){
        console.log(i);
    }
    i++;
}
