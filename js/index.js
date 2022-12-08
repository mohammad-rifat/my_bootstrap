let navbar = document.querySelector("nav");

window.addEventListener("scroll", function () {
  let scroll_value = window.scrollY;
  if (scroll_value > 0) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
});
