const navMenu = document.querySelector("nav");
const menuBtn = document.querySelector(".btnMenu")

menuBtn.addEventListener("click", openAndCloseMenu);


function openAndCloseMenu () {
    navMenu.classList.toggle("open");
} 

