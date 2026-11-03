export const cart = [
  {
    productId: "bc2847e9-5323-403f-b7cf-57fde044a955",
    quantity: 1,
  },
  {
    productId: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    quantity: 2,
  },
];

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
