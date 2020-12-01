/* decide if dark mode needs to be set */
document.addEventListener("DOMContentLoaded", () => {
  const html = document.documentElement;
  const themeButton = document.querySelector(".mainnav-toggle");
  const toDarkIcon = "url(/img/icons/brightness_3-white-24dp.svg)";
  const toLightIcon = "url(/img/icons/brightness_6-white-24dp.svg)";

  /* load localStorage */
  let storedTheme = window.localStorage.getItem("theme");
  /* load system preference */
  let prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  /* toggle dark theme */
  if (storedTheme === "dark" || prefersDark) {
    html.classList.add("dark-theme");
    themeButton.style.background = toLightIcon;
    window.localStorage.setItem("theme", "dark");
  } else {
    html.classList.remove("dark-theme");
    themeButton.style.background = toDarkIcon;
    window.localStorage.setItem("theme", "light");
  }

  /* Let users toggle the theme */
  themeButton.addEventListener("click", () => {
    if (html.classList.contains("dark-theme")) {
      html.classList.remove("dark-theme"); // switches to light theme
      themeButton.style.background = toDarkIcon; // change the icon
      window.localStorage.setItem("theme", "light"); // store the change
    } else {
      html.classList.add("dark-theme"); // switches to dark theme
      themeButton.style.background = toLightIcon; // change the icon
      window.localStorage.setItem("theme", "dark"); // store the change
    }
  });
});
