const nav = document.getElementById('my-nav');
const navbarHeight = nav.offsetHeight;

window.onscroll = function () {
  if (window.pageYOffset > navbarHeight || document.documentElement.scrollTop > navbarHeight) {
    nav.classList.add("nav-colored");
    nav.classList.remove("nav-transparent");
  } else {
    nav.classList.add("nav-transparent");
    nav.classList.remove("nav-colored");
  }
};