const box = document.querySelector(".background-image");
const SmvText = document.querySelector(".SmvText");
const LscrollNavWrap = document.querySelector(".LscrollNavWrap");

const originalWidth = "100%";
const originalHeight = "100%";
const reducedWidth = "65%";
const reducedHeight = "40%";

window.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    box.style.animationPlayState = "paused";
    box.style.width = reducedWidth;
    box.style.height = reducedHeight;
    SmvText.style.opacity = "0";
    LscrollNavWrap.style.opacity = "0";
  } else {
    box.style.animationPlayState = "running";
    box.style.width = originalWidth;
    box.style.height = originalHeight;
    SmvText.style.opacity = "1";
    LscrollNavWrap.style.opacity = "1";
  }
});
