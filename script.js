document.addEventListener("DOMContentLoaded", function () {
    const mainImgContainer = document.querySelector('.home-intro');
    const imageList = [
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/sitting.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/aerial2.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/beerrock.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/frontbuilding.jpg',
        'https://raw.githubusercontent.com/tswiley/Senior-Project/main/Images/indoors1.jpg'
    ];
    let currentIndex = 0;
    let intervalId;

    function rotateImage() {
        const mainImg = document.createElement('img');
        mainImg.src = imageList[currentIndex];
        mainImg.alt = 'Main Image';

        mainImgContainer.innerHTML = '';
        mainImgContainer.appendChild(mainImg);

        currentIndex = (currentIndex + 1) % imageList.length;
    }

    function playPause() {
        const playPauseBtn = document.getElementById('playPauseBtn');
        if (intervalId) {
            clearInterval(intervalId);
            intervalId = null;
            playPauseBtn.innerText = 'Play';
        } else {
            intervalId = setInterval(rotateImage, 5000);
            playPauseBtn.innerText = 'Pause';
        }
    }

    function navigateImage(direction) {
        if (direction === 'prev') {
            currentIndex = (currentIndex - 1 + imageList.length) % imageList.length;
        } else {
            currentIndex = (currentIndex + 1) % imageList.length;
        }
        rotateImage();
    }

    document.getElementById('prevBtn').addEventListener('click', () => navigateImage('prev'));
    document.getElementById('playPauseBtn').addEventListener('click', playPause);
    document.getElementById('nextBtn').addEventListener('click', () => navigateImage('next'));

    // Start the image rotation
    intervalId = setInterval(rotateImage, 5000);
});
