document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the header content
    fetch("header.html")
        .then(response => response.text())
        .then(headerData => {
            // Create a temporary container to hold the header content
            const headerContainer = document.createElement("div");
            headerContainer.innerHTML = headerData;

            // Append the header content to the body
            document.body.prepend(...headerContainer.childNodes);

            // Fetch and include the footer content after fetching the header
            fetch("footer.html")
                .then(response => response.text())
                .then(footerData => {
                    // Create a temporary container to hold the footer content
                    const footerContainer = document.createElement("div");
                    footerContainer.innerHTML = footerData;

                    // Append the footer content to the body
                    document.body.appendChild(...footerContainer.childNodes);

                    // Add event listener for the cart icon
                    const cartIcon = document.getElementById('cart-icon');
                    const cartContent = document.getElementById('cart-content');

                    cartIcon.addEventListener('click', function () {
                        console.log('Cart icon clicked');
                        // Toggle the visibility of the cart content
                        cartContent.classList.toggle('open');
                        document.body.style.overflow = cartContent.classList.contains('open') ? 'hidden' : 'auto';

                        // Call the updateCart function when the cart is opened
                        if (cartContent.classList.contains('open')) {
                            updateCart();
                        }
                    });

                    // Function to update the cart items and total
                    function updateCart() {
                        console.log('Updating cart......')
                        // Fetch cart items from store.html
                        const cartItemsContainer = document.getElementById('cart-items');
                        const cartItems = Array.from(cartItemsContainer.children).map(item => {
                            return {
                                name: item.dataset.name,
                                price: parseFloat(item.dataset.price),
                            };
                        });

                        // Clear existing cart content
                        cartItemsContainer.innerHTML = '';

                        // Populate cart items or display "Your cart is empty"
                        if (cartItems.length > 0) {
                            cartItems.forEach(item => {
                                const cartItemElement = document.createElement('div');
                                cartItemElement.textContent = `${item.name} - $${item.price.toFixed(2)}`;
                                cartItemsContainer.appendChild(cartItemElement);
                            });
                        } else {
                            const emptyCartMessage = document.createElement('div');
                            emptyCartMessage.textContent = 'Your cart is empty.';
                            cartItemsContainer.appendChild(emptyCartMessage);
                        }

                        // Calculate and display the total
                        const cartTotal = cartItems.reduce((total, item) => total + item.price, 0);
                        document.getElementById('cart-total').textContent = `Total: $${cartTotal.toFixed(2)}`;
                    }

                    // Add event listener for the hamburger menu after content is loaded
                    const mobileMenu = document.getElementById('mobile-menu');
                    const nav = document.getElementById('nav');

                    mobileMenu.addEventListener('click', function () {
                        console.log('Mobile menu clicked');
                        mobileMenu.classList.toggle('open');
                        nav.classList.toggle('show');
                        document.body.style.overflow = nav.classList.contains('show') ? 'hidden' : 'auto';
                    });

                    // Add event listener for closing the cart when clicking outside of it
                    document.addEventListener('click', function (event) {
                        const isCartIcon = event.target.id === 'cart-icon';
                        const isCartContent = event.target.closest('#cart-content');

                        if (!isCartIcon && !isCartContent && cartContent.classList.contains('open')) {
                            cartContent.classList.remove('open');
                            document.body.style.overflow = 'auto';
                        }
                    });

                })
                .catch(error => console.error("Error fetching footer content:", error));
        })
        .catch(error => console.error("Error fetching header content:", error));
});
