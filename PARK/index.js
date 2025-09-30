// card screen 동작
document.querySelectorAll(".Pservice__card").forEach((card) => {
  const overlay = card.querySelector(".Pcard__overlay");

  card.addEventListener("mouseenter", () => {
    overlay.classList.add("show");
  });

  card.addEventListener("mouseleave", () => {
    overlay.classList.remove("show");
  });
});
