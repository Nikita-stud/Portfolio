import { resizeImg } from "./ui/resizeImg.js";
import { transformMainImg } from "./ui/transformMainImg.js";
import { resizeCarousel } from "./ui/resizeCarousel.js";

function index(){
  try{
    resizeImg();
    transformMainImg();
    resizeCarousel()

  }catch(error){
    // catchAndDisplay();
  }
};
index()