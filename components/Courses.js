"use client"
import Course from "./Course.js"
import Link from "next/link"

function courses() {
  return (
    <div className="bg-[#F8F9FC]  pt-6 md:pt-12  px-4  md:px-6 lg:px-14 2xl:px-40 flex flex-col items-center text-center font-Sa" id="courses">
        {/* Browe your Popular courses... */}
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
           <Course 
           key="1"
           mainImg='1'
           tag="Mixed"
           title="AlphaX34523"
           timeFrame="30min"
           riskPercent="3"
           tutorImg='1'
           tutorName="Leonard Victor" 
           priceTag="15.00"
           />
           <Course 
           key="2"
           mainImg='2'
           tag="Metal"
           title="MetalG88719Z"
           timeFrame="4hrs"
           riskPercent="6"
           tutorImg='2'
           tutorName="Jeffrey Williams" 
           priceTag="32.00"
           />
           <Course 
           key="3"
           mainImg='3'
           tag="Commodity"
           title="CommodulJ7879"
           timeFrame="4hrs"
           riskPercent="10"
           tutorImg='2'
           tutorName="Claretta Mason" 
           priceTag="55.00"
           />
           <Course 
           key="4"
           mainImg='4'
           tag="Cryptocurrency"
           title="BlockRobot0x809273"
           timeFrame="4hrs"
           riskPercent="23"
           tutorImg='4'
           tutorName="Jessica Duke" 
           priceTag="45.00"
           />
           <Course 
           key="5"
           mainImg='5'
           tag="Stock"
           title="StockHackathon500"
           timeFrame="1 day"
           riskPercent="3"
           tutorImg='5'
           tutorName="Samuel Jacobs" 
           priceTag="25.00"
           />
           <Course 
           key="6"
           mainImg='6'
           tag="Marketing"
           title="Introduction to live marketing analysis"
           timeFrame="10hrs 50min"
           riskPercent="32"
           tutorImg='6'
           tutorName="Adam Smith" 
           priceTag="25.00"
           />
        </div>
        <Link href="/newpage">
        <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:brightness-75 hover:shadow-2xl bg-[rgb(145,107,42)] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold mt-2">View Courses</button>
        </Link>
    </div>
  )
}

export default courses