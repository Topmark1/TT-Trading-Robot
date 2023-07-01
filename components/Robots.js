"use client"
import { useContext, useEffect, useLayoutEffect } from "react"
import Robot from "./Robot.js"
import { RobotsContext } from "../utils/Robots.js"
//import  Deriv from "../utils/Deriv.js"
import Link from "next/link"

function Robots() {

  let robots = useContext(RobotsContext)

  return (
    <div className="bg-[#F8F9FC]  pt-6 md:pt-12  px-4  md:px-6 lg:px-14 2xl:px-40 flex flex-col items-center text-center font-Sa" id="robots">
      {/* Deriv Test */}
      {/* <Deriv /> */}
        {/* Browe your Popular Robots... */}
        <h2 className="font-CD font-bold text-[24px] sm:text-[40px] 2xl:text-[54px] leading-[36px] sm:leading-[50px] 2xl:leading-720px]  text-[rgb(88,48,25)]">Browse our popular Robots</h2>
        <p className="font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] text-[#A1A1A1] px-10 sm:px-20 lg:px-40 2xl:px-80 pt-1 pb-4">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
        {/* courses category select */}
        <div className='font-Sa flex space-x-1.5 sm:space-x-3 2xl:space-x-4 flex-wrap justify-center'>
            <button className='rounded py-1 sm:py-2 px-2 sm:px-4 text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold cursor-pointer text-[#A1A1A1] hover:text-blue-500 focus:text-[#004DB3]  focus:bg-white focus:outline-none'>All Categories</button>
            <button className='rounded py-1 sm:py-2 px-2 sm:px-4 text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold cursor-pointer text-[#A1A1A1] hover:text-blue-500 focus:text-[#004DB3]  focus:bg-white focus:outline-none'>Signal</button>
            <button className='rounded py-1 sm:py-2 px-2 sm:px-4 text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold cursor-pointer text-[#A1A1A1] hover:text-blue-500 focus:text-[#004DB3]  focus:bg-white focus:outline-none'>Trading</button>
            <button className='rounded py-1 sm:py-2 px-2 sm:px-4 text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold cursor-pointer text-[#A1A1A1] hover:text-blue-500 focus:text-[#004DB3]  focus:bg-white focus:outline-none'>Custom</button>
        </div>
        {/* Courses, Prices, Rating and other Properties */}
        <div className='flex flex-wrap w-full mt-5 md:mt-8 mb-5 md:mb-10 2xl:mb-14'>
            {/* mapping would be done here from the data base using single Course Component */}
            {robots?.map((botObj)=>
           <Robot 
           key={botObj.key}
           mainImg={botObj.mainImg}
           tag={botObj.tag}
           title={botObj.title}
           timeFrame={botObj.timeFrame}
           riskPercent={botObj.riskPercent}
           tutorImg={botObj.tutorImg}
           tutorName={botObj.tutorName}
           priceTag={botObj.priceTag}
            /> )}
           </div>
        <Link href="/newpage">
        <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:brightness-75 hover:shadow-2xl bg-[rgb(145,107,42)] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold mt-2">View Robots</button>
        </Link>
    </div>
  )
}

export default Robots