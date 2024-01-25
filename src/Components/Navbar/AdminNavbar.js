import { jwtDecode } from 'jwt-decode';
import {useState,useEffect} from 'react';
import { Link , useNavigate } from 'react-router-dom';
import fastologo from '../images/fastologo.jpg'
// import Context from '../../ContextApi/Context';
const AdminNavbar = () => {
    const navigate = useNavigate();
    const token = localStorage.getItem("token");
    const initialRole = token ? jwtDecode(token).role : "";
    const [role, setRole] = useState(initialRole);
    const [isLoggedIn,SetIsLoggedIn] = useState(false)
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
    alert("logout successfully")
    navigate('/')
    // Handle logout logic
  };
  
  return (
  
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        {/* <Link to="/admin" className="navbar-brand">Admin Dashboard</Link> */}
        <nav className="navbar bg-body-tertiary">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={fastologo} alt='logo'  width="50" height="50" />
          </Link>
        </div>
        </nav>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
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
             {setRole === 'Admin' ? (
               
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
             {setRole === 'customer' ? (
              <div className="ml-auto" id="navbarsupportedcontent">
               <ul className="navbar-nav ">
               <li className="nav-iteam">
                 <Link className="nav-link active" to="/orders">Orders</Link>
               </li>
               <li className="nav-iteam">
                 <Link className="nav-link active" to="customerprofile">Profile</Link>
               </li>
               <li className="nav-iteam">
                 <Link className="nav-link active" to="mycart">Cart</Link>
               </li>
               </ul>
              </div>
             ):null}
           {SetIsLoggedIn === true ? 
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