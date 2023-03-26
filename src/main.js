const navMenu = document.querySelector("nav");
const menuBtn = document.querySelector(".btnMenu")
const toggleBg = document.querySelector(".changeBg")

let orginalColor = true;


menuBtn.addEventListener("click", openAndCloseMenu);
toggleBg.addEventListener("click", switchBackground, textToBtn);




function openAndCloseMenu () {
    navMenu.classList.toggle("open");
} 
