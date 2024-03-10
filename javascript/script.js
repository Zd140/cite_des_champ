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

ScrollReveal().reveal(".about__content .section__subheader",{
    ...scrollRevealOption,
    delay:500,
});

ScrollReveal().reveal(".about__content .section__header",{
    ...scrollRevealOption,
    delay:1000,
});

ScrollReveal().reveal(".about__content .section__description",{
    ...scrollRevealOption,
    delay:1500,
});

ScrollReveal().reveal(".about__btn",{
    ...scrollRevealOption,
    delay:2000,
});
//room container
ScrollReveal().reveal(".room__card",{
    ...scrollRevealOption,
    interval:500,
});