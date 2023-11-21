document.addEventListener("DOMContentLoaded", function () {
    const mainImgContainer = document.querySelector('.home-intro');
    const imageList = [
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/sitting.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/aerial4.jpeg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/beerrock.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/frontbuilding.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/indoors1.jpg'
    ];
    let currentIndex = 0;
    let intervalId;

    // Preload images
    const imageObjects = imageList.map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    function fadeIn() {
        const mainImg = mainImgContainer.querySelector('img');
        mainImg.src = imageObjects[currentIndex].src;
        mainImg.style.opacity = 0; // Set initial opacity to 0

        // Trigger reflow to apply the fade-in effect
        void mainImgContainer.offsetWidth;

        mainImg.style.opacity = 1; // Set opacity to 1 for fade-in
    }

    function rotateImage() {
        const mainImg = mainImgContainer.querySelector('img');
        mainImg.style.opacity = 0 // Set opacity to 0 for fade-out
        currentIndex = (currentIndex + 1) % imageList.length;

        setTimeout(() => {
            fadeIn(); // Trigger fade-in after fade-out
        }, 1000); // Adjust the duration as needed
    }

    // Initial display of the first image
    fadeIn();

    // Start the image rotation
    intervalId = setInterval(rotateImage, 5000);
});
