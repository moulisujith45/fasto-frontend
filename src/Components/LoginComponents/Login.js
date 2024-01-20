// import *as yup from 'yup'
// import { useFormik } from 'formik'
// import { useNavigate } from 'react-router-dom'
// import axios from './config/axios'
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './login.css'
// const loginValidationSchema = yup.object({
//     mobile: yup.string().required("mobile number is required").min(10).max(10),
//     password: yup.string().required("password is required").min(8).max(128)
// })

// export default function Login(props) {
//     const navigate = useNavigate()
//     const { handleLogin, loginToast } = props
//     const formik = useFormik({
//         initialValues: {
//             mobile: '',
//             password: ''
//         },
//         validationSchema: loginValidationSchema,
//          validateOnChange: false,
//         onSubmit: async (values) => {
//             try {
//                 const formData = { mobile: Number(values.mobile), password: values.password }
//                 console.log(formData)
//                 const response = await axios.post('/api/users/login', formData)
//                 console.log(response.data)
//                 localStorage.setItem('token', response.data.token)
//                 handleLogin()
//                 loginToast()
//                 navigate('/')
//             } catch (e) {
//                 console.log(e)
//             }
//         }
//     })
//     return (
//         <div className="wrapper d-flex bg-light align-items-center justify-content-center w-100" >
//             <div className='login rounded'>
//                 <h2 className='mb-3'>Login</h2>
//                 <form className='form-validation' onSubmit={formik.handleSubmit}>
//                     <div className='form-group mb-2'>
//                         <label htmlFor='mobile number' className='form-label'>Mobile Number</label>
//                         <input type="text"
//                             className={form-control ${formik.touched.mobile && formik.errors.mobile ? 'is-invalid' : ''}} 
//                             //className='form-control' 
//                             value={formik.values.mobile}
//                             name="mobile"
//                             onChange={formik.handleChange} /><br />
                        
//                         <div className='invalid-feedback'>
//                         {formik.errors.mobile}
//                         </div>


//                         <br />
//                     </div>
//                     <div className='form-group mb-2'>
//                         <label htmlFor='password' className='form-label'>Password</label><br />
//                         <input type="password"
//                             className={form-control ${formik.touched.password && formik.errors.password ? 'is-invalid' : ''}} 
//                            // className='form-control'
//                             value={formik.values.password}
//                             name="password"
//                             onChange={formik.handleChange} />
                        
//                         <div className='invalid-feedback'>
//                         {formik.errors.password}
//                         </div>
//                     </div>

//                     <button type="submit" className='btn btn-success block mt-2' value={'login'} >
//                         Login
//                     </button>

//                 </form>
//             </div>
//         </div>
//     )
// }


import * as yup from 'yup'
import { useFormik } from 'formik'
import { useNavigate } from 'react-router-dom'
// import 'bootstrap/dist/css/bootstrap.min.css';
import axios from '../../config/axios'

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
                    <div>
                        <label className='form-group mb-2'>Email</label>
                        <input 
                        type='text'
                        value={formik.values.email}
                        name = "email"
                        onChange={formik.handleChange}
                        /> <br />

                        <div>
                            {formik.errors.email}
                        </div>

                        <br />
                    </div>

                    <div>
                        <label>Password</label><br />
                        <input 
                        type='password'
                        value={formik.values.password}
                        name='password'
                        onChange={formik.handleChange}
                        />

                        <div>
                            {formik.errors.password}
                        </div>
                    </div>

                    <button>
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

