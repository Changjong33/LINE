const box = document.querySelector(".section-container");

const originalWidth = "1920px";
const originalHeight = "953px";
const reducedWidth = "1200px";
const reducedHeight = "360px";

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    box.style.width = reducedWidth;
    box.style.height = reducedHeight;
  } else {
    box.style.width = originalWidth;
    box.style.height = originalHeight;
  }
});
