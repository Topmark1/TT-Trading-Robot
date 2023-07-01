// Smaller bundle size, dealing only with the low-level library

import {useEffect} from "react";

function Deriv() {
    
useEffect(() =>{
    async function ApiFunc(){
    console.log("test DErivvvvv")
    try {
    let url = "http://localhost:3000/api/derivapi"
    const response = await fetch(url);
    const data = await response.json();
    console.log(data)
    } catch (error) {
    console.log(Error)
    }

    console.log("testing")}
    ApiFunc()  
}, [])


  return (
    <div></div>
  )
}

export default Deriv