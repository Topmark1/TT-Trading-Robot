'use client'

import Link from "next/link"

function About() {
  return (
    <div>
      <div className="bg-[rgb(229,225,252)] flex items-center justify-center" id="about">
                    <img
                    src="/images/about/Frame 216.png"  
                    className=" w-full" 
                    alt='partners'
                    />
      </div>
    <div className="bg-[#F8F9FC] pt-10 p-4 px-4  md:px-6 lg:px-14 2xl:px-40">
      <div className="sm:flex  sm:items-center ">
        {/* High Quality */}
        <div className="flex flex-col items-center sm:items-start font-Sa sm:w-3/5 lg:w-1/2 ">
        <div className="flex items-start justify-start sm:text-start lg:-ml-10">
          <img src="/images/about/flower.PNG" alt="" className="-mt-4 w-8 "/>
          <h2 className="font-CD font-bold text-[24px] sm:text-[40px] 2xl:text-[54px] leading-[36px] sm:leading-[50px] 2xl:leading-720px] text-center sm:text-start text-[rgb(88,48,25)]">High quality signals, automation & execution</h2>
        </div>     
        <p className=" font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] text-[#A1A1A1] px-10 sm:px-0 text-center sm:text-start py-1">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
        <Link href="/newpage">
        <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hoverhtness-75 hover:shadow-2xl bg-[rgb(145,107,42)] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold my-2">View Robots</button>
        </ Link>
        <div  className="text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold text-[rgb(88,48,25)] mt-5">
          <div className="flex mb-3">
            <div className="flex items-center bg-white pl-4 pr-8 py-2 sm:pl-6 sm:pr-12 sm:py-3 2xl:pl-8 2xl:pr-16 2xl:py-4 mr-3 rounded cursor-pointer hover:bg-gray-200">
              <div className="mr-3 bg-[#3fa9692f] rounded"><img src="/images/about/a/volume_up.svg" alt="volume" className="p-2"/></div>
              <p className=" ">Automated Robot</p>
            </div>
            <div className="flex items-center bg-white pl-4 pr-8 py-2 sm:pl-6 sm:pr-12 sm:py-3 2xl:pl-8 2xl:pr-16 2xl:py-4 mr-3 rounded cursor-pointer hover:bg-gray-200">
              <div className="mr-3 bg-[#f79e8e47] rounded"><img src="/images/about/a/settings_input_antenna.svg" alt="volume" className="p-2"/></div>
              <p className=" ">Signal Robot</p>
            </div>
          </div>
          <div className="flex mb-3">
            <div className="flex items-center bg-white pl-4 pr-8 py-2 sm:pl-6 sm:pr-12 sm:py-3 2xl:pl-8 2xl:pr-16 2xl:py-4 mr-3 rounded cursor-pointer hover:bg-gray-200">
              <div className="mr-3 bg-[#9369cd37] rounded"><img src="/images/about/a/autoplay.svg" alt="volume" className="p-2"/></div>
              <p className=" ">Trading Robot</p>
            </div>
            <div className="flex items-center bg-white pl-4 pr-8 py-2 sm:pl-6 sm:pr-12 sm:py-3 2xl:pl-8 2xl:pr-16 2xl:py-4 mr-3 rounded cursor-pointer hover:bg-gray-200">
              <div className="mr-3 bg-[#5979cf31] rounded"><img src="/images/about/a/description.svg" alt="volume" className="p-2"/></div>
              <p className=" ">Custom Robot</p>
            </div>
          </div>
        </div>
        </div>
        {/* Concentartion man Pix */}
        <div className="mt-4  sm:w-2/5 lg:w-1/2  shadow-lg rounded-lg sm:rounded-l-lg border-2 border-white overflow-hidden">
          <img src="/images/about/bot2.jpg" alt="bot1" className="w-full transition hover:scale-105 cursor-pointer duration-300 ease-in-out"/>
        </div>
      </div>
      {/* This is Why we are Best ... */}
      <div className="sm:flex sm:items-center font-Sa mt-10">
        {/* This is .. */}
        <div className="sm:w-1/2 flex flex-col">
          <h2 className="font-CD font-bold text-[24px] sm:text-[40px] 2xl:text-[54px] leading-[36px] sm:leading-[50px] 2xl:leading-720px] text-center sm:text-start text-[rgb(88,48,25)]">This is Why We Are Best From Others</h2>
          <p className="font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] text-[#A1A1A1] px-10 sm:px-0 text-center sm:text-start py-1">high-defination video is video of higher resolution and quality than standard definition. while there’s no standard meaning for high definition, generally any standard video image</p>
          <div className="shadow-lg rounded-lg sm:rounded-l-lg border-2 border-white overflow-hidden">
          <img src="/images/about/bot1.jpg" className="mt-3 w-full transition hover:scale-105 cursor-pointer duration-300 ease-in-out" alt="bot2"/>
          </div>
        </div>
        {/*  four Box */}
        <div className="mt-4 sm:mx-3 2xl:mx-6 sm:w-1/2">
          {/* first line */}
          <div className="flex  mb-1.5 sm:mb-3 2xl:mb-5">
            <div className="p-2 sm:p-4 2xl:p-6 bg-white flex flex-col items-start  w-1/2 mr-1.5 sm:mr-3 2xl:mr-5">
              <div className=" rounded bg-[#4C7FBD] ">
                <img src="/images/about/b/cast_for_education.svg" className="p-2 sm:p-3 2xl:p-4" alt="mentor" />
              </div>
              <h3 className="font-bold text-[14px] sm:text-[16px] 2xl:text-[20px] my-2">Experieneced Traders</h3>
              <p className="text-[#A1A1A1]  font-medium text-[10px] sm:text-[12px] 2xl:text-[16px] leading-4 sm:leading-6 2xl:leading-8">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
            <div className="p-2 sm:p-4 2xl:p-6 bg-white flex flex-col items-start  w-1/2">
              <div className=" rounded bg-[#ED6BA6] ">
                <img src="/images/about/b/groups.svg" className="p-2 sm:p-3 2xl:p-4" alt="mentor" />
              </div>
              <h3 className="font-bold text-[14px] sm:text-[16px] 2xl:text-[20px] my-2">Affordable Prices</h3>
              <p className="text-[#A1A1A1]  font-medium text-[10px] sm:text-[12px] 2xl:text-[16px] leading-4 sm:leading-6 2xl:leading-8">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
          </div>
          {/* seconf line */}
          <div className="flex  mb-1.5 sm:mb-3 2xl:mb-5">
            <div className="p-2 sm:p-4 2xl:p-6 bg-white flex flex-col items-start  w-1/2 mr-1.5 sm:mr-3 2xl:mr-5">
              <div className=" rounded bg-[#EA6B45] ">
                <img src="/images/about/b/local_atm.svg" className="p-2 sm:p-3 2xl:p-4" alt="mentor" />
              </div>
              <h3 className="font-bold text-[14px] sm:text-[16px] 2xl:text-[20px] my-2">Affordable Prices</h3>
              <p className="text-[#A1A1A1]  font-medium text-[10px] sm:text-[12px] 2xl:text-[16px] leading-4 sm:leading-6 2xl:leading-8">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
            <div className="p-2 sm:p-4 2xl:p-6 bg-white flex flex-col items-start  w-1/2">
              <div className=" rounded bg-[#AECD5E] ">
                <img src="/images/about/b/schedule.svg" className="p-2 sm:p-3 2xl:p-4" alt="mentor" />
              </div>
              <h3 className="font-bold text-[14px] sm:text-[16px] 2xl:text-[20px] my-2">Flexible Setup</h3>
              <p className="text-[#A1A1A1]  font-medium text-[10px] sm:text-[12px] 2xl:text-[16px] leading-4 sm:leading-6 2xl:leading-8">high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}

export default About