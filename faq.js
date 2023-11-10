document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the header content
    fetch("header.html")
        .then(response => response.text())
        .then(headerData => {
            // Fetch and include the footer content after fetching the header
            fetch("footer.html")
                .then(response => response.text())
                .then(footerData => {
                    // Manipulate the DOM to include header and footer content
                    document.body.innerHTML = headerData + document.body.innerHTML + footerData;
                })
                .catch(error => console.error("Error fetching footer content:", error));
        })
        .catch(error => console.error("Error fetching header content:", error));

    // Add your existing script functionality here
    // ...
});



// JavaScript to handle the FAQ dropdown functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    const answer = question.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});