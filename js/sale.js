// function calc(){
//     console.log(document.getElementById("product").value);
//     const price = parseInt(document.getElementById("product").value);
//     const quantity = parseInt(document.getElementById("number").value);
//     console.log(typeof(price));
//     console.log(typeof(quantity));
//     // alert(`The price is ${price} for the quantity of ${quantity}. Total is ${price * quantity} yen`);
// }

const priceElement = document.getElementById("product");
const numberElement = document.getElementById("number");
let purchases = [];

function add() {
  const price = parseInt(priceElement.value);
  const number = parseInt(numberElement.value);
  let purchase = {
    price: price,
    number: number,
  };
  purchases.push(purchase);
}

function calc() {
  let sum = 0;
  for(let index = 0; index < purchases.length; index++) {
    sum += purchases[index].price * purchases[index].number;
  }
  alert(`Total is ${sum} yen`);
  purchases = [];
  priceElement.value= "";
  numberElement.value = "";
  const less2k = 500;
  const great2k = 250;
  if(sum < 2000){
    const total = sum + less2k
    alert(`Shipping fee is ${less2k} yen. The total is ${total} yen`);
  }else if(sum > 2000 && sum < 3000){
    const total = sum + great2k;
    alert(`Shipping fee is ${great2k} yen. The total is ${total} yen`)
  }else{
    alert(`Shipping fee is free. The total is ${sum} yen`)
  }
}



// let { name, age } = person;
// console.log(person)
