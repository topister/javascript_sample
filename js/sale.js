function calc(){
    console.log(document.getElementById("product").value);
    const price = parseInt(document.getElementById("product").value);
    const quantity = parseInt(document.getElementById("number").value);
    console.log(typeof(price));
    console.log(typeof(quantity));
    // alert(`The price is ${price} for the quantity of ${quantity}. Total is ${price * quantity} yen`);
}


let { name, age } = person;
console.log(person)