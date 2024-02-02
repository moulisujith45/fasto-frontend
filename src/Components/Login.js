import * as yup from 'yup'
import { useFormik } from 'formik'
import { useState, useRef } from 'react';
import { useNavigate, Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../config/axios'
import "../Components/Styling/login.css"
import Snackbar from './Styling/Snackbar';
import { Row, Col, Form, FormGroup, Label, Input } from 'reactstrap';
import { jwtDecode } from "jwt-decode"


const loginValidationSchema = yup.object({
    email : yup.string().email().required("email is required"),
    password : yup.string().required("password is required").min(8).max(128)
})


export default function Login(props){
    const navigate = useNavigate()
    // const { handleLogin, loginToast } = props
    const [serverErrors, setServerErrors] = useState('')
    const snackbarRef = useRef(null);

    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        validateOnChange: false,
        validationSchema: loginValidationSchema,
        
        onSubmit: async (values) => {
            try {
                const formData = {email: values.email, password: values.password}
                console.log(formData)
                const response = await axios.post('/api/user/login', formData)
                console.log(response.data)
                localStorage.setItem('token', response.data.token )
                const {role} = jwtDecode(localStorage.getItem("token"))
                
                setTimeout(() => {
                    if(role === 'Admin') navigate('/admin')
                    if(role === "customer") navigate('/')
                    if(role === "DeliveryMan") navigate('/admin')
                },1000)
                snackbarRef.current.show("Login Successful!", "success");
            } catch(e) {
                setServerErrors(e.response.data.errors)
                snackbarRef.current.show("Login Failed. Check your credentials and try again.", "fail");
                console.log(e)
                
            }
        }
    })

    
    return(
       

        <div>
<Row className='maxi'>
  <Col md={6}>
    <div>
      <h1 style={{ marginLeft: '60px', marginTop: '15px' }}>Login</h1>
      <Form onSubmit={formik.handleSubmit} style={{ marginLeft: '60px', marginTop: '20px' }}>

        <FormGroup>
          <strong for='email' className="form-label">Email:</strong>
          <Input
            style={{width:"500px"}}
            type='text'
            id='email'
            name='email'
            value={formik.values.email}
            onChange={formik.handleChange}
            className={`form-control ${formik.errors.email ? 'is-invalid' : ''}`}
          />
          <div className='invalid-feedback'>{formik.errors.email}</div>
        </FormGroup>


        <FormGroup>
          <strong for='password'>Password:</strong>
          <Input
            style={{width:"500px"}}
            type='password'
            id='password'
            name='password'
            value={formik.values.password}
            onChange={formik.handleChange}
            className={formik.errors.password ? 'is-invalid' : ''}
          />
          <div className='invalid-feedback'>{formik.errors.password}</div>
        </FormGroup>
        <div>

        </div>

        <div>  
          <button type='submit' className='btn btn-dark'>
            Login
          </button>
          <br/>
          <br/>
          <div>
            Not yet Registered ?<Link to='/register'>Register</Link>
          </div>
        </div>
      </Form>
    </div>
  </Col>
  <Col md={6}>
    <div>
      <img
        className='image'
        src='https://img.freepik.com/free-vector/flat-people-order-food-online-grocery-shopping-from-mobile-application-internet-purchases-with-home-delivery-from-supermarket-store-smartphone-screen-with-buy-button-basket-full-products_88138-856.jpg?w=1060&t=st=1706859092~exp=1706859692~hmac=ff9bfee1392ff3a9cc927e827d96a72a6973ce3980da3541370020176a788866'
        alt='Login Image'
        style={{ objectFit:'cover', width: '700px', height: '585px' }}
      />
    </div>
    <div className="image-background">
      <img
        src='https://img.freepik.com/free-vector/abstract-background-design-with-stars-blue_53876-59272.jpg?size=626&ext=jpg&ga=GA1.1.1368920519.1706858389&semt=ais'
        alt='Login Image'
        style={{ objectFit: 'cover', maxWidth: '110%', width: '102%', height: '585px' }}
      />
    </div>
  </Col>
</Row>
  <Snackbar ref={snackbarRef} />
</div>
    )
}
