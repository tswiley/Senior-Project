document.addEventListener('DOMContentLoaded', function () {
    const nav = document.getElementById('nav');
    const hamburger = document.querySelector('.hamburger');
    const closeIcon = document.querySelector('.closeIcon');
    const menuIcon = document.querySelector('.menuIcon');

    function toggleMenu() {
        nav.classList.toggle('open');
        hamburger.classList.toggle('open');
    }

    hamburger.addEventListener('click', toggleMenu);

    document.addEventListener('click', function (e) {
        if (!nav.contains(e.target) && e.target !== hamburger && e.target !== menuIcon && e.target !== closeIcon) {
            nav.classList.remove('open');
            hamburger.classList.remove('open');
        }
    });

    nav.addEventListener('click', function (e) {
        e.stopPropagation();
    });

    const menuItems = document.querySelectorAll('.nav a');
    menuItems.forEach(function (menuItem) {
        menuItem.addEventListener('click', toggleMenu);
    });
});
