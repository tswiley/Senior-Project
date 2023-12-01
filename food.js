"use strict";

$(document).ready(function () {
    const sections = [
        {
            image: 'Vendors/The-Liquor-Cabinet-1.png',
            title: "Liquor Cabinet",
            hours: "Mon-Thu: 12-8 pm\nFri & Sat: 11 am-9 pm\nSunday: 10 am-7 pm",
        },
        {
            image: 'Vendors/Burger-Bunker.png',
            title: "PH Burger Bunker",
            hours: "Mon-Thu: 12-8 pm\nFri & Sat: 11 am-9 pm\nSunday: 12-8 pm",
        },
        {
            image: 'Vendors/Lobstah-Trap.png',
            title: "Chef Bob’s Lobstah Trap",
            hours: "Monday: 4-8 pm\nTuesday: 4-8:30 pm\nWednesday: Closed\nThursday: 4-8 pm\nFriday: 12-9 pm\nSaturday: 11 am-9 pm\nSunday: Closed",
        },
        {
            image: 'Vendors/High-Rise.png',
            title: "High Rise Pizza Kitchen",
            hours: "Mon & Tue: Closed\nWednesday: 12-9 pm\nThursday: 3-9 pm\nFriday: 2-10 pm\nSaturday: 12-10 pm\nSunday: 12-8 pm",
        },
        {
            image: 'Vendors/Olivers-Deli.png',
            title: "Oliver’s Deli",
            hours: "Monday: Closed\nTue-Fri: 4-8 pm\nSaturday: 12-8:30 pm\nSunday: 12-5 pm",
        },
        {
            image: 'Vendors/Sasquatch-Cookie.png',
            title: "Sasquatch Cookies",
            hours: "Monday: Closed\nTue-Fri: 4-8 pm\nSaturday: 12-8:30 pm\nSunday: 12-5 pm",
        },
        {
            image: 'Vendors/Criterium.png',
            title: "Criterium Bike Shop",
            hours: "Mon-Wed: Closed\nThur-Sun: 9 am-5 pm",
        },
    ];

    // Function to create HTML for a section
    function createSectionHTML(section) {
        return `
        <section class="${section.title.toLowerCase().replace(/\s+/g, '-')}">
            <img src="${section.image}" alt="${section.title} Image">
            <h2>${section.title}</h2>
            <p>
                <strong>Hours of Operation:</strong><br>
                ${section.hours}
            </p>
        </section>
        `;
    }

    // Append sections to the body
    const $foodContainer = $('.food-container');
    sections.forEach(section => {
        const sectionHTML = createSectionHTML(section);
        $foodContainer.append(sectionHTML);
    });
});

