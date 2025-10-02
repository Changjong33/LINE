const box = document.querySelector(".background-image");
const SmvText = document.querySelector(".SmvText");
const LscrollNavWrap = document.querySelector(".LscrollNavWrap");

// 스크롤할 경우 box w * h 크기 변경
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

const Limages = ["../LEE/img/background.jpg", "../LEE/img/background1.jpg"];

let Lindex = 0;

function animateBackground() {
  box.style.backgroundSize = "110%";

  const start = performance.now();
  function step(now) {
    const LfirstImg = Math.min((now - start) / 4000, 1);
    const Lsize = 110 - 10 * LfirstImg;
    box.style.backgroundSize = `${Lsize}%`;

    // const Lopacity = 1 - 0.5 * LfirstImg;
    // box.style.opacity = Lopacity;

    if (LfirstImg < 1) {
      requestAnimationFrame(step);
    } else {
      Lindex = (Lindex + 1) % Limages.length;
      box.style.backgroundImage = `url('${Limages[Lindex]}')`;

      // box.style.opacity = 1;

      animateBackground();
    }
  }
  requestAnimationFrame(step);
}

animateBackground();

const mediaQuery = window.matchMedia("(max-width: 878px)");
window.addEventListener("scroll", () => {
  if (mediaQuery.matches) {
    // 모바일
    if (window.scrollY > 0) {
      box.style.width = reducedWidth;
      box.style.height = reducedHeight;
      SmvText.style.opacity = "0";
      LscrollNavWrap.style.opacity = "0";
    }
    // 복원 없음!
  } else {
    // PC
    if (window.scrollY > 0) {
      box.style.width = reducedWidth;
      box.style.height = reducedHeight;
      SmvText.style.opacity = "0";
      LscrollNavWrap.style.opacity = "0";
    } else {
      box.style.width = originalWidth;
      box.style.height = originalHeight;
      SmvText.style.opacity = "1";
      LscrollNavWrap.style.opacity = "1";
    }
  }
});
