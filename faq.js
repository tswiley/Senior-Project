document.addEventListener("DOMContentLoaded", function () {
    // Fetch and include the common content
    fetch("common.html")
        .then(response => response.text())
        .then(data => {
            document.body.innerHTML = data;
        })
        .catch(error => console.error("Error fetching common content:", error));

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