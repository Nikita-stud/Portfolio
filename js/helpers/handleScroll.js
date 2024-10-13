const header = document.getElementById("header_container");

export function handleScroll(){
  const scrolledY = window.scrollY;

  if(scrolledY > 55){
    header.classList.add("scrolled");
  }else{
    header.classList.remove("scrolled");
  }
};