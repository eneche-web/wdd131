// Hamburger Menu

const menuButton = document.querySelector("#menu");
const navigation = document.querySelector(".navigation");

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
    }

);


// Temple Data

const temples = [
    {
        templeName: "Aba Nigeria",
        location: "Aba, Nigeria",
        dedication: "2005, August, 7",
        area: 11500,
        imageUr1: "https://content.churchofjesuschhrist.org/templesIdsorg/bc/Temples/photo-galleries/aba-nigeria/400❎250/aba-nigeria-temple-Ids-273999-wallpaper.jpg"
    },

    {
        templeName: "Manti Utah",
        location: "Manti Utah, United States",
        dedication: "1888, May, 21",
        area: 74792,
        imageUr1: "https://content.churchofjesuschrist.org/templeIdsorg/bc/Temples/photo-galleries/manti-utah/400*250/manti-temple-768192-wallpaper.jpg"

    },

    {
        templeName: "Payson Utah",
        location: "Payson, Utah, United States",
        dedication: "2015, june, 7",
        area: 96630,
        imageUr1: "https://content.churchofjesuschrist.org/templesorg/bc/Temples/photo-galleries/payson-utah/400*225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },

    {
        templeName: "Yigo Guam",
        location: "Yigo, Guam",
        dedication: "2020, May, 2",
        area: 6861,
        imageUr1: "https://content.churchofjesuschrist.org/templesIdsorg/bc/Temples/photo-galleries/yigo-guam/400*250/yigo_guam_tample_2.jpg"
    },

    {
        templeName: "Washington D.C.",
        location: "Kensington, Maryland, United States",
        dedication: "1974, November, 19",
        area: 156558,
        imageUr1: "https://content.churchofjesuschrist.org/templesLdsorg/bc/Temples/photo-galleries/washington-dc/400*250/washington_dc_temple-exterior-2.jpg"

    },

    {
        templeName: "Lima Peru",
        location: "Lima, Peru",
        dedication: "1986, January, 10",
        area: 9600,
        imageUr1: "https://content.churchofjesuschrist.org/templesIdsorg/bc/Temples/photo-galleries/lima-peru/400*250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },

    {
        templeName: "Mexico City Mexoco",
        location: "Mexico City, Mexico",
        dedication: "1983, December, 2",
        area: 116642,
        imageUr1: "https://content.churchofjesuschrist.org/templesIdsorg/bc/Temples/photo-galleries/mexico-city-mexico/400*250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },

    {
        templeName: "Accra Ghana",
        location: "Accra, Ghana",
        dedication: "2004, January, 11",
        area: 17500,
        imageUr1: "https://churchofjesuschrist.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-1065.jpg"
    },

    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedication: "2019,  March, 10",
        area: 41010,
        imageUr1: "https;//churchofjesuschristtemples.org/assets/img/temples/rome-italy-temple/rome-italy-temple-45284.jpg"

    },

    {
        templeName: "Salt Lake",
        location: "Salt Lake City, Utah",
        dedication: "1893, April, 6",
        area: 253000,
        imageUr1: "https://churchofjesustemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-3776.jpg"
    }
];

const templeGrid = document.querySelector(".temple-grid");
const pageTitle = document.querySelector("#page-title");
const homeLink = document.querySelector("#home");
const oldLink = document.querySelector("#old");
const newLink = document.querySelector("#new");
const largeLink = document.querySelector("#large");
const smallLink = document.querySelector("#small");

/**
 * Displays the temple cards on the page
 * @param {Array} filteredTemples 
 - The array of the temples to display.
 */

function
displayTemples(filteredTemples) {

    // Clear any existing temple cards
    templeGrid.innerHTML = "";

    // Loop through each temple object
    filteredTemples.forEach((temple) => {

        // Create the card
        const card = document.createElement("section");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        // Card content container

        const content = document.createElement("div");
        content.classList.add("card-content");

        // Location

        const location = document.createElement("p");
        location.innerHTML = '<strong>Location</strong> ${temple.location}';

        // Dedication date

        const dedication = document.createElement("p");
    dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedication};`

        // Area

        const area = document.createElement("p")
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} square feet`;

        // Image

        const image = document.createElement("img");
        image.src = temple.imageUr1; image.alt = '${temple.templeName} Temple';
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        //Handle broken image links
        image.onerror = function(){
            this.src = "images/placeholder.webp";
            this.src = "Temple image unavailable";
        };

        // Build or assembel the card


        content.appendChild(location);
        content.appendChild(dedication);
        content.appendChild(area);
        card.appendChild(name);
        card.appendChild(content);
        card.appendChild(image);

        // Add the card to the page


        templeGrid.appendChild(card);

    });

}
// Display all temples when the page first loads
displayTemples(temples);

// Navigation Buttons

const title = document.querySelector("#page-title");

document.querySelector("#home").addEventListener("click", (event) =>{
    title.textContent= "Home";

    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
    title.textContent = "Old Temples";
    displayTemples(
        temples.filter(temple => new Date(temple.dedication).getFullYear() < 1900)
    );
});

document.querySelector("#new").addEventListener("click", (event) => {
    title.textContent = "New Temples";
    displayTemples(
        temples.filter(temple => new Date(temple.dedication).getFullYear() > 2000)
    );
});

document.querySelector("#large").addEventListener("click", (event) => {
    title.textContent = "Large Temples";
    displayTemples(
        temples.filter(temple => temple.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", (event) => {
    title.textContent = "Small Temples";
    displayTemples(
    temples.filter(temple => temple.area < 10000)
    );
});

// Footer

const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent=`Last Modified: ${document.lastModified}`;