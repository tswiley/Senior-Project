$(document).ready(function () {
    // Array of image URLs
    const images = [
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/sitting.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/aerial4.jpeg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/beerrock.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/frontbuilding.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/indoors1.jpg'
    ];

    // Set initial image source
    $('#intro-image').attr('src', images[0]);

    // Counter to keep track of the current image
    let counter = 0;

    // Function to rotate images
    function rotateImages() {
        // Increment counter and loop back to the beginning if necessary
        counter = (counter + 1) % images.length;

        // Create a new image element
        const newImage = new Image();

        // Set the next image source
        newImage.src = images[counter];

        // Set the onload event to animate the opacity
        newImage.onload = function () {
            // Fade out the current image
            $('#intro-image').animate({ opacity: 0 }, 1000, function () {
                // Set the next image source
                $('#intro-image').attr('src', images[counter]);

                // Fade in the new image
                $('#intro-image').animate({ opacity: 1 }, 1000);
            });
        };
    }

    // Set interval to rotate images every 5000 milliseconds (5 seconds)
    setInterval(rotateImages, 5000);
});
