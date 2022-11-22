import React from "react";
import web from "../src/Images/HomeImage.svg";
import Common from "./Common";

const About=()=>{
    return(
<>
<Common 
name="Welcome to About Us Page"
imgsrc={web}
visit="/about"
btname="Contact Now "
/>

</>
    );
};

export default About;