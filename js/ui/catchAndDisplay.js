export const catchAndDisplay = ()=>{
  const main = document.querySelector("main");
  main.classList.add("displayError");
  main.innerHTML = "";
  main.innerHTML = `<div>There has been an unexpected error when loading the page, it is something the developer is dealing with</div`;
};