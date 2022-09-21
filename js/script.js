const burger = document.querySelector(".icon-menu");
const burgerList = document.querySelector(".menu__body");

burger.addEventListener("click", (event) => {
   burger.classList.toggle("_active");
   burgerList.classList.toggle("_active");
})
