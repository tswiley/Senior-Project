$(document).ready(function () {
    const images = [
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/sitting.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/aerial4.jpeg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/beerrock.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/frontbuilding.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/indoors1.jpg'
    ];

    $('#intro-image').attr('src', images[0]);

    let counter = 0;

    function rotateImages() {
        counter = (counter + 1) % images.length;

        const newImage = new Image();

        newImage.src = images[counter];

        newImage.onload = function () {
            $('#intro-image').animate({ opacity: 0 }, 1000, function () {
                $('#intro-image').attr('src', images[counter]);
                $('#intro-image').animate({ opacity: 1 }, 1000);
            });
        };
    }

    setInterval(rotateImages, 5000);
});
