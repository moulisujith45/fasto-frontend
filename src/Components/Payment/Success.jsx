import React,{useEffect} from 'react'
import { ToastContainer } from 'react-bootstrap'
import axios from '../../config/axios'
import {Link} from "react-router-dom"
import { toast } from 'react-toastify'


function Success() {
  useEffect(()=>{
    (async()=>{
      try{
        const stripeId = localStorage.getItem("stripeId")
        console.log(stripeId)
        const response = await axios.put("/api/user/update-payment",{stripeId},{
            headers: {
                Authorization: localStorage.getItem('token')
            }
        })
        if(response) localStorage.removeItem("stripeId")
        


      }catch(err){
        console.log(err)
        toast.error(JSON.stringify(err))
      }
    })()
  })
  return (
    <div>
      <img src={`https://www.freepik.com/free-vector/man-transferring-money-woman-via-smartphone-online-transaction-banking-flat-vector-illustration-finance-digital-technology-concept_10613198.htm#query=payment%20successful&position=0&from_view=keyword&track=ais&uuid=bc27d54a-1c86-414f-9289-ffc326f74a10`}/>
      <Link to="/">Home</Link>
      {/* <Route path="/" element={<Home/>} /> */}
      <ToastContainer/>
    </div>
  )
}
export default Success