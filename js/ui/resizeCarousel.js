const leftImg = document.getElementById("second-img");
const middleImg = document.getElementById("first-img");
const rightImg = document.getElementById("third-img");

const header = document.getElementById("carousel_header");



export function resizeCarousel(){
  if(window.innerWidth < 1200){
    let adjustWidth =window.innerWidth / 4;
    let adjustHeight =window.innerWidth / 5.2;
    let adjustPosition = window.innerWidth / 30.9;
    let adjustedLeft =window.innerWidth / 97;
    const newest = adjustedLeft+10;

    middleImg.style.width = `${adjustWidth}px`;
    middleImg.style.height = `${adjustHeight}px`;
    middleImg.style.top = `${adjustPosition}%`;
    middleImg.style.left = `${newest}%`;
  }
  if(window.innerWidth >= 1200){
    let adjustWidth =window.innerWidth / 4.02;
    let adjustHeight =window.innerWidth / 5.6;
    let adjustPosition = window.innerWidth / 30.6;
    let adjustedLeft =window.innerWidth / 130;
    const newest = adjustedLeft+ 12;

    let adjustHeaderTop = window.innerWidth / 36;
    let adjustHeaderLeft = window.innerWidth / 63;

    header.style.display ="true";
    header.style.top = `${adjustHeaderTop}%`;
    header.style.left = `${adjustHeaderLeft}%`;

    middleImg.style.width = `${adjustWidth}px`;
    middleImg.style.height = `${adjustHeight}px`;
    middleImg.style.top = `${adjustPosition}%`;
    middleImg.style.left = `${newest}%`;
  }


}
window.addEventListener("resize", resizeCarousel);
