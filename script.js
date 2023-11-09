
// faq.js

// JavaScript to handle the FAQ dropdown functionality
const faqQuestions = document.querySelectorAll('.faq-question');

faqQuestions.forEach((question) => {
    const answer = question.querySelector('.faq-answer');

    question.addEventListener('click', () => {
        answer.style.display = answer.style.display === 'block' ? 'none' : 'block';
    });
});
