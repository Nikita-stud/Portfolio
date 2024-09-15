import { fetchProjects } from "./api/fetchProjects"

function index(){
  try{
    
    fetchProjects()

  }catch(error){

  }
}
index()