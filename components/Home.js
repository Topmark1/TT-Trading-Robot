
import Image from "next/image";
import { useLayoutEffect, useState } from "react";
import { ArrowUpRightIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

function Home() {

  const [number, setNumber] = useState(0);

    setTimeout(() => 
setNumber((num)=>num<255?num+5:num=255), 100);  

     
  

  return (
    <div className="relative flex bg-[rgb(87,64,24)] items-center" id="">
    <div className=''>
        <img  className='absolute transform scale-50 2xl:scale-100 -left-8 lg:-left-4 2xl:left-0 top-[270px] 2xl:top-[440px]' src='/Techbg/Vector.svg' alt='wiggle' >
        </img>
        <img    className='hidden lg:flex absolute transform scale-50 2xl:scale-100 left-[100px] sm:left-[280px] md:left-[480px] top-[93px]' src='/Techbg/Vector-1.svg' alt='dot'>
        </img>
        <img    className='hidden lg:flex absolute transform scale-50 2xl:scale-100 left-[30px] sm:left-[50px] md:left-[90px] top-[90px]' src='/Techbg/Vector-4.svg' alt='small circle'>
        </img>
     </div>
    <div className="flex flex-col sm:flex-row   md:pl-6 lg:pl-14 2xl:pl-40 pt-25 items-center ">
      <div className="text-white flex flex-col  text-center sm:text-start items-center sm:items-start sm:w-1/2 pt-3 sm:pt-0 pl-4 sm:pl-0">
        <h1 className="font-CD font-bold text-[32px] sm:text-[38px] 2xl:text-[64px] leading-[45px] sm:leading-[47px] 2xl:leading-[82px] pb-3 2xl:pb-4">Trade Forex without Emotions! <span className="text-[rgb(1,169,156)]">Control</span> the Market!</h1>
        <p className="font-Sa font-medium text-[10px] leading-[14px] sm:leading-[26px] sm:text-[16px] 2xl:w-[500px] ">Build a Custom Robot to your Risk Appetite and Trading market or secure recommended robots by our professionals</p>

        <div className="flex font-Sa text-[10px] sm:text-[16px] font-bold my-4">
        <a href="#robots">
          <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:bg-[rgb(1,169,156)] hover:shadow-2xl border-2 border-white flex items-center mr-3"><span>Start Trading Now </span><span><ArrowUpRightIcon className="w-4 pl-2 font-bold"/></span></button> </a>
          <a href="#robots">
          <button className="px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:bg-[rgb(1,169,156)] hover:shadow-2xl hover:text-[rgb(197,173,67)] bg-white text-[rgb(87,64,24)]">Check Demo</button>
          </ a>
        </div>
        <div className="flex items-center">
          <div className="flex w-[90px] sm:w-[140px] 2xl:w-[200px] mr-1 sm:mr-2 " >
          {Array(5).fill(null).map((_, index) => (
            <div key={index} className={`${index==0?'':'-ml-2 sm:-ml-3 lg:-ml-5'} transition duration-300 hover:scale-110 ease-in-out`}><img src={`/images/home/Frame 9${index+5}.png`} alt='mini profile pix'></img></div>
          ))
        }
          </div>
          <div>
            <h4 className="text-[17px] sm:text-[24px] font-bold font-CD leading-[14px] sm:leading-[16px] 2xl:leading-[30px] "><span>{number?(number+"k"):''}</span><span className="animate-pulse">+</span></h4>
            <p className="text-Sa font-medium text-[10px] sm:text-[16px]">previews</p>
          </div>
        </div>
        <img    className='sm:hidden -mr-[210px]  -mt-[62px] animate-pulse' src='/images/home/sdirect.svg' alt='arrow' />
       
      </div>
      <Image    
      className='hidden sm:flex transform scale-50 2xl:scale-100 mt-[170px] md:mt[280px] md:w-[170px] 2xl:w-[150px] sm:-mr-[20px] md:-ml-[90px] lg:-ml-[120px] 2xl:mr-[0px] animate-pulse ' 
      src='/images/home/direct.svg' 
      width={50}
      height={100}
      //layout='responsive'
      alt='direct' />
      <div className="sm:w-1/2 mt-3 sm:mt-0 pt-3 sm:pt-0 flex bg-white shadow-lg space-y-2 rounded-t-lg sm:rounded-l-lg border-2 border-white overflow-hidden">
        {/* girl and logos */}
        <Image 
                    src="/images/home/hand.jpg"//"/images/home/flexible.PNG"  
                    className="flex w-full transition hover:scale-105 cursor-pointer duration-300 ease-in-out" 
                    width={360}
                    height={450}
                    alt='girl'
                    />
      </div>
    </div>
  </div>
  )
}

export default Home