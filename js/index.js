// import { fetchProjects } from "./api/fetchProjects"
import { catchAndDisplay } from "./ui/catchAndDisplay";

const index = async () => {
  try{
    // const fetched = await fetch(url);
    // const results = await fetched.json();
    // const projects = results;

    // fetchProjects(projects)

  }catch(error){
    catchAndDisplay();
  }
};
index()