import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import {ToastContainer, toast} from 'react-toastify'
import { useState } from "react"
import Home from "./Components/Home"
import Dasbord from "./Components/Dasbord"
import Register from "./Components/Register"
import Login from "./Components/Login"
import AdminHome from './Components/AdminComponent/Admin-Home';

function App(){
  const[isLoggedIn,SetIsLoggedIn] = useState(false)

  const handleLogin = () => {
    SetIsLoggedIn(!isLoggedIn)
  }

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
      </Routes>

    </div>
    </BrowserRouter>
  )
}

export default App

// <Route path='/' element={<Home/> }/>
// <Route path='/register' element={<Register registerToast={registerToast}/>} />
// <Route path='/register/customer' element={<Register registerToast={registerToast} /> }/>
// <Route path='/login' element={<Login loginToast = {loginToast}  handleLogin = {handleLogin}/>}/>
