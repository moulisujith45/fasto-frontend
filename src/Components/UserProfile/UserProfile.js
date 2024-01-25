import React from "react"
import {useState,useEffect} from "react"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import axios from "../../config/axios"
export default function CustomerProfile(){
    const navigate = useNavigate()
    const token = localStorage.getItem('token')
    const initialRole = token ? jwtDecode(token).role:''
    const [role,setRole] = useState(false)
    const [isLoggedIn,SetIsLoggedIn] = useState(false)

    useEffect(() => {
       if(token){
        try{
            const{role} = jwtDecode(token)
            if(role === 'Admin' || role === 'customer' || role ==="Delivery"){
                setRole(role)
                SetIsLoggedIn(true)
            }
        }catch(e){
            console.log('Invalid or expired token')
        }
       }

    },[token])
    return(
        <div>
            <h1>Profile Component</h1>
        </div>
    )
}