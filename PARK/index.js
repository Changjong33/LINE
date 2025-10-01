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
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".Pservice__category-button");
  const cards = document.querySelectorAll(".Pservice__card");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const category = button.id;

      cards.forEach((card) => {
        if (category === "Pall") {
          card.style.display = "block";
        } else {
          if (card.classList.contains(category)) {
            card.style.display = "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });
});

//   document.addEventListener("DOMContentLoaded", () => {
//   const buttons = document.querySelectorAll(".Pservice__cartegory-button");
//   const cards = document.querySelectorAll(".Pservice__card");

//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       const category = button.id;

//       cards.forEach((card) => {
//         if (category === "Pall") {
//           card.style.display = "block";
//         } else {
//           if (card.classList.contains(category)) {
//             card.style.display = "block";
//           } else {
//             card.style.display = "none";
//           }
//         }
//       });
//     });
//   });
// });
