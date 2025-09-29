const loading = document.querySelector("#loading");
<<<<<<< HEAD
const loadingGreenBox=document.querySelector('#loadingGreenBox')
const loadingWhiteBox=document.querySelector('#loadingWhiteBox')
const loadingTransparentBox=document.querySelector('#loadingTransparentBox')
//
const heroImg1=document.querySelector('#heroImg1')

const keyframes = [
  { opacity: 1, transform: "translateX(0px)" },
  { opacity: 1, transform: "translateX(0px)" },
  { opacity: 1, transform: "translateX(100%)"},
];
const option = {
  duration: 1000,
=======
const keyframes = [
  { opacity: 1, transform: "translateX(-100px)" },
  { opacity: 1, transform: "translateX(0px)" },
  { opacity: 1, transform: "translateX(100px)" },
];
const option = {
  duration: 500,
>>>>>>> c875972aa93d11b277f99a3c8e53b6d911b41c27
  easing: "linear",
  fill: "forwards",
};

window.addEventListener("load", () => {
<<<<<<< HEAD
  loadingWhiteBox.style.transition = "left 1s linear";
  loadingWhiteBox.style.left = "100%";
  setTimeout(()=>{
  loadingTransparentBox.style.transition="left 1s linear"
  loadingTransparentBox.style.left="100%"
  },1000)
  //   setTimeout(()=>{
  //   heroImg1.style.transition="transform 1s linear"
  //   heroImg1.style.transform="scaleX(1)"
  // },1500)
  setTimeout(()=>{
    loading.style.display="none"
  },2000)
=======
  loading.animate(keyframes, option);
>>>>>>> c875972aa93d11b277f99a3c8e53b6d911b41c27
});
