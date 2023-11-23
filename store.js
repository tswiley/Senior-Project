const products = [
    { name: 'Product 1', price: 19.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/angelruntee.png' },
    { name: 'Product 2', price: 29.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/beanie.png' },
    { name: 'Product 3', price: 14.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/buckethat.png' },
    { name: 'Product 4', price: 24.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/coloradobluetee.png' },
    { name: 'Product 5', price: 39.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/giftcard.png' },
    { name: 'Product 6', price: 9.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/graytee.png' },
    { name: 'Product 7', price: 49.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/koozie.png' },
    { name: 'Product 8', price: 34.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/ladiescrewgray.png' },
    { name: 'Product 9', price: 16.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/ladiesmuscleshirt.png' },
    { name: 'Product 10', price: 22.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/lsgray.png' },
    { name: 'Product 11', price: 18.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/mensmuscletee.png' },
    { name: 'Product 12', price: 27.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/redmountaintee.png' },
    { name: 'Product 13', price: 11.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/sticker1.png' },
    { name: 'Product 14', price: 32.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/sticker2.png' },
    { name: 'Product 15', price: 32.99, image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/stickerpack.png' },
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
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <p>$${product.price.toFixed(2)}</p>
            <label for="quantity-${product.name}">Quantity:</label>
            <input type="number" id="quantity-${product.name}" value="1" min="1" class="quantity-input">
            <button onclick="addToCart('${product.name}', ${product.price}, document.getElementById('quantity-${product.name}').value)">Add to Cart</button>
        `;

        productContainer.appendChild(productSection);
    });
});
