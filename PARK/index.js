// document.addEventListener("DOMContentLoaded", () => {
//   // 버튼 & 카드 선택
//   const buttons = document.querySelectorAll(".Pservice__category-button");
//   const cards = document.querySelectorAll(".Pservice__card");

//   // 오버레이 마우스 이벤트 (hover)
//   cards.forEach((card) => {
//     const overlay = card.querySelector(".Pcard__overlay");
//     if (!overlay) return;

//     card.addEventListener("mouseenter", () => {
//       overlay.classList.add("show");
//     });
//     card.addEventListener("mouseleave", () => {
//       overlay.classList.remove("show");
//     });
//   });

//   // 버튼 클릭 처리: 클래스 기반으로 토글 (인라인 스타일 사용 X)
//   buttons.forEach((button) => {
//     button.addEventListener("click", () => {
//       // 모든 버튼에서 active 제거
//       buttons.forEach((b) => b.classList.remove("active"));

//       // 클릭한 버튼에 active 추가
//       button.classList.add("active");

//       // 선택된 카테고리 id (예: "Pall", "comu", ...)
//       const category = button.id;

//       // 카드 표시/숨김: .hidden 클래스 토글
//       cards.forEach((card) => {
//         if (category === "Pall") {
//           card.classList.remove("hidden");
//         } else {
//           if (card.classList.contains(category)) {
//             card.classList.remove("hidden");
//           } else {
//             card.classList.add("hidden");
//           }
//         }
//       });
//     });
//   });

//   // 기본 상태: 페이지 로드 시 All 선택
//   const defaultBtn = document.getElementById("Pall");
//   if (defaultBtn) defaultBtn.click();
// });

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
          card.style.display = window.innerWidth <= 878 ? "flex" : "block";
        } else {
          if (card.classList.contains(category)) {
            card.style.display = window.innerWidth <= 878 ? "flex" : "block";
          } else {
            card.style.display = "none";
          }
        }
      });
    });
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

// const Pswiper = new Swiper(".swiper", {
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
