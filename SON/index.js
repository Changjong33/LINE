const loading = document.querySelector("#loading");
const keyframes = [
  { opacity: 1, transform: "translateX(-100px)" },
  { opacity: 1, transform: "translateX(0px)" },
  { opacity: 1, transform: "translateX(100px)" },
];
const option = {
  duration: 500,
  easing: "linear",
  fill: "forwards",
};

window.addEventListener("load", () => {
  loading.animate(keyframes, option);
});
