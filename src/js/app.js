const panels = document.querySelectorAll(".panel");

function toggleOpen() {
  console.log("Hello");
  this.classList.toggle("open");
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) => panel.addEventListener("transitionend", toggleActive));
