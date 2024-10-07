const frame = document.getElementById("frame_img");
const img = document.getElementById("inner-frame_img");
const header = document.getElementById("main-header_container");

export function transformMainImg(){
  img.addEventListener("click", ()=>{

    function toggleFrame(){
      frame.classList.toggle("frame_img-active")
    }
    setTimeout(toggleFrame, 500);

    img.classList.toggle("inner-frame_img-active");
    header.classList.toggle("main-header_container-active");
  })
}