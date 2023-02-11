// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// klik diluar sidebar untuk menghilangkan navbar

const hamburgerMenu = document.getElementById("hamburger-menu");
document.addEventListener("click", function (params) {
  if (
    !hamburgerMenu.contains(params.target) &&
    !navbarNav.contains(params.target)
  ) {
    navbarNav.classList.remove("active");
  }
});
