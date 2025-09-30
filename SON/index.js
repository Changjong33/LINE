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
