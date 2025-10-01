window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const imgbox = document.querySelector(".heroimgbox");

  // 스크롤 0~200px까지 이미지 크기 줄이기
  if (scrollY != 0) {
    imgbox.style.transform = "scale(0.62, 0.34)";
  } else {
    imgbox.style.transform = "scale(1)";
  }
});
