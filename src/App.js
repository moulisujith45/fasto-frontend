import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import { useState } from "react"
import Home from "./Components/Home"
import Dasbord from "./Components/Dasbord"
import Register from "./Components/Register"
import Login from "./Components/Login"
import AdminHome from './Components/AdminComponent/Admin-Home';

function App(){
  const[isLoggedIn,SetIsLoggedIn] = useState(false)
  // const[isAdmin,setIsAdmin] = useState(false)
  // const[IsCustomer,setIsCustomer] = useState(flase)

  // const registerToast = ()=>{
  //   toast('registerd successfully')
  // }
  // const handleLogin = () => {
  //   SetIsLoggedIn(!isLoggedIn)
  //   if(useData){
  //     setIsAdmin(userData.role === 'Admin')
  //     setIsCustomer(userData.role === 'customer')
  //   }else{
  //     console.log('Invalid userData:',userData)
  //   }
  // }
  // const loginToast =() =>{
  //   toast('logged in succesfully')
  // }

  return(
    <BrowserRouter>
    <div>
      <Link to ="/">Home</Link>
      {!isLoggedIn ? (
        <>
        <Link to = "/register">Register</Link>
        <Link to = "/login">Login</Link>
        </>
      ):(
        <>
        {isLoggedIn ? <button>Logout</button> : 
        <button >Login</button>
        }
        </>
      )}
      {/*routes*/}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dasbord/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path="/admin" element={<AdminHome/>} />

      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App
