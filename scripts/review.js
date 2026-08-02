// Retrieve current review count
let reviews = Number(localStorage.getItem("reviews")) || 0;

// Increase the count
reviews++;

// Save updated count
localStorage.setItem("reviews", reviews);

// Display review count
document.querySelector("#reviewCount").textContent = reviews;

// Footer Information
document.querySelector("#year").textContent =
new Date().getFullYear();

document.querySelector("#lastModified").textContent =
`Last Modified: ${document.lastModified}`;