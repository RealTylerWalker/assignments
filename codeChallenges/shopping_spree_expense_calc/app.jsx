const shoppingCart = [
  {
    itemName: "Bluetooth Headphones",
    quantity: 2,
    price: 59.99,
  },
  {
    itemName: "Portable Cassette Player",
    quantity: 1,
    price: 35.99,
  },
];

function getTotalPrice(cart) {
  return cart.reduce((accumulator, item) => {
    return accumulator + item.quantity * item.price;
  }, 0);
}

let totalPrice = getTotalPrice(shoppingCart);

function applyDiscount() {
  if (totalPrice >= 100) {
    return (totalPrice = totalPrice * 0.9);
  }
}

console.log(totalPrice);
