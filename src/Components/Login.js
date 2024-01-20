import * as yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../config/axios'
import './login.css'

const loginValidationSchema = yup.object({
    email : yup.string().email().required("email is required"),
    password : yup.string().required("password is required").min(8).max(128)
})


export default function Login(props){
    const navigate = useNavigate()
    const { handleLogin, loginToast } = props

    const formik = useFormik({
        initialValues : {
            email : '',
            password : ''
        },
        validationSchema: loginValidationSchema,
        validateOnChange: false,
        onSubmit: async (values) => {
            try {
                const formData = {email: values.email, password: values.password}
                console.log(formData)
                const response = await axios.post('/api/user/login', formData)
                console.log(response.data)
                localStorage.setItem('token', response.data.token)
                handleLogin()
                loginToast()
                navigate('/')


            } catch(e) {
                console.log(e)
            }
        }
    })

    
    return(
        <div className="wrapper d-flex bg-light align-items-center justify-content-center w-100" >
            <div className='login rounded' >
                <h2 className='mb-3' >Login</h2>
                <form className='form-validation' onSubmit={formik.handleSubmit} >
                    <div className='form-group mb-2' >
                        <label className='form-group mb-2'>Email</label><br />
                        <input 
                        type='text'
                        value={formik.values.email}
                        name = "email"
                        onChange={formik.handleChange}
                        /> <br />

                        <div className='invalid-feedback' >
                            {formik.errors.email}
                        </div>

                        <br />
                    </div>

                    <div className='form-group mb-2' >
                        <label htmlFor='password' className='form-label' >Password</label><br />
                        <input 
                        type='password'
                        
                        value={formik.values.password}
                        name='password'
                        onChange={formik.handleChange}
                        />

                        <div className='invalid-feedback' >
                            {formik.errors.password}
                        </div>
                    </div>

                    <button type="submit" className='btn btn-success block mt-2' value={'login'}>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

