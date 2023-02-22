const navMenu = document.querySelector("nav");
const menuBtn = document.querySelector(".btnMenu")
const toggleBg = document.querySelector(".changeBg")

let orginalColor = true;


menuBtn.addEventListener("click", openAndCloseMenu);
toggleBg.addEventListener("click", switchBackground, textToBtn);




function openAndCloseMenu () {
    navMenu.classList.toggle("open");
} 

function switchBackground() {
    orginalColor = !orginalColor;
    
    if (orginalColor) {
        document.body.classList.remove("dark");
        document.body.classList.add("light");
    } else {
        document.body.classList.remove("light");
        document.body.classList.add("dark");
    }

}

function textToBtn() {
    if (textToBtn) {
        document.body.innerText = "TO SPACE";
    } else

        document.body.innerHTML = "TO ERTHE"
}