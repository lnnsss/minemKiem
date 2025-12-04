document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт успешно загружен!");

    const header = document.querySelector(".hero__header");
    const hero = document.querySelector(".hero");
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav");

    const heroHeight = hero ? hero.offsetHeight : 0;

    window.addEventListener("scroll", () => {
        if (window.scrollY > heroHeight - 80) {
            header.classList.add("hero__header--scrolled");
        } else {
            header.classList.remove("hero__header--scrolled");
        }
    });

    if (burger && nav) {
        burger.addEventListener("click", () => {
            nav.classList.toggle("header__nav--open");
        });
    }
});
