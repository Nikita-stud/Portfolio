import { resizeImg } from "./ui/resizeImg.js";
import { transformMainImg } from "./ui/transformMainImg.js";

function index(){
  try{
    resizeImg();
    transformMainImg();

  }catch(error){
    // catchAndDisplay();
  }
};
index()