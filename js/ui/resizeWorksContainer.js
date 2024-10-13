export function resizeWorksContainer(){
  const worksContainer = document.querySelector(".projects_header");

  let adjustTop = window.innerWidth / 1;

  if(window.innerWidth < 834){
    let newTop = adjustTop -600 ;
    worksContainer.style.paddingTop = `${newTop}px`;
  }
  if(window.innerWidth < 700){
    let newTop = adjustTop -300 ;
    worksContainer.style.paddingTop = `${newTop}px`;
  }
  if(window.innerWidth < 600){
    let newTop = adjustTop -50 ;
    worksContainer.style.paddingTop = `${newTop}px`;
  }
  if(window.innerWidth < 600){
    let newTop = adjustTop -100 ;
    worksContainer.style.paddingTop = `${newTop}px`;
  }
  if(window.innerWidth < 500){
    let newTop = adjustTop +150 ;
    worksContainer.style.paddingTop = `${newTop}px`;
  }
  if(window.innerWidth < 400){
    let newTop = adjustTop +250 ;
    worksContainer.style.paddingTop = `${newTop}px`;
  }
}
window.addEventListener("resize", resizeWorksContainer);