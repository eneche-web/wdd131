const menuButton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation');

menuButton.addEventListener('click', () => {
    navigation.classList.toggle('open');
    menuButton.classList.toggle('open');
    }

);

const year = document.querySelector("#currentyear");
year.textContent = new Date().getFullYear();

document.querySelector("#lastModified").textContent='Last Modified: ${document.lastModified}';