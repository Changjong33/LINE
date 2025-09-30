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

// 카테고리
const PButtons = document.querySelectorAll(
  ".Pservice__category-buttonwrapper button"
);
const PCards = Array.from(document.querySelectorAll(".Pservice__card"));
const PContainer = document.querySelector(".Pservice__card-wrapper");

PButtons.forEach((v, i) => {
  v.addEventListener("click", () => {
    PButtons.forEach((btn) => {
      btn.style.color = "";
      btn.style.backgroundColor = "";
      btn.style.border = "";
    });
    v.style.color = "white";
    v.style.backgroundColor = "#07b53b";
    v.style.border = "1px solid #07b53b";

    categoryClass = "";
    if (v.id === "Pall") categoryClass = "Pall";
    else if (v.id === "comu") categoryClass = "comu";
    else if (v.id === "enter") categoryClass = "enter";
    else if (v.id === "life") categoryClass = "life";
    else if (v.id === "shop") categoryClass = "shop";
    else if (v.id === "tech") categoryClass = "tech";
    else if (v.id === "busi") categoryClass = "busi";
    else if (v.id === "news") categoryClass = "news";
    else if (v.id === "game") categoryClass = "game";

    if (categoryClass === "Pall") showCount = 36;
    else if (categoryClass === "comu") showCount = 2;
    else if (categoryClass === "enter") showCount = 5;
    else if (categoryClass === "life") showCount = 2;
    else if (categoryClass === "shop") showCount = 3;
    else if (categoryClass === "tech") showCount = 4;
    else if (categoryClass === "busi") showCount = 9;
    else if (categoryClass === "news") showCount = 1;
    else if (categoryClass === "game") showCount = 10;

    PContainer.innerHTML = "";

    if (categoryClass === "Pall") {
      filteredPCards = PCards;
    } else {
      filteredPCards = PCards.filter((card) =>
        card.classList.contains(categoryClass)
      );
      filteredPCards.slice(0, showCount).forEach((card) => {
        PContainer.appendChild(card);
      });
    }
  });
});
