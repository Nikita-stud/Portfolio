const frame = document.getElementById("frame_img");
const img = document.getElementById("inner-frame_img");
const header = document.getElementById("main_header");
const hiddenContainer = document.getElementById("hidden-text_container");
const leftText = document.getElementById("left-main-img_text");
const rightText = document.getElementById("right-main-img_text");

export function transformMainImg(){
  img.addEventListener("click", ()=>{

    function toggleFrame(){
      frame.classList.toggle("frame_img-active")
      header.classList.toggle("main-header-active");

      hiddenContainer.classList.toggle("main-img_text-active")

      function toggleLeftText(){
        leftText.classList.toggle("main-img_text-active");
        
        function toggleRightText(){
          rightText.classList.toggle("main-img_text-active");
        }
        setTimeout(toggleRightText, 2500);
      }
      setTimeout(toggleLeftText, 1500);

    }
    setTimeout(toggleFrame, 500);



    img.classList.toggle("inner-frame_img-active");
  })
}