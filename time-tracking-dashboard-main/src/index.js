const navBar = document.getElementById("nav");
const pages = document.querySelectorAll(".page");
navBar.addEventListener("click", (e) => {
  if (e.target.classList.contains("nav__link")) {
    e.preventDefault();
    if (e.target.href.includes("daily")) {
      pages[0].style.zIndex = "3";
      pages[1].style.zIndex = "2";
      pages[2].style.zIndex = "1";
    }
    if (e.target.href.includes("weekly")) {
      pages[0].style.zIndex = "2";
      pages[1].style.zIndex = "3";
      pages[2].style.zIndex = "1";
    }
    if (e.target.href.includes("monthly")) {
      pages[0].style.zIndex = "1";
      pages[1].style.zIndex = "2";
      pages[2].style.zIndex = "3";
    }
  }
});
