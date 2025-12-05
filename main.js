document.addEventListener("DOMContentLoaded", () => {
    console.log("Сайт успешно загружен!");

    const header = document.querySelector(".hero__header");
    const hero = document.querySelector(".hero");
    const burger = document.querySelector(".header__burger");
    const nav = document.querySelector(".header__nav");
    const navLinks = document.querySelectorAll(".header__nav .header__link");

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

    if (navLinks.length && nav) {
        navLinks.forEach(link => {
            link.addEventListener("click", () => {
                nav.classList.remove("header__nav--open");
            });
        });
    }

    // ------- FAQ / Аккордеон -------
    const questionItems = document.querySelectorAll(".questions__item");

    questionItems.forEach(item => {
        const headerBtn = item.querySelector(".questions__header");

        headerBtn.addEventListener("click", () => {
            const isActive = item.classList.contains("questions__item--active");

            // закрываем все
            questionItems.forEach(i => i.classList.remove("questions__item--active"));

            // если кликнули по закрытому — открываем его
            if (!isActive) {
                item.classList.add("questions__item--active");
            }
        });
    });
});
