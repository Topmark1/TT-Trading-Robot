"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { RobotsContext } from "../../../utils/Robots.js"

function Info({params:{key}}) {
  let [Robot,setRobot] = useState({})
  let robots = useContext(RobotsContext)
  let [Deriv,setDeriv] = useState({})
  let [payment,makePayment] = useState(true)

  useEffect(()=>{
  robots.map((bot)=>bot.title == key &&
  setRobot(bot))
  },[])

  let robotData = [
    {key:"Creator Name",value:Robot.tutorName},
    {key:"Minimum Deriv Trading Balance Required",value:("$"+Robot.minDerivBal)},
    {key:"Risk Percentage",value:(Robot.riskPercent+"%")},
    {key:"Time Frame",value:(Robot.timeFrame)},
    {key:"Trade Markets",value:(Robot.tradeMarkets)},
    {key:"Average Monthly Trades",value:(Robot.aMT+" Trades")},
    {key:"Expected Win Rate",value:(Robot.winRate)},
    {key:"Trade Variation Code",value:(Robot.variation)},

    {key:"Robot Price Tag",value:("$"+Robot.priceTag)},
  ]
//overflow-x-scroll scrollbar-thin scrollbar-thumb-black
    return (
        <div className="flex flex-col px-4 sm:px-8 2xl:px-12  md:items-center text-center bg-gray-100">
          <h1 className="text-2xl md:text-5xl font-bold text-gray-800 mt-2 mb-1 sm:mt-5 sm:mb-2 bg-gray-200 p-2 rounded">Payment Page</h1>
        <h1 className="text-xl md:text-3xl font-bold text-gray-800 mt-2 mb-1 sm:mt-5 sm:mb-2 ">{key} Payment setup build in Progress</h1>
        <h1 className="text-2xl md:text-6xl font-bold text-red-800 mt-2 mb-1 sm:mt-5 sm:mb-2 ">${Robot.priceTag} only</h1>
        {/*  Button */}
        <div className="flex space-x-3 mb-2 sm:mb-5">
        <Link href={`/robot-dashboard/${key}`}>
          <button className="mt-5 px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:brightness-75 hover:shadow-2xl bg-[rgb(88,48,25)] text-white">Activate Robot & Proceed to Dashboard</button>
          </ Link>
          <Link href="/">
          <button className="mt-5 px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:brightness-75 hover:shadow-2xl bg-[rgb(88,48,25)] text-white">Return Home</button>
          </ Link>
          </div>
      </div>
    )
  }
  
  export default Info