import React from 'react';
import img from "./images/home.jpg"
// import { NavLink } from 'react-router-dom';
import Common from './Common'

const  Home = ()=> {
  return (
    <>
   <Common
   name="Grow your business with"
   imgsrc={img}
   visit="/service"
   btname="Get Started"
   />
    </>
    
  );
}

export default Home;
