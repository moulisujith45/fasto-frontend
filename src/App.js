import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import {ToastContainer, toast} from 'react-toastify'
import { useState } from "react"
import Home from "./Components/Home"
import Dasbord from "./Components/Dasbord"
import Register from "./Components/Register"
import Login from "./Components/Login"
import AdminHome from './Components/AdminComponent/Admin-Home';
import Category from './Components/Categories';
import AdminNavbar from './Components/Navbar/AdminNavbar';
import MyCart from './Components/MyCart';
import Orders from './Components/orders';
import CustomerProfile from './Components/CustomerProfile';

function App(){
  const[isLoggedIn,SetIsLoggedIn] = useState(false)

  const handleLogin = () => {
    SetIsLoggedIn(!isLoggedIn)
  }

  return(
  
    <BrowserRouter>
      <div className='app'>
       <AdminNavbar/>
      {/*routes*/}
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/dashboard" element={<Dasbord/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>} />
        <Route path='/admin' element={<AdminHome/>}/>
        <Route path='/addcategories' element={<Category/>}/>
        <Route path='/mycart' element={<MyCart/>}/>
        <Route path='/orders' element={<Orders/>}/>
        <Route path='/customerprofile' element={<CustomerProfile/>}/>
      </Routes>

    </div>
    </BrowserRouter>
 
  )
}

export default App

