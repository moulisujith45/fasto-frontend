import React from "react"
import {useState,useEffect} from "react"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import axios from "../../config/axios"
export default function CustomerProfile(){
    const [user,setUser] = useState(null)

    useEffect(() => {
        const userProfile = async () => {
            
        }

    })
    return(
        <div>
            <h1>Profile Component</h1>
        </div>
    )
}