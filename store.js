const products = [
    { name: 'Shield T-Shirt', price: 19.99, description: 'The Red Leg Brewing Company shield t-shirt for men and women.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/yellowtee.png' },
    { name: 'Waffle Knit Beanie', price: 29.99, description: 'Light grey beanie with Red Logo. Yupoong cuffed beanie. 100% acrylic, Waffle Knit Pattern and woven label', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/beanie.png' },
    { name: 'Bucket Hat', price: 14.99, description: 'Navy Blue bucket hat with Red Logo.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/buckethat.png' },
    { name: 'T-Shirt Colorado – Unisex', price: 24.99, description: 'Colorado Flag Design', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/coloradobluetee.png' },
    { name: 'T-Shirt Grey – Unisex', price: 9.99, description: 'Grey t-shirt with Red Leg Logo on the front.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/graytee.png' },
    { name: 'Koozie', price: 49.99, description: 'Tan Koozie with Red Leg logo and sketch of the brewery.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/koozie.png' },
    { name: 'Crop Top', price: 34.99, description: 'This modest-crop tee with inset sleeves creates an unforgettable silhouette that you will have to have in all colors. Features: Flowy Fit. Side-seamed. Tailored Sleeve. Modest crop.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/ladiescrewgray.png' },
    { name: 'Muscle Tee - Ladies', price: 16.99, description: 'Perfectly flowy t-shirt and forward enough to wear everywhere, this must-have women’s muscle tee is an on-trend essential. Rolled cuffs add an element of style and a high-low, raw-edge hem gives it need-now appeal.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/ladiesmuscleshirt.png' },
    { name: 'Crew Neck Sweatshirt – Unisex', price: 22.99, description: 'Independent SS3000 Crew Neck Sweatshirt. Charcoal Heather for men and women.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/lsgray.png' },
    { name: 'Muscle Tank ', price: 18.99, description: 'This updated unisex jersey muscle tank fits like a well-loved favorite, featuring a crew neck, cutoff sleeves with wide armholes and a retail fit. Designed with superior Airlume combed and ring-spun cotton, this tank acts as a blank canvas for printing.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/mensmuscletee.png' },
    { name: 'T-Shirt Mountain Logo – Unisex', price: 27.99, description: 'Colorado mountain design with the company logo.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/redmountiantee.png' },
    { name: 'Company Logo Patch', price: 11.99, description: 'Our company logo patch is 3.5"x2".', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/patch.png' },
    { name: 'Stickers – Square', price: 1.00, description: 'Includes 2 4"x3" stickers.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/sticker2.png' },
    { name: 'Stickers – Variety Pack', price: 1.50, description: 'Includes 3 stickers', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/stickerpack.png' },
    { name: 'Gift Card', price: 39.99, description: 'This is a physical gift card. Digital cards are not available. If you would like a gift card for a different dollar amount, please call us at 719-598-3776 during business hours. Gift cards cannot be used as a payment method through our online shop at this time. To use a gift card as payment, please call our taproom for assistance.', image: 'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Merch/giftcard.png' }
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
            <p>${product.description}</p>
            <p>$${product.price.toFixed(2)}</p>
            <label for="quantity-${product.name}">Quantity:</label>
            <input type="number" id="quantity-${product.name}" value="1" min="1" class="quantity-input">
            <button onclick="addToCart('${product.name}', ${product.price}, document.getElementById('quantity-${product.name}').value)">Add to Cart</button>
        `;

        productContainer.appendChild(productSection);
    });
});
