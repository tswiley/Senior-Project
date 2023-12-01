$(document).ready(function () {
    const images = [
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/sitting.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/aerial4.jpeg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/beerrock.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/frontbuilding.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/indoors1.jpg'
    ];

    const introImage = $('#intro-image');
    introImage.attr('src', images[0]);

    let counter = 0;

    function rotateImages() {
        counter = (counter + 1) % images.length;

        const newImage = new Image();
        newImage.src = images[counter];

        newImage.onload = function () {
            introImage.fadeOut(5000, function () {
                introImage.attr('src', images[counter]).fadeIn(5000);
            });
        };
    }

    setInterval(rotateImages, 3000);

    // Subscribe form handling
    $('#subscribe-form').submit(function (event) {
        console.log('Form submitted'); // Log that the form is submitted
        event.preventDefault(); // Prevent the default form submission
    
        const emailInput = $('#email');
        const successMessage = $('#success-message');
    
        // Validate the email format
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        const isValidEmail = emailPattern.test(emailInput.val());
    
        console.log('Email validation:', isValidEmail); // Log the result of email validation
    
        if (isValidEmail) {
            // Display the success message and clear the input
            successMessage.show();
            emailInput.val('');
            console.log('Success message displayed');
        } else {
            // Optionally display an error message for invalid email
            alert('Please enter a valid email address.');
            console.log('Invalid email address');
        }
    });
    
});
