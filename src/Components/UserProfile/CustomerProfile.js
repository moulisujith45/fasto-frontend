import React from "react"
import {useState,useEffect} from "react"
import { jwtDecode } from "jwt-decode"
import { useNavigate } from "react-router-dom"
import axios from "../../config/axios"
import UserProfile from "./UserProfile"
export default function CustomerProfile(){


    return(
        <div>
            <UserProfile/>
        </div>
    )
}