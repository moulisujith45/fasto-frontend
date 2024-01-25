// import {useState,useEffect} from 'react'
// import axios from '../config/axios'
import Context from './Context'
// import { useNavigate } from 'react-router-dom'
// import {jwtDecode} from 'jwt-decode'

function ContextStore({children}){
    // const navigate = useNavigate()
   

    return(
        <div>
            <Context.Provider value={{}}>
                {children}
            </Context.Provider>
        </div>
    )
}

export default ContextStore