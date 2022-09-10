/* expand and close menu */
function toggleMenu(menuId) {
  console.log("hello there!");
  const $menu = document.getElementById(menuId);
  if ($menu) {
    element.classList.toggle("menu-title--expanded");
  }
}

/* close side navigation in mobile mode */
const sidenavMenu = document.getElementById("side-menu");
window.addEventListener('DOMContentLoaded', (event) => {
  if (sidenavMenu && window.matchMedia("(max-width: 1200px").matches) {
    sidenavMenu.open = false;
  }
});

/* auto-hide navbar when scrolling down */
let lastScroll = 0;
const mainnav = document.querySelector(".mainnav");
const mainnavMenu = document.querySelector(".mainnav .menu");
window.addEventListener("scroll", () => {
  const currentScroll = window.scrollY;
  if (currentScroll <= 0) {
    mainnav.classList.remove("mainnav-hidden");
  } else if (lastScroll > currentScroll) {
    mainnav.classList.remove("mainnav-hidden");
  } else {
    mainnav.classList.add("mainnav-hidden");
    mainnavMenu.classList.remove("mainnav-menu--expanded");
  }
  lastScroll = currentScroll;
});

