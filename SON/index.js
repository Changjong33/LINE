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
