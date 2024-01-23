import {useState,useEffect} from 'react'
import { isEmail } from 'validator'
import axios from '../config/axios'
import { useNavigate } from 'react-router-dom'
import { jwtDecode } from 'jwt-decode'


export default function Register({registerToast}){
  const navigate = useNavigate()

  const[username,setUsername] = useState("")
  const[email,setEmail] = useState("")
  const[password,setPassword] = useState("")
  const[formErrors,setFormErrors] = useState({})
  const[mobile,setMobile] = useState('')
  const[role,setRole] = useState("")


  const errors = {}

  function runValidations(){
    if(username.trim().length === 0){
      errors.username="username is required"
    }else if(username.trim().length<4|| username.trim().length>64){
      errors.username="username should be between 4-64 characters"
    }
    if(email.trim().length ===0){
      errors.email = "email is required"
    }else if(!isEmail(email)){
      errors.email = "invalid email format"
    }else if(password.trim().length<8 || password.trim().length>128){
      errors.password = "password should be between 8-128 characters"
    }
    setFormErrors(errors)
  }
  const handleSubmit = async(e) => {
    e.preventDefault()
    runValidations()

    if(Object.keys(errors).length ===0){
      setFormErrors({})

      const deliveryManformData = {
        username,
        email,
        password,
        role:"DeliveryMan",
        mobile
        
      }

     

      try{
        if(role){
          const response = await axios.post("/api/admin/deliverman/register",deliveryManformData,{
            headers:{
              Authorization:localStorage.getItem('token')
    
            }
          })
          console.log(response.data)
          console.log(deliveryManformData)

        }else{
          const formData = {username,email,password,role:'customer'}
          console.log(formData)
          const response = await axios.post("/api/user/register",formData)
          console.log(response.data)
          console.log(formData)
          navigate('/login')
          registerToast()
                    
        }

      }catch(e){
        console.log(e)
      }
    }
  }

  useEffect(()=>{
    const token =localStorage.getItem("token")
    if(token){
      const {role} = jwtDecode(token)
      if(role==="Admin") setRole(role)

    }
  },[localStorage.getItem("token")])

  return(
    <div className="container">
      <div className='row justify-content-center'>
        <div className='col-6'>
          <h2>register here...</h2>
          <form onSubmit={handleSubmit}>
            <div className='form-group'>
              <label htmlFor='username' className='form-check-label'>username</label>
              <input type='text' value={username} id="username" onChange={(e) => {
                setUsername(e.target.value)
              }}
              className='form-control'
              />
            </div>
            {formErrors.username && <span>{formErrors.username} </span>} <br/>
            <div className='form-group'>
              <label htmlFor="email" className='form-check-label'>email</label>
              <input type='text' value={email} id="email" onChange={(e) => {
                setEmail(e.target.value)
              }}
              className="form-control" />
            </div>
            {formErrors.email && <span>{formErrors.email}</span>} <br/>
            <div className='form-group'>
              <label htmlFor='password' className='form-check-label'>password</label>
              <input type='password' value={password} id='password' 
              onChange={(e) => {
                setPassword(e.target.value)
              }}
              className='form-control' />
            </div>
            <br/>
            {role === "Admin" && 
            <div className='form-group'>
              <label htmlFor='number' className='form-check-label'>Phone Number</label> 
              <input type="number" value={mobile} id='number'
               onChange={(e)=>setMobile(e.target.value)}
               className='form-control'/>
            </div>
            }
            {formErrors.password && <span>{formErrors.password}</span>} <br/>
            <input type="submit" value="register" />
          </form>
        </div>
      </div>
    </div>
  )
}