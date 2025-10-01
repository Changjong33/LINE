const currentLang = document.querySelector(".ScurrentLang");
const langMenu = document.querySelector(".SlangMenu");
const langItems = document.querySelectorAll(".SlangMenu li");

currentLang.addEventListener("click", () => {
  langMenu.classList.toggle("show");
});

langItems.forEach((item) => {
  item.addEventListener("click", () => {
    const selectedLang = item.textContent.trim();
    currentLang.textContent = selectedLang;
    langMenu.classList.remove("show");
  });
});
// 헤더 클릭시 아래 라인 따라오는 것 이해 다 못했음 이해해야함...
const menuItems = document.querySelectorAll(
  ".SheaderMenu > li:not(.ScurrentLine)"
);
const indicator = document.querySelector(".ScurrentLine");

menuItems.forEach((item) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();

    menuItems.forEach((el) => el.classList.remove("current"));
    item.classList.add("current");

    const itemRect = item.getBoundingClientRect();
    const parentRect = item.parentElement.getBoundingClientRect();

    const left = itemRect.left - parentRect.left;
    const width = itemRect.width;

    indicator.style.left = `${left}px`;
    indicator.style.width = `${width}px`;
  });
});

// 요건 버튼 호버했을 때 안에 아이콘 바뀌는 애니메이션
const buttons = document.querySelectorAll(".SdownloadBtn");

buttons.forEach((btn) => {
  const icon = btn.querySelector("i");
  const originalClass = icon.className;

  btn.addEventListener("mouseenter", () => {
    icon.className = "ri-download-fill";
  });

  btn.addEventListener("mouseleave", () => {
    icon.className = originalClass;
  });
});

//헤더 버튼 클릭시 그 위치로 이동하는 js
// document.querySelector("#SclickFirstBtn").addEventListener("click",()=>{
//   document.querySelector("#SmvTarget1").scrollIntoView()
// })
// document.querySelector("#SclickSecondBtn").addEventListener("click",()=>{
//   document.querySelector("#SmvTarget2").scrollIntoView()
// })
// document.querySelector("#SclickThirdBtn").addEventListener("click",()=>{
//   document.querySelector("#SmvTarget3").scrollIntoView()
// })
//v 줄여봤는데 코드 길이가 별 차이 없음.. 버튼이 많아지면 줄어들 것 같긴함

const clickList = (btn, target) => {
  document.querySelector(`#${btn}`).addEventListener("click", () => {
    document.querySelector(`#${target}`).scrollIntoView({ behavior: "smooth" });
  });
};
clickList("SclickFirstBtn", "SmvTarget1");
clickList("SclickSecondBtn", "SmvTarget2");
clickList("SclickThirdBtn", "SmvTarget3");

// 배경이 자동으로 바뀌게 하는 것 이해 완료 설명 가능
const section = document.querySelector(".background-image");
const images = [
  "https://www.line.me/static/img/mv01_w1000.jpg",
  "https://www.line.me/static/img/mv02_w1000.jpg",
];
let current = 0;

setInterval(() => {
  current = (current + 1) % 2;
  section.style.backgroundImage = `url(${images[current]})`;
}, 5000);
