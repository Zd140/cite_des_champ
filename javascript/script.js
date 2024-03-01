//hamburger menu
const menuBtn  = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuRtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", ()=>{
    navLinks.classList.toggle("open");

    const isOpen =navLinks.classList.contains("open");
    menuRtnIcon.setAttribute('class', isOpen?"ri-close-line": "ri-menu-line");
});

navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuRtnIcon.setAttribute("class", "ri-menu-line");
});


const scrollRevealOption = {
    distance : "50px",
    origin: "bottom",
    duration: "1000"

};

//header container
ScrollReveal().reveal(".header__container p",{
    ...scrollRevealOption,
});
ScrollReveal().reveal(".header__container h1",{
    ...scrollRevealOption,
    delay:500,
});

//about container

ScrollReveal().reveal(".about__image img",{
    ...scrollRevealOption,
    origin: "left",
});

ScrollReveal().reveal(".about__image .section__sub",{
    ...scrollRevealOption,
    delay:500,
});
