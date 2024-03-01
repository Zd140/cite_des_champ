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