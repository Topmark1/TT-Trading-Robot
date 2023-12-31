import { useRef,useEffect, useState } from "react"

function TestimonialSlider() {
    const [scrollerPosition, setScrollerPosition] = useState(0)

        //scroller position code
        const scrollerRef = useRef(null);
        useEffect(() => {
         const handleScroll = () => {
            //condition to set scroller position
           setScrollerPosition(((scrollerRef.current.scrollLeft)/(scrollerRef.current.scrollWidth))*100)
              
         };
        const scroller = scrollerRef.current;
        scroller.addEventListener('scroll', handleScroll);
        return () => {
        scroller.removeEventListener('scroll', handleScroll);
        };
        }, []);
           let m = scrollerPosition 
            
    const slidersData = [ 
        {data:["Moon Bella","./images/testimonial/1.svg","Forex Trader"]},
        {data:["Samuel Fortune","./images/testimonial/2.svg","Stock Trader"]},
        {data:["Bryce James","./images/testimonial/3.svg","Crypto Trader"]},
        {data:["Bella Moon","./images/testimonial/1.svg","Commodity Trader"]},
                        ]

   return (
    <div className="bg-[#F8F9FC] pb-10">
         <div className='flex font-Sa text-[#A1A1A1] font-medium text-[14x] md:text-[18px] space-x-8 sm:space-x-12 2xl:space-x-16 overflow-x-scroll  scrollbar-hide pb-4' ref={scrollerRef} >
    {slidersData.map(
             (data)=>
         <div className='first:pl-5 first:ml-5 last:pr-5 cursor-pointer transition ease-in-out duration-300 transform hover:scale-105 rounded-md shadow-md bg-white px-4 sm:px-8 2xl:px-12 py-6 2xl:py-12  ' key={data.data[0]}>
            <p className='text-[10px] sm:text-[14px] 2xl:text-[20px] w-[280px]  sm:w-[350px]  2xl:w-[600px]  mb-2 sm:mb-4'>high-defination video is video of higher resolution and quality than standard definition. high-defination video is video of higher resolution and quality than standard definition. hbuild your future with our quality education. the best and largest all-in-one online tutoring platform in the worldd definition. high-defination video is video of higher resolution and quality than standard definition. build your future with our quality education. the best and largest all-in-one online tutoring platform in the world</p>
            <div className='flex items-center'>
                <img src={data.data[1]} alt="testimoials" className='mr-1'/>
                <div>
                    <h2 className='font-bold text-[#000000] leading-4'> {data.data[0]}</h2>
                    <p>{data.data[2]}</p>
                </div>
            </div>
            </div> )}
            {/* <div className="absolute top-0 right-0 bg-gradient-to-l from-[#F8F9FC] h-full w-1/9 sm:w-1/5 lg:w-1/9"></div> */}
       </div>
      <div className=' flex space-x-2 sm:space-x-3 2xl:space-x-4 justify-center mt-3'>
            <button className={`rounded-full py-[4px]  px-[4px] lg:px-1.5 lg:py-1.5 ${m>-1&&m<20? "bg-[rgb(145,107,42)]":"bg-[rgb(218,189,140)]"} lg:bg-[rgb(218,189,140)]`}></button>
            <button className={`rounded-full py-[4px]  px-[4px] lg:px-1.5 lg:py-1.5 ${m>20&&m<40?"bg-[rgb(145,107,42)]" :"bg-[rgb(218,189,140)]"} ${m>-1&&m<20? "lg:bg-[rgb(145,107,42)]":"lg:bg-[rgb(218,189,140)]"}  `}></button>
            <button className={`rounded-full py-[4px]  px-[4px] lg:px-1.5 lg:py-1.5 ${m>40&&m<60?"bg-[rgb(145,107,42)]" :"bg-[rgb(218,189,140)]"} ${m>20&&m<40? "lg:bg-[rgb(145,107,42)]":"lg:bg-[rgb(218,189,140)]"}`}></button>
            <button className={`rounded-full py-[4px]  px-[4px] lg:px-1.5 lg:py-1.5 ${m>60&&m<80?"bg-[rgb(145,107,42)]" :"bg-[rgb(218,189,140)]"} `}></button>
        </div>
        
    </div>



   )
}

export default TestimonialSlider