// contact.js

document.addEventListener('DOMContentLoaded', function () {
    const contactForm = document.getElementById('contact-form');

    contactForm.addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent the default form submission

        // Validate the form
        const isValid = validateForm();

        if (isValid) {
            // Display success message
            displaySuccessMessage();
            // You can also send the form data to a server using AJAX if needed
            // Example: sendFormData();
        }
    });

    function validateForm() {
        // You can add your custom validation logic here
        // For simplicity, this example just checks if the contact method is selected
        const contactMethod = document.querySelector('input[name="contact-method"]:checked');
        const contactMethodError = document.getElementById('contact-method-error');

        if (!contactMethod) {
            contactMethodError.textContent = 'Please select a contact method';
            return false;
        }

        // Clear any previous error messages
        contactMethodError.textContent = '';
        return true;
    }

    function displaySuccessMessage() {
        const formContainer = document.getElementById('contactUs');
        const successMessage = document.createElement('div');
        successMessage.textContent = 'Thank you for contacting Red Leg Brewing Company. We will be in touch with you soon!';
        successMessage.classList.add('success-message');
    
        // Clear the form
        contactForm.reset();
    
        // Append the success message under the form
        formContainer.appendChild(successMessage);
    }
    // You can add more validation functions as needed
});
