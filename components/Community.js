import Link from "next/link"

function Community() {
  return (
    
    <div className="bg-[rgb(145,107,42)]   md:pt-6 py-10 lg:pb-16 px-4  md:px-6 lg:px-20 2xl:px-40 flex flex-col items-center text-center font-Sa text-white"  id='community'>
      {/* Community... */}
      <p className='font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] px-10 sm:px-20 lg:px-64 2xl:px-80 pt-1 '>JOIN OUR COMMUNITY</p>
      <h2 className="font-CD font-bold text-[24px] sm:text-[40px] 2xl:text-[54px] leading-[36px] sm:leading-[50px] 2xl:leading-720px]    sm:px-8 lg:px-36 2xl:px-60">Are you  ready to connect with the Top Forex Robot Traders of the Trading world</h2>
      <p className="font-medium  text-[10px] sm:text-[12px] 2xl:text-[16px] leading-[17px] sm:leading-[23px] 2xl:leading-[30px] px-10 sm:px-20 lg:px-64 2xl:px-80 pt-1 ">meet up with other RobotStars and grow together</p>
          <img src='./images/community/world.svg' alt='world map' className='w-full' />
          <Link href="/newpage">
          <button className="mt-8 md:mt-12 px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:brightness-75 hover:shadow-2xl bg-white text-[rgb(145,107,42)] font-bold">Join Our Community</button> 
           </ Link>   
      
    </div>


    
  )
}

export default Community