const burger = document.querySelector(".burger");

const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const column = document.querySelector("nav");

burger.addEventListener("click", function () {
    iconBurger.classList.toggle("show"); //tak
    iconX.classList.toggle("show"); //nie
    column.classList.toggle("show"); //nie

})