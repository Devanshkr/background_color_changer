const leftHalf = document.querySelector(".color1");
const rightHalf = document.querySelector(".color2");
const body = document.querySelector(".gradient");
const currgrad = document.querySelector("h3");

function setGradient(){
  body.style.background = "linear-gradient(to right, "
    + leftHalf.value
    + ", "
    + rightHalf.value
    + ")";

    currgrad.textContent = body.style.background + ";";
}

leftHalf.addEventListener("input", setGradient);
rightHalf.addEventListener("input", setGradient);