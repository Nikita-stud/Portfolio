export function resizeImg(){
  const secondaryImgContainer = document.getElementById("frame_img");
  let adjustPosition = window.innerWidth / 220;


  if(window.innerWidth < 1200){

    secondaryImgContainer.style.top = `${adjustPosition}%`;
    secondaryImgContainer.style.left = "16%";
  }
  if(window.innerWidth >= 1200){

      secondaryImgContainer.style.top = `${adjustPosition}%`;
      secondaryImgContainer.style.left = "17%";
  }

};

window.addEventListener("resize", resizeImg);