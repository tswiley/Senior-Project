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

    // Preload images
    const imageObjects = imageList.map(src => {
        const img = new Image();
        img.src = src;
        return img;
    });

    function fadeOut() {
        const mainImg = mainImgContainer.querySelector('img');
        mainImg.style.opacity = 0; // Set opacity to 0 for fade-out
        mainImgContainer.classList.add('fade-out');
    }

    function fadeIn() {
        const mainImg = imageObjects[currentIndex].cloneNode(true);
        mainImg.alt = 'Main Image';
        mainImg.style.opacity = 0; // Set initial opacity to 0

        mainImgContainer.innerHTML = '';
        mainImgContainer.appendChild(mainImg);

        // Trigger reflow to apply the fade-in class
        void mainImgContainer.offsetWidth;

        mainImg.style.opacity = 1; // Set opacity to 1 for fade-in
        mainImgContainer.classList.remove('fade-out');

        // Add controls to the DOM
        const controls = document.createElement('div');
        controls.classList.add('controls');

        const prevBtn = document.createElement('button');
        prevBtn.id = 'prevBtn';
        prevBtn.type = 'button';
        prevBtn.classList.add('arrow', 'prev-arrow');
        prevBtn.innerHTML = '<i class="fas fa-chevron-left"></i>';
        controls.appendChild(prevBtn);

        const playPauseBtn = document.createElement('button');
        playPauseBtn.type = 'button';
        playPauseBtn.textContent = 'Pause';
        playPauseBtn.id = 'playPauseBtn';
        playPauseBtn.classList.add('play-pause');
        controls.appendChild(playPauseBtn);

        const nextBtn = document.createElement('button');
        nextBtn.id = 'nextBtn';
        nextBtn.type = 'button';
        nextBtn.classList.add('arrow', 'next-arrow');
        nextBtn.innerHTML = '<i class="fas fa-chevron-right"></i>';
        controls.appendChild(nextBtn);

        mainImgContainer.appendChild(controls);

        // Add event listener for play/pause toggle
        playPauseBtn.addEventListener('click', playPause);
    }

    function rotateImage() {
        fadeOut();
        currentIndex = (currentIndex + 1) % imageList.length;
        setTimeout(() => {
            fadeIn(); // Trigger fade-in after fade-out
        }, 1000); // Adjust the duration as needed
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
        fadeOut();
        setTimeout(() => {
            fadeIn(); // Trigger fade-in after fade-out
        }, 1000); // Adjust the duration as needed
    }

    document.getElementById('prevBtn').addEventListener('click', (event) => {
        event.preventDefault();
        navigateImage('prev');
    });

    document.getElementById('playPauseBtn').addEventListener('click', (event) => {
        event.preventDefault();
        playPause();
    });

    document.getElementById('nextBtn').addEventListener('click', (event) => {
        event.preventDefault();
        navigateImage('next');
    });

    // Initial display of the first image
    fadeIn();

    // Start the image rotation
    intervalId = setInterval(rotateImage, 5000);
});
