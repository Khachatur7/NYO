const pageNavLinks = document.querySelectorAll(
  ".header .navigation_list .navigation_list_item"
);
const mobMenuLinks = document.querySelectorAll(
    ".mob_navigation_list"
  );
const openMobMenu = document.querySelector(".mob_nav")  
const closeMobMenu = document.querySelector(".close_mob_menu")  
const mobileMenu = document.querySelector(".mob_menu")
pageNavLinks.forEach((text) => {
  text.addEventListener("click", function () {
    if (!text.classList.contains("acive_nav_text")) {
      pageNavLinks.forEach((text2) => {
        if (text2.classList.contains("acive_nav_text")) {
          text2.classList.remove("acive_nav_text");
        }
      });
      text.classList.add("acive_nav_text");
    }
  });
});

mobMenuLinks.forEach((text) => {
    text.addEventListener("touchend", function () {
    mobileMenu.style.transform = "translateX(100%)"
    });
  });

openMobMenu.addEventListener("touchend",function() {
    mobileMenu.style.transform = "translateX(0%)"
}) 


closeMobMenu.addEventListener("touchend",function() {
    mobileMenu.style.transform = "translateX(100%)"
}) 

