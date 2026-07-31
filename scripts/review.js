let reviews = Number(localStorage.getItem("reviews")) || 0;

reviews++;

localStorage.setItem("reviews". reviews);

document.querySelector("#reviewCount").textContent = reviews;

document.querySelector("#year").textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent = 'Last Modified: ${document.lastModified}';