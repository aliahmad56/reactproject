import React from "react";

import web from "../src/Images/HomeImage.svg";
import Common from "./Common";



const Home=() =>{
    return(
        <>
       <Common 
       name="Grow your business with"
       imgsrc={web}
       visit="/servicee"
       btname="Get Started"
/>
        
        </>
    );
};
export default Home;