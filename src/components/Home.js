import React from "react";
import MainFeaturedPost from "./MainFeaturedPost";
import ResponsiveAppBar from "./ResponsiveAppBar";
const Home = () =>{
    const mainFeaturedPost = {
        //title: "Jean Carlo Herrera Delgado",
        //description: "A continuación se podrán ver diferentes cosas personales 🤠.",
        image: "logo/Bienvenidos.png",
        imageText: "main image description",
        linkText: "Continue reading…",
      };
    return(
        <>
              <ResponsiveAppBar/>
          <MainFeaturedPost post={mainFeaturedPost}/>
        </>

     
    );
}

export default Home;