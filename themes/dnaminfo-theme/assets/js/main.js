/* Expand mainnav for mobile */
const mainnavButton = document.querySelector(".mainnav-hamburger");
const mainnavMenu = document.querySelector(".mainnav-menu");
mainnavButton.addEventListener("click", () => {
  mainnavMenu.classList.toggle("mainnav-menu--expanded");
});

/* Auto-hide navbar when scrolling down */
let lastScroll = 0;
const mainnav = document.querySelector(".mainnav");
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

/* Expand TOC */
const tocTitle = document.querySelector(".toc-title");
const tocMenu = document.querySelector(".toc");
if (tocTitle) {
  tocTitle.addEventListener("click", () => {
    tocTitle.classList.toggle("toc-title--expanded");
    tocMenu.classList.toggle("toc--expanded");
  });
}

/* Expand sidebar for mobile */
const sidenavTitle = document.querySelector(".sidenav-title");
const sidenavMenu = document.querySelector(".sidenav-menu");
if (sidenavTitle) {
  sidenavTitle.addEventListener("click", () => {
    sidenavTitle.classList.toggle("sidenav-title--expanded");
    sidenavMenu.classList.toggle("sidenav-menu--expanded");
  });
}
