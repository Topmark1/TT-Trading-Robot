"use client"
import Link from "next/link"
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";
import { RobotsContext } from "../../../utils/Robots.js"

function Info({params:{key}}) {
  let [Robot,setRobot] = useState({})
  let robots = useContext(RobotsContext)
  let [Deriv,setDeriv] = useState({})

  useEffect(()=>{
  robots.map((bot)=> bot.title == (key== "custom-build"?bot.title:key ) && 
  setRobot(bot))
  },[])

  let robotData = [
    {key:"Creator Name",value:Robot.tutorName},
    {key:"Minimum Deriv Trading Balance Required",value:("$"+Robot.minDerivBal)},
    {key:"Risk Percentage",value:(Robot.riskPercent+"%")},
    {key:"Time Frame",value:(Robot.timeFrame)},
    {key:"Trade Markets",value:(Robot?.tradeMarkets?.join(", "))},
    {key:"Average Monthly Trades",value:(Robot.aMT+" Trades")},
    {key:"Expected Win Rate",value:(Robot.winRate)},
    {key:"Trade Variation Code",value:(Robot.variation)},

    {key:"Robot Price Tag",value:("$"+Robot.priceTag)},
  ]
//overflow-x-scroll scrollbar-thin scrollbar-thumb-black
    return (
        <div className="flex flex-col px-4 sm:px-8 2xl:px-12  md:items-center text-center bg-gray-100">
        <h1 className="text-2xl md:text-6xl font-bold text-gray-800 mt-2 mb-1 sm:mt-5 sm:mb-2 ">{Robot.title}</h1>
        {key== "custom-build"?
        (
          <div className="text-4xl"> Custom Build Setup in Prgress</div>
        ):
        (/* Table */
        <div>
        <div className="flex pb-[3px]">
          <table className="table-auto w-full border-collapse border-2 border-gray-800 ">
            <thead>
              <tr className="bg-gray-200 ">
                <th className="px-4 py-2 text-left">Code</th>
                <th className="px-4 py-2 text-left">Info</th>
              </tr>    
            </thead>
            <tbody>
              { robotData.map((data)=>
              <tr className="hover:bg-gray-100 border-2 border-gray-300 ">
                <td className="border px-4 py-1 ">{data.key}</td>
                <td className="border px-4 py-1">{data.value}</td>
              </tr> 
                )}  
            </tbody>
          </table>
        </div>
        <div className="p-2.5 bg-white shadow-lg space-y-2 transition hover:scale-105 cursor-pointer duration-300 ease-in-out rounded">
         {/*  Deriv Loogin Details */}
         <div>
         <form
          className=""
          onSubmit={(e) => {
            alert("Trade Details Confirmed");
            e.preventDefault();
            }}>
              <select
            className="w-1/4 sm:w-1/4 lg:w-1/5 px-1   pt-[9px] pb-[9px]  2xl:py-4 rounded-l-md hover:brightness-75 hover:shadow-2xl bg-[rgb(88,48,25)] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold  cursor-pointer "
            defaultValue={'D'}
            onChange={(e) => {
              let magic = Deriv.server //e.target.value
                  magic[0]= e.target.value;
                  setDeriv((deriv) => ({ ...deriv, server: magic }))
            }}
          >
            <option value={'D'} disabled> Select a Server</option>
                  <option value="D1" ><span className="">Deriv-1</span></option>
                  <option value="D2" ><span className="">Deriv-2</span></option>
                  <option value="demo" ><span className="">Deriv-Demo</span></option>
          </select>

          <input placeholder='Trade Account'  onChange={(e) => {
              let magic = Deriv.accNum //e.target.value
                  magic[1]= e.target.value;
                  setDeriv((deriv) => ({ ...deriv, accNum: magic }))
            }} className='w-2/4 lg:3/5 px-1 sm:px-2 lg:px-3 py-2  2xl:py-4 bg-[#2A2A2B] text-[10px] sm:text-[12px] 2xl:text-[16px] text-white'/>

          <input placeholder='Password'  type="password" onChange={(e) => {
              let magic = Deriv.password //e.target.value
                  magic[2]= e.target.value;
                  setDeriv((deriv) => ({ ...deriv, password: magic }))
            }} className='w-2/4 lg:3/5 px-1 sm:px-2 lg:px-3 py-2  2xl:py-4 bg-[#2A2A2B] text-[10px] sm:text-[12px] 2xl:text-[16px] text-white'/>
          <button className=" w-1/4 sm:w-1/4 lg:w-1/5 px-1 sm:px-2 lg:px-3 py-2  2xl:py-4 hover:brightness-75 hover:shadow-2xl bg-[rgb(88,48,25)] text-white text-[10px] sm:text-[12px] 2xl:text-[16px] font-bold rounded-r-md ">Save</button>
          </form>
         </div>
          {/* Payment */}
          <div>
         <form className="items-center" //onSubmit={submitHandler}
          >
        <h1 className="mt-1 mb-1 text-xl font-bold">Select Payment Method</h1>
        <div className="flex">
        {['PayPal', 'Stripe'].map((payment) => (
          <div key={payment} className="mb-1 ">
            <input
              name="paymentMethod"
              className="p-1 outline-none focus:ring-0 cursor-pointer"
              id={payment}
              type="radio"
              //checked={selectedPaymentMethod === payment}
              //onChange={() => setSelectedPaymentMethod(payment)}
            />
            <label className="p-2" htmlFor={payment}>
              {payment}
            </label>
          </div>
        ))}
        </div>
      </form>
        </div>
        </div>
        </div>)
        }       

        {/*  Button */}
        <div className="flex space-x-3 mb-2 sm:mb-5">
        <Link href={`/payment/${key}`}>
          <button className="mt-5 px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:brightness-75 hover:shadow-2xl bg-[rgb(88,48,25)] text-white">Make Payment and Activate Robot</button>
          </ Link>
          <Link href="/">
          <button className="mt-5 px-4 sm:px-5 lg:px-8 py-2 sm:py-2.5 2xl:py-4 rounded hover:brightness-75 hover:shadow-2xl bg-[rgb(88,48,25)] text-white">Return Home</button>
          </ Link>
          </div>
      </div>
    )
  }
  
  export default Info