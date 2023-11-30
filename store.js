"use strict";

const products = [
    { name: 'Shield T-Shirt', price: 19.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/yellowtee.png' },
    { name: 'Waffle Knit Beanie', price: 29.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/beanie.png' },
    { name: 'Bucket Hat', price: 14.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/buckethat.png' },
    { name: 'T-Shirt Colorado – Unisex', price: 24.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/coloradobluetee.png' },
    { name: 'T-Shirt Grey – Unisex', price: 9.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/graytee.png' },
    { name: 'Koozie', price: 49.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/koozie.png' },
    { name: 'Crop Top', price: 34.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/ladiescrewgray.png' },
    { name: 'Muscle Tee - Ladies', price: 16.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/ladiesmuscleshirt.png' },
    { name: 'Crew Neck Sweatshirt – Unisex', price: 22.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/lsgray.png' },
    { name: 'Muscle Tank ', price: 18.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/mensmuscletee.png' },
    { name: 'T-Shirt Mountain Logo – Unisex', price: 27.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/redmountiantee.png' },
    { name: 'Company Logo Patch', price: 11.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/patch.png' },
    { name: 'Stickers – Square', price: 1.00, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/sticker2.png' },
    { name: 'Stickers – Variety Pack', price: 1.50, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/stickerpack.png' },
    { name: 'Gift Card', price: 39.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/giftcard.png' }
];

function addToCart(productName, price, quantity) {
    // Create a new cart item
    const cartItem = document.createElement('li');
    cartItem.dataset.name = productName;
    cartItem.dataset.price = price;
    cartItem.dataset.quantity = quantity;

    // Display the cart item in the list
    cartItem.textContent = `${productName} - $${(price * quantity).toFixed(2)} (${quantity}x)`;

    // Append the cart item to the cart items list
    const cartItemsContainer = document.getElementById('cart-items');
    cartItemsContainer.appendChild(cartItem);

    // Update the cart total
    updateCart();
}

function updateCart() {
    // Your existing updateCart logic
}

function checkout() {
    // Your existing checkout logic
}

document.addEventListener('DOMContentLoaded', function () {
    const productContainer = document.getElementById('product-container');

    // Dynamically generate product sections
    products.forEach(product => {
        const productSection = document.createElement('section');
        productSection.classList.add('product');

        productSection.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <h2>${product.name}</h2>
            <p>$${product.price.toFixed(2)}</p>
            <label for="quantity-${product.name}">Quantity:</label>
            <input type="number" id="quantity-${product.name}" value="1" min="1" class="quantity-input">
            <button onclick="addToCart('${product.name}', ${product.price}, document.getElementById('quantity-${product.name}').value)">Add to Cart</button>
        `;

        productContainer.appendChild(productSection);
    });
});
