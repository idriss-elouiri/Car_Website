const hamburgerMenu = document.querySelector(".hamburger-menu");
const navBar = document.querySelector(".navbar") ;

hamburgerMenu.addEventListener("click" , function(){
    hamburgerMenu.classList.toggle("isActive")
    navBar.classList.toggle("isActive")
});