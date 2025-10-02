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
// button swiper
// const buttonSwiper = new Swiper(".Pswiper", {
//   freeMode: true,
// });

// const buttonSwiper = new Swiper(".Pservice__category-buttonwrapper", {
//   freeMode: {
//     enabled: true,
//     sticky: true,
//   },
// });

// 카테고리
document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".Pservice__category-button");
  const cards = document.querySelectorAll(".Pservice__card");
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => {
        btn.style.color = "rgba(30, 30, 30, 0.7)";
        btn.style.backgroundColor = "white";
        btn.style.border = "1px solid rgba(30, 30, 30, 0.2)";
      });

      button.style.color = "white";
      button.style.backgroundColor = "#07b53b";
      button.style.border = "1px solid #07b53b";

      const category = button.id;

      cards.forEach((card) => {
        if (category === "Pall") {
          card.style.display = window.innerWidth < 878 ? "flex" : "block";
        } else {
          if (card.classList.contains(category)) {
            card.style.display = window.innerWidth < 878 ? "flex" : "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
  });
});

// const Pswiper = new Swiper(".Pservice__category", {
// Optional parameters
//
// freeMode: {
//   sticky: true,
//   enabled: true,
// },
// });

// category fixed sidebar observer
// const buttonSwiper = document.querySelector(
//   ".Pservice__category-buttonwrapper"
// );
// const sidebarKeyframes = { position: fixed };
// const sidebarOptions = {};
// const sidebarObserver = new IntersectionObserver((targets, me) => {
//   targets.forEach((v, i) => {
//     if (target.isIntersecting) v.target.animate();
//   });
// });

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

// const clickBtn = {
//   color: "white",
//   backgroundColor: "#07b53b",
//   border: "1px solid #07b53b",
// };
// const normalBtn = {
//   color: "rgba(30, 30, 30, 0.7)",
//   backgroundColor: "white",
//   border: "1px solid rgba(30, 30, 30, 0.2)",
// };

// if (button.style.color === "rgba(30, 30, 30, 0.7)") {
//   button.style.color = "white";
// } else {
//   button.style.color = "rgba(30, 30, 30, 0.7)";
// }

// button.
// buttons.style.color =
//   button.style.color == "rgba(30, 30, 30, 0.7)"
//     ? "white"
//     : "rgba(30, 30, 30, 0.7)";
// button.style.backgroundColor =
//   button.style.backgroundColor == "white" ? "#07b53b" : "white";
// button.style.border =
//   button.style.border == "1px solid rgba(30, 30, 30, 0.2)"
//     ? "1px solid #07b53b"
//     : "1px solid rgba(30, 30, 30, 0.2)";
