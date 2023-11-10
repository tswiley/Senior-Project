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





// JavaScript to handle the FAQ dropdown functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    const answer = question.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});