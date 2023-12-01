"use strict";

document.addEventListener('DOMContentLoaded', function () {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');

    // Load cart items from localStorage on page load
    const storedCartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
    storedCartItems.forEach(item => {
        addToCart(item.productName, item.price, item.quantity, item.image);
    });

    function addToCart(productName, price, quantity, image) {
        const existingCartItem = document.querySelector(`#cart-items li[data-name="${productName}"]`);

        if (existingCartItem) {
            const existingQuantity = parseInt(existingCartItem.dataset.quantity);
            const newQuantity = existingQuantity + parseInt(quantity);
            existingCartItem.dataset.quantity = newQuantity;
            existingCartItem.innerHTML = getCartItemHTML(productName, price, newQuantity, image);
        } else {
            const cartItem = document.createElement('li');
            cartItem.dataset.name = productName;
            cartItem.dataset.price = price;
            cartItem.dataset.quantity = quantity;
            cartItem.innerHTML = getCartItemHTML(productName, price, quantity, image);
            cartItemsContainer.appendChild(cartItem);
        }

        updateCartTotal();
        saveCartToStorage();
        console.log(`Item added to cart: ${productName} - Quantity: ${quantity}`);
    }

    function getCartItemHTML(productName, price, quantity, image) {
        return `
            <div class="cart-item">
                <img src="${image}" alt="${productName}">
                <div>
                    <p>${productName}</p>
                    <p>$${(price * quantity).toFixed(2)} (${quantity}x)</p>
                </div>
            </div>
        `;
    }

    function updateCartTotal() {
        const cartItems = document.querySelectorAll('#cart-items li');
        let total = 0;

        cartItems.forEach(item => {
            const price = parseFloat(item.dataset.price);
            const quantity = parseInt(item.dataset.quantity);
            total += price * quantity;
        });

        cartTotalElement.textContent = `Total: $${total.toFixed(2)}`;
    }

    function saveCartToStorage() {
        const cartItems = Array.from(document.querySelectorAll('#cart-items li'));
        const serializedCart = cartItems.map(item => ({
            productName: item.dataset.name,
            price: parseFloat(item.dataset.price),
            quantity: parseInt(item.dataset.quantity),
            image: item.querySelector('img').src
        }));

        localStorage.setItem('cartItems', JSON.stringify(serializedCart));
    }

    function clearCart() {
        cartItemsContainer.innerHTML = '';
        updateCartTotal();
        localStorage.removeItem('cartItems');
        console.log('Cart cleared');
    }

    function checkout() {
        alert('Checkout button clicked!');
        // Add your checkout logic here
        // You might want to clear the cart after successful checkout
        clearCart();
    }

    window.addToCart = addToCart;
    window.checkout = checkout;
    window.clearCart = clearCart;
});
