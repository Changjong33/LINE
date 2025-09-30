const currentLang = document.querySelector(".currentLang");
const langMenu = document.querySelector(".langMenu");
const langItems = document.querySelectorAll(".langMenu li");

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
