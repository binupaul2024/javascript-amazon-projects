export const cart = [];

export function addToCart(productId, quantity) {
  let matchingItem;

  cart.forEach((item) => {
    if (item.productId === productId) {
      matchingItem = item;
      //console.log("Cart Item Product ID:", item.productId);
    }
  });

  //console.log(matchingItem);

  if (matchingItem) {
    matchingItem.quantity += parseInt(quantity, 10);
  } else {
    cart.push({
      productId: productId,
      quantity: parseInt(quantity, 10),
    });
  }
}
