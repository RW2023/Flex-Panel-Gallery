const panels = document.querySelectorAll(".panel");

function highlightLetters() {
  panels.forEach((panel) => {
    const words = panel.querySelectorAll("p");
    words.forEach((word) => {
      const letters = word.textContent.split("");
      word.innerHTML = "";
      letters.forEach((letter) => {
        const span = document.createElement("span");
        span.textContent = letter;
        word.appendChild(span);
      });
    });

    const spans = panel.querySelectorAll("span");
    spans.forEach((span, index) => {
      const transformY = getComputedStyle(span).transform.split(",")[5].trim();
      const height = span.getBoundingClientRect().height;
      const offset =
        transformY === "none" ? height * index : height * index - transformY;
      const hue = (offset / panel.offsetHeight) * 360;
      span.style.color = `hsl(${hue}, 100%, 50%)`;
    });
  });
}

function toggleOpen() {
  this.classList.toggle("open");
  highlightLetters();
}

function toggleActive(e) {
  if (e.propertyName.includes("flex")) {
    this.classList.toggle("open-active");
    highlightLetters();
  }
}

panels.forEach((panel) => panel.addEventListener("click", toggleOpen));
panels.forEach((panel) =>
  panel.addEventListener("transitionend", toggleActive)
);