import { cart } from "../data/cart.js";

function getProducts() {
  let productHTML = "";
  products.forEach((product) => {
    productHTML += `
            <div class="product-container">
                <div class="product-image-container">
                    <img
                        class="product-image"
              src="${product.image}"
            />
          </div>

          <div class="product-name limit-text-to-2-lines">
           ${product.name}
          </div>

          <div class="product-rating-container">
            <img
              class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars * 10}.png"
            />
            <div class="product-rating-count link-primary">${product.rating.count}</div>
          </div>

          <div class="product-price">$${(product.priceCents / 100).toFixed(2)}</div>

          <div class="product-quantity-container">
            <select id="quantity-select-${product.id}" class="product-quantity">
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png" />
            Added
          </div>

          <button class="add-to-cart-button button-primary" data-product-id="${product.id}">Add to Cart</button>
        </div>
  `;
  });

  document.querySelector(".js-products-grid").innerHTML = productHTML;

  document.querySelectorAll(".add-to-cart-button").forEach((button) => {
    button.addEventListener("click", () => {
      const productContainer = button.closest(".product-container");
      const quantity =
        productContainer.querySelector(".product-quantity").value;
      addToCart(button.dataset.productId, quantity);
    });
  });
}

function addToCart(productId, quantity) {
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

  let cartQuatity = 0;
  cart.forEach((item) => {
    cartQuatity += item.quantity;
  });

  document.getElementById("cart-quantity").innerHTML = cartQuatity;

  console.log(cartQuatity);
}

getProducts();
