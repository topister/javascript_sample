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
}


// let { name, age } = person;
// console.log(person)
