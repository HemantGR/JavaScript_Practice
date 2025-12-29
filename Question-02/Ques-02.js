const foodPrice = 100;
const taxRate = foodPrice * 0.05; 
const tipRate = foodPrice * 0.10; 

const totalPrice = foodPrice + taxRate + tipRate;
console.log(totalPrice);

//Bonus
if (totalPrice % 2 === 0){
    console.log("This is even price");
}

else{
    console.log("This is odd price")
}

