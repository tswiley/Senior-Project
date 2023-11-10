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

                    // Add your existing script functionality here
                    // ...

                    // Add event listener for the hamburger menu after content is loaded
                    const mobileMenu = document.getElementById('mobile-menu');
                    const nav = document.getElementById('nav');
                    const closeIcon = document.getElementById('close-icon');

                    mobileMenu.addEventListener('click', function () {
                        mobileMenu.classList.toggle('open');
                        nav.classList.toggle('show');
                    });

                    closeIcon.addEventListener('click', function () {
                        mobileMenu.classList.remove('open');
                        nav.classList.remove('show');
                    });
                })
                .catch(error => console.error("Error fetching footer content:", error));
        })
        .catch(error => console.error("Error fetching header content:", error));
});

// script.js

const products = [
    { name: 'Product 1', price: 19.99, image: 'product1.jpg' },
    { name: 'Product 2', price: 29.99, image: 'product2.jpg' },
    { name: 'Product 3', price: 14.99, image: 'product3.jpg' },
    { name: 'Product 4', price: 24.99, image: 'product4.jpg' },
    { name: 'Product 5', price: 39.99, image: 'product5.jpg' },
    { name: 'Product 6', price: 9.99, image: 'product6.jpg' },
    { name: 'Product 7', price: 49.99, image: 'product7.jpg' },
    { name: 'Product 8', price: 34.99, image: 'product8.jpg' },
    { name: 'Product 9', price: 16.99, image: 'product9.jpg' },
    { name: 'Product 10', price: 22.99, image: 'product10.jpg' },
    { name: 'Product 11', price: 18.99, image: 'product11.jpg' },
    { name: 'Product 12', price: 27.99, image: 'product12.jpg' },
    { name: 'Product 13', price: 11.99, image: 'product13.jpg' },
    { name: 'Product 14', price: 32.99, image: 'product14.jpg' },
];


function addToCart(productName, price) {
    // Your existing addToCart logic
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
            <button onclick="addToCart('${product.name}', ${product.price})">Add to Cart</button>
        `;

        productContainer.appendChild(productSection);
    });
});


