let client = "John";

const groceries = {
  fruits: ["pear", "apple", "banana"],
  vegetables: ["tomatoes", "cucumber", "salad"],
  totalPrice: "20$",
  other: {
    payed: true,
    meansOfPayment: ["cash", "creditCard"]
  }
};

const displayGroceries = () => {
  groceries.fruits.forEach(fruit => {
    console.log(fruit);
  });
};

const cloneGroceries = () => {
  let user = client; // user is a copy of client
  client = "Betty"; // modifying the value of client
  
  let shopping = Object.assign({}, groceries); // shopping is a copy of groceries
  shopping.totalPrice = "35$"; // modifying the value of totalPrice
  shopping.other.payed = false; // modifying the value of payed
  
  console.log(user); // John, because user is a copy of the original value of client
  console.log(shopping); // shopping.totalPrice is "35$", shopping.other.payed is false, because shopping is a shallow copy of the groceries object, so the nested object other is still passed by reference
};

cloneGroceries();