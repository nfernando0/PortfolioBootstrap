window.onscroll = function () {
  const navbar = document.querySelector(".navbar");
  const fixNav = navbar.offsetTop;

  if (window.pageYOffset > fixNav) {
    navbar.classList.add("navbar-active");
  } else {
    navbar.classList.remove("navbar-active");
  }
};
