// faq.js

document.addEventListener("DOMContentLoaded", function () {
   // JavaScript to handle the FAQ dropdown functionality
    const faqQuestions = document.querySelectorAll('.faq-question');

    faqQuestions.forEach((question) => {
        const answer = question.querySelector('.faq-answer');
        const addressParagraph = question.querySelector('p'); // Select the paragraph element

        // Add a click event listener to the address paragraph
        addressParagraph.addEventListener('click', (event) => {
            // Open the link in a new tab
            event.stopPropagation(); // Prevent the question click event from firing
            window.open('https://www.google.com/maps/place/Red+Leg+Brewing+Company/@38.8961298,-104.8705226,17z/data=!3m1!4b1!4m6!3m5!1s0x87134fd6ed613e67:0x323fb74999b17aa2!8m2!3d38.8961298!4d-104.8705226!16s%2Fg%2F12m977n5f?entry=ttu', '_blank');
        });

        question.addEventListener('click', () => {
            question.classList.toggle('active');
        });
    });
});
