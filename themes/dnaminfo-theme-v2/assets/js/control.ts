let button: HTMLButtonElement | null = null;
const TTL = 43200000; // 12 hours

// hide the button if the user has seen it in the last 12 hours
const mayHideButton = () => {
  const reminderExpiry = localStorage.getItem("dnam-reminder-expiry");
  const now = new Date();

  if (!reminderExpiry || parseInt(reminderExpiry) < now.getTime()) {
    button!.classList.add("visible");
  }
  localStorage.setItem("dnam-reminder-expiry", (now.getTime() + TTL).toString());
}
window.addEventListener("DOMContentLoaded", () => {
  button = document.querySelector("#control-button");
  if (!button) return;

  mayHideButton();
})

// onClick handler for the button
globalThis.onControlButtonClick = () => {
  const control = document.querySelector("#control");
  const toc = document.querySelector("#toc");
  if (!control) return;

  if (control.classList.contains("open")) {
    control.classList.remove("open");
    button!.classList.remove("open");
  } else {
    control.classList.add("open");
    button!.classList.add("open");
    toc?.setAttribute("open", "true");
  }
};