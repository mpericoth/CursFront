function buy(id) {
  for (let i = 0; i < cartList.length; i++) {
    if (cartList[i].id == id) {
      cartList[i].quantity = cartList[i].quantity + 1;
      return true;
    }
  }

  products.forEach((product) => {
    if (product.id == id) {
      cartList.push(product);
      cartList[cartList.length - 1].quantity = 1;
    }
  });
}

function cleanCart() {
  cartList = [];
}

function subTotal() {
  cartList.forEach((product) => {
    if (product.type == "grocery") {
      subtotal.grocery.value += product.price * product.quantity;
    }
    if (product.type == "beauty") {
      subtotal.beauty.value += product.price * product.quantity;
    }
    if (product.type == "clothes") {
      subtotal.clothes.value += product.price * product.quantity;
    }
  });
  console.log(subtotal);
}
function calculateTotal() {
  let total = 0;

  total += subtotal.grocery.value;
  total += subtotal.beauty.value;
  total += subtotal.clothes.value;

  return total;
}
function subTotal2() {
  for (var i = 0; i < cartList.length; i++) {
    for (var j = 0; j < tipus.length; j++) {
      if (cartList[i].type == tipus[j]) {
        var total2 = subtotal[tipus[j]].value + cartList[i].price;
        subtotal[tipus[j]].value = parseFloat(total2.toFixed(2));
      }
    }
  }
}