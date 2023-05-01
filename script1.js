// Get all the "Add to Cart" buttons
var addToCartButtons = document.querySelectorAll(".card-btn");

// Get the cart items container
var cartItemsContainer = document.querySelector(".cart-items");

// Get the cart total element
var cartTotalElement = document.getElementById("cart-total");

// Initialize an empty cart array to store the selected items
var cartItems = [];

// Add event listeners to the "Add to Cart" buttons
addToCartButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    // Get the product details from the clicked button's parent elements
    var productContainer = button.closest(".product-card");
    var productImage = productContainer.querySelector(".product-thumb").src;
    var productBrand = productContainer.querySelector(".product-brand").innerText;
    var productShortDescription = productContainer.querySelector(".product-short-description").innerText;
    var productPrice = productContainer.querySelector(".price").innerText;

    // Create a new cart item object
    var cartItem = {
      image: productImage,
      brand: productBrand,
      description: productShortDescription,
      price: productPrice
    };

    // Add the cart item to the cart array
    cartItems.push(cartItem);

    // Render the updated cart items
    renderCartItems();

    // Calculate and update the cart total
    updateCartTotal();
  });
});

// Function to render the cart items in the cart items container
function renderCartItems() {
  // Clear the cart items container
  cartItemsContainer.innerHTML = "";

  // Iterate through the cart items and create the HTML elements
  cartItems.forEach(function (item) {
    var cartItemElement = document.createElement("div");
    cartItemElement.classList.add("cart-item");

    var itemImage = document.createElement("img");
    itemImage.src = item.image;
    itemImage.classList.add("item-image");
    cartItemElement.appendChild(itemImage);

    var itemDetails = document.createElement("div");
    itemDetails.classList.add("item-details");

    var itemBrand = document.createElement("h4");
    itemBrand.innerText = item.brand;
    itemDetails.appendChild(itemBrand);

    var itemDescription = document.createElement("p");
    itemDescription.innerText = item.description;
    itemDetails.appendChild(itemDescription);

    var itemPrice = document.createElement("span");
    itemPrice.classList.add("item-price");
    itemPrice.innerText = item.price;
    itemDetails.appendChild(itemPrice);

    cartItemElement.appendChild(itemDetails);

    cartItemsContainer.appendChild(cartItemElement);
  });
}

// Function to update the cart total
function updateCartTotal() {
  // Calculate the total price of all items in the cart
  var totalPrice = 0;
  cartItems.forEach(function (item) {
    var priceString = item.price.replace("Rs ", "");
    var price = parseInt(priceString);
    totalPrice += price;
  });

  // Update the cart total element
  cartTotalElement.innerText = "Rs " + totalPrice;
}
