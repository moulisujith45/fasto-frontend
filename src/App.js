import { BrowserRouter,Routes,Route,Link } from "react-router-dom"
import { useState } from "react"
import Home from "./Components/Home"
import Dasbord from "./Components/Dasbord"
import Register from "./Components/Register"
import Login from "./Components/Login"

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
        <button onClick={handleLogin}>Login</button>
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
