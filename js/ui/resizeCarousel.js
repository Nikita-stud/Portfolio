const leftImg = document.getElementById("first-img");
const middleImg = document.getElementById("second-img");
const rightImg = document.getElementById("third-img");



export function resizeCarousel(){
  if(window.innerWidth < 1200){
    let adjustPosition = window.innerWidth / 140;
    let adjustWidth =window.innerWidth / 2.8;
    let adjustHeight =window.innerWidth / 4; 

    leftImg.style.width = `${adjustWidth}px`;
    leftImg.style.height = `${adjustHeight}px`;
    leftImg.style.top = `${adjustPosition}%`;
    leftImg.style.left = "16%";
  }
  if(window.innerWidth >= 1200){
    let adjustPosition = window.innerWidth / 170;
    let adjustWidth =window.innerWidth / 2.8;
    let adjustHeight =window.innerWidth / 4;


    leftImg.style.width = `${adjustWidth}px`;
    leftImg.style.height = `${adjustHeight}px`;
    leftImg.style.top = `${adjustPosition}%`;    
    leftImg.style.left = "16%";
  }


}
window.addEventListener("resize", resizeCarousel);
