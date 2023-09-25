globalThis.toggleControl = (event) => {
  const control = document.querySelector("#control");
  const toc = document.querySelector("#toc");
  const button = event.target;

  if (!control || !toc) return;
  if (control.classList.contains("open")) {
    control.classList.remove("open");
    button.classList.remove("open");
  } else {
    control.classList.add("open");
    button.classList.add("open");
    toc.setAttribute("open", "true");
  }
};
