const frame = document.getElementById("frame_img");
const img = document.getElementById("inner-frame_img");
const header = document.getElementById("main_header");
const leftText = document.getElementById("left-main-img_text");
const rightText = document.getElementById("right-main-img_text");

export function transformMainImg(){
  img.addEventListener("click", ()=>{

    function toggleFrame(){
      frame.classList.toggle("frame_img-active")

      function toggleLeftText(){
        leftText.classList.toggle("main-img_text-active");
      }
      setTimeout(toggleLeftText, 1000);

      function toggleRightText(){
        rightText.classList.toggle("main-img_text-active");
      }
      setTimeout(toggleRightText, 3500);
    }
    setTimeout(toggleFrame, 500);



    img.classList.toggle("inner-frame_img-active");
    header.classList.toggle("main-header-active");
  })
}