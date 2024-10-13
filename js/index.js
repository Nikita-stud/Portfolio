import { resizeImg } from "./ui/resizeImg.js";
import { transformMainImg } from "./ui/transformMainImg.js";
import { resizeCarousel } from "./ui/resizeCarousel.js";
import { resizeWorksContainer } from "./ui/resizeWorksContainer.js";

function index(){
  try{
    resizeImg();
    transformMainImg();
    resizeCarousel()
    resizeWorksContainer()

  }catch(error){
    console.log("Hello there, we do have a problem but you know it already")
  }
};
index()