const burger = document.querySelector(".icon-menu");
const burgerList = document.querySelector(".menu__body");
const bodyOverflow = document.body.style.overflow;

burger.addEventListener("click", (event) => {
   burger.classList.toggle("_active");
   burgerList.classList.toggle("_active");

   if (document.body.style.overflow == "hidden") {
      document.body.style.overflow = '';
   } else {
      document.body.style.overflow = 'hidden';
   }

   console.log(document.body.style.overflow)
})

