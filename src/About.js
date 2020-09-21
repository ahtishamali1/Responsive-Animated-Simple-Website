import React from 'react';
import img from "./images/about.jpg"
import Common from './Common'

const  About = ()=> {
  return (
    <>
    <Common 
    name="Welcome to About Page"
    imgsrc={img}
    visit="/contact"
    btname="Contact Now"
    />
   </>
    
  );
}

export default About;
