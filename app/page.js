"use client"
import Home from "../components/Home"
import ScrollUpButton from "../components/ScrollUpButton"
import About from "../components/About"
import Community  from "../components/Community"
import Questions from "../components/Questions"
import Testimonial from "../components/Testimonial"
import Robots from "../components/Robots"



function HomePage() {
    
  return (
    <div className="">
        {/* Home */}
        <Home />
        {/*ScrollUpButton*/}
        <ScrollUpButton />
        {/*About*/}
        <About/>
        {/*Robots*/}
         <Robots/> 
        {/*Testimonial*/}
        <Testimonial/>
        {/*Community */}
        <Community />
        {/*Questions */}
        <Questions />       
             
    </div>
  )
}

export default HomePage