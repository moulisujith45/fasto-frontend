import { jwtDecode } from 'jwt-decode';
import {useState,useEffect} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import fastologo from '../images/fastologo.jpg'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Modal, Button } from 'react-bootstrap'
import { useSelector } from 'react-redux';
const AdminNavbar = () => {
  const cartItems = useSelector(state => state.cart)
  console.log(cartItems,'cartItems')
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const initialRole = token ? jwtDecode(token).role : "";
    const [role, setRole] = useState(initialRole);
    const [isLoggedIn,SetIsLoggedIn] = useState(false)
  // for logout
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    useEffect(() => {
      if (token) {
        try {
          const { role } = jwtDecode(token);
          console.log(role);
          if (role === "Admin") {
            setRole(role);
            SetIsLoggedIn(true)
          }else if(role === 'customer'){
            setRole(role)
            SetIsLoggedIn(true)
          }else if(role === 'DeliveryMan'){
            setRole(role)
            SetIsLoggedIn(true)
          }
        } catch (e) {
          console.log("Invalid or expired token");
        }
      }
    }, [token]); // Update the dependency array

  const handleLogout = () => {
    setRole("")
    SetIsLoggedIn(false)
    localStorage.removeItem("token")
    
    navigate('/')
    // Handle logout logic
   
  };
  console.log("role1",role)
  return (
  
    <nav className="navbar navbar-expand-lg  d-flex flex-row flex-wrap navbar-light bg-light" style={{maxWidth:'100%',maxHeight:'120px',height:'90px'}}>
      <div className="container-fluid">
        {/* <Link to="/admin" className="navbar-brand">Admin Dashboard</Link> */}
        <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={fastologo} alt='logo'  width="50" height="50" />
          </Link>
        </div>
        </nav>
        {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button> */}
        <div className="collapse navbar-collapse" id="navbarsupportedcontent">
          <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
           {!token && <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>}
            {!token && <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to= "/login">Login</Link>
            </li>}
            {!token && <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to='/register'>Register</Link>
            </li>}
            {/* <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/register">Add DeliveryMan</Link>   
            </li>
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/categories">Add Categories</Link>
            </li> */}
             {role === 'Admin' ? (
               
               <div className="collapse navbar-collapse" id="navbarsupportedcontent">
              <ul className="navbar-nav ml-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link active" to="/register">Add DeliveryMan</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/addcategories">Add Categories</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/admin">Admin Dashboard</Link>
              </li>
              <li className="nav-iteam">
                <Link className="nav-link active" to="/addproducts">Add Product</Link>
              </li>
              </ul>
            </div>
             ):null}
          </ul>
          <div>
          <form className="d-flex" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button className="btn btn-outline-success" type="submit">Search</button>
          </form>
        </div>
        </div>
             {role === 'customer' ? (
              <div className="ml-auto" id="navbarsupportedcontent">
               <ul className="navbar-nav ">
               <li className="nav-iteam">
                 <Link className="nav-link active" to="/orders">Orders</Link>
               </li>
               <li className="nav-iteam">
                 <Link className="nav-link active" to="customerprofile">Profile</Link>
               </li>
               <li className="nav-iteam">
               <Link className="nav-link active" to="cart">Cart <small>({cartItems.data.length})</small></Link>
               </li>
               </ul>
              </div>
             ):null}
           {isLoggedIn === true ? 
          <div className="ml-auto">
           <ul className="navbar-nav">
           <li className="nav-item">
           <button className="btn btn-danger" type="button" onClick={handleLogout}>Logout</button>
           </li>
           </ul>
         </div>
        
           : null}
      </div>
    </nav>
  );
};

export default AdminNavbar;
