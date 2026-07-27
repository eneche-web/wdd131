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
    dedication: "2005-08-07",
    area: 11500,
    imageUrl: "images/aba.jpg"
},

{
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedication: "1888-05-21",
    area: 74792,
    imageUrl: "images/manti.jpg"
},

{
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedication: "2015-06-07",
    area: 96630,
    imageUrl: "images/payson.jpg"
},

{
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedication: "2020-05-02",
    area: 6861,
    imageUrl: "images/yigo.jpg"
},

{
    templeName: "Washington D.C.",
    location: "Kensington, Maryland",
    dedication: "1974-11-19",
    area: 156558,
    imageUrl: "images/washington.jpeg"
},

{
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedication: "1986-01-10",
    area: 9600,
    imageUrl: "images/lima.jpg"
},

{
    templeName: "Mexico City",
    location: "Mexico City, Mexico",
    dedication: "1983-12-02",
    area: 116642,
    imageUrl: "images/mexico.jpg"
},

{
    templeName: "Accra Ghana",
    location: "Accra, Ghana",
    dedication: "2004-01-11",
    area: 17500,
    imageUrl: "images/accra.jpg"
},

{
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedication: "2019-03-10",
    area: 41010,
    imageUrl: "images/rome.jpg"
},

{
    templeName: "Salt Lake",
    location: "Salt Lake City, Utah",
    dedication: "1893-04-06",
    area: 253000,
    imageUrl: "images/salt-lake.jpg"
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

function displayTemples(filteredTemples) {

    templeGrid.innerHTML = "";

    filteredTemples.forEach((temple) => {

        const card = document.createElement("section");
        card.classList.add("temple-card");

        const name = document.createElement("h3");
        name.textContent = temple.templeName;

        const content = document.createElement("div");
        content.classList.add("card-content");

        const location = document.createElement("p");
        location.innerHTML = `<strong>Location:</strong> ${temple.location}`;

        const dedication = document.createElement("p");
        dedication.innerHTML = `<strong>Dedicated:</strong> ${temple.dedication}`;

        const area = document.createElement("p");
        area.innerHTML = `<strong>Area:</strong> ${temple.area.toLocaleString()} sq ft`;

        const image = document.createElement("img");

        image.src = temple.imageUrl;
        image.alt = `${temple.templeName} Temple`;
        image.loading = "lazy";
        image.width = 400;
        image.height = 250;

        image.onerror = function () {
            this.src = "images/placeholder.webp";
            this.alt = "Temple image unavailable";
        };

        content.append(location, dedication, area);

        card.append(name, content, image);

        templeGrid.appendChild(card);

    });

}
// Display all temples when the page first loads
displayTemples(temples);

// Navigation Buttons

const title = document.querySelector("#page-title");

document.querySelector("#home").addEventListener("click", (event) =>{
    event.preventDefault();
    title.textContent= "Home";

    displayTemples(temples);
});

document.querySelector("#old").addEventListener("click", (event) => {
    event.preventDefault();
    title.textContent = "Old Temples";
    displayTemples(
        temples.filter(temple => new Date(temple.dedication).getFullYear() < 1900)
    );
});

document.querySelector("#new").addEventListener("click", (event) => {
    event.preventDefault();
    title.textContent = "New Temples";
    displayTemples(
        temples.filter(temple => new Date(temple.dedication).getFullYear() > 2000)
    );
});

document.querySelector("#large").addEventListener("click", (event) => {
    event.preventDefault();
    title.textContent = "Large Temples";
    displayTemples(
        temples.filter(temple => temple.area > 90000)
    );
});

document.querySelector("#small").addEventListener("click", (event) => {
    event.preventDefault();
    title.textContent = "Small Temples";
    displayTemples(
    temples.filter(temple => temple.area < 10000)
    );
});

// Footer

const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent=`Last Modified: ${document.lastModified}`;