
import React, { useState } from 'react';
import axios from '../config/axios'

export default function Register() {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    // You need to update the user state when input values change
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post('api/user/register',user)
      console.log(response)
      setUser({username:"",email:"",password:""})
    }catch(e){
      console.log(e)
    }
  };
  return (
    <div>
      <h1>Sign UP!!</h1>
      <h3>Create a new account</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor='username'>Username</label>
        <input type="text" value={user.username} id="username" onChange={handleChange} />
        <label htmlFor='email'>Email</label>
        <input type="text" value={user.email} id="email" onChange={handleChange} />
        <label htmlFor='password'>Password</label>
        <input type="password" value={user.password} id="password" onChange={handleChange} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
