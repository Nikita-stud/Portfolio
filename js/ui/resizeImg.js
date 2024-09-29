export function resizeImg(){
  const mainImgContainer = document.getElementById("main-img_container");
  const secondaryImgContainer = document.getElementById("inner-frame_img");



  if(window.innerWidth < 1200){
    let adjustPosition = window.innerWidth / 140;
    let adjustWidth =window.innerWidth / 2.8;
    let adjustHeight =window.innerWidth / 4;

    secondaryImgContainer.style.width = `${adjustWidth}px`;
    secondaryImgContainer.style.height = `${adjustHeight}px`;
    secondaryImgContainer.style.top = `${adjustPosition}%`;
    secondaryImgContainer.style.left = "16%";
      

    console.log("Window: ", window.innerWidth)
    console.log("Adjusted: ", adjustPosition)
    console.log("Width: ", adjustWidth)
    console.log("Height: ", adjustHeight)
  }
  if(window.innerWidth >= 1200){
      let adjustPosition = window.innerWidth / 170;
      let adjustWidth =window.innerWidth / 2.8;
      let adjustHeight =window.innerWidth / 4;
  
      secondaryImgContainer.style.width = `${adjustWidth}px`;
      secondaryImgContainer.style.height = `${adjustHeight}px`;
      secondaryImgContainer.style.top = `${adjustPosition}%`;
      secondaryImgContainer.style.left = "18%";
  }

};

window.addEventListener("resize", resizeImg);