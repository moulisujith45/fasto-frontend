import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, Card, Button, Form ,Table} from "react-bootstrap";
const UserProfile = () => {
    const [key, setKey] = useState("account");
   const [user,setUser] = useState({})
   const [orders,setOrders] = useState([])
    const [password, setPassword] = useState({
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
        errors: {}
    });
    useEffect(() => {
        //get user data from the server and update user data
        const getUserData = async () => {
            try{
                const UserResponse = await axios.get('/api/user/getSingleProfile', {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                });
                setUser(UserResponse.data)
                console.log("User data from server:", UserResponse.data)

                const OrdersResponse = await axios.get('/api/user/userOrder',{
                    headers : {
                        Authorization : localStorage.getItem('token')
                    }
                })
                // setOrders(OrdersResponse.data)
                setOrders(Object.values(OrdersResponse.data))
                console.log("orders:",Object.values(OrdersResponse.data))
                
            }catch(error){
                console.log(error)
            }
        }
        getUserData()
    },[])
    const runValidators = () => {
        const { currentPassword, newPassword, confirmPassword } = password;
        const errors = {};
        if (currentPassword.trim().length < 7 || currentPassword.trim().length > 128) {
            errors.currentPassword = "Password should be between 8 to 128 characters";
        }
        if (newPassword.trim().length < 8 || newPassword.trim().length > 128) {
            errors.newPassword = "Password should be between 8 to 128 characters";
        }
        if (confirmPassword.trim().length < 8 || confirmPassword.trim().length > 128) {
            errors.confirmPassword = "Password should be between 8 to 128 characters";
        }
        if (newPassword !== confirmPassword) {
            errors.match = "Current password and new password do not match";
        }
        setPassword({ ...password, errors });
        return errors;
    };
    const handleChange = (e) => {
        const { name, value } = e.target;
        setPassword({ ...password, [name]: value });
    };
    const resetPassWordForm = () => {
        setPassword({
            currentPassword : '',
            newPassword: '',
            confirmPassword: '',
            errors: {}
        })
    }
    const handlePasswordSubmit = async (e) => {
        e.preventDefault();
        const errors = runValidators();
        if (Object.keys(errors).length === 0) {
            try {
                const response = await axios.put('api/user/profile/editProfile', password, {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                });
                console.log(response);
                resetPassWordForm()
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <div className="form-label"  style={{with:"500px",marginLeft :"250px",marginRight:"250px"}} >
           <Tabs
            id="controlled-tab"
            activeKey={key}
            onSelect={(k) => setKey(k) }
            className="mb-3"
            > 
            <Tab eventKey="account" title="Account">
               <Card>
                   <Card.Header>Account</Card.Header>
                   <Card.Body>
                       <Form>
                           <Form.Group className="mb-3">
                               <Form.Label>Username</Form.Label>
                               <Form.Control type="text" class="form-label" placeholder={user.username} disabled required />
                           </Form.Group>
                           <Form.Group className="mb-3">
                               <Form.Label>Email</Form.Label>
                               <Form.Control type="text" class="form-label" placeholder={user.email} disabled required />
                           </Form.Group>
                       </Form>
                   </Card.Body>
               </Card>
            </Tab>
            <Tab eventKey="password" title="Password">
               <Card>
                   <Card.Body>
                       <Form>
                           <Form.Group className="mb-3">
                               <Form.Label>Current password</Form.Label>
                               <Form.Control type="password" placeholder="Enter Old Password" 
                               name="currentPassword" class="form-label" value={password.currentPassword}
                               onChange={handleChange} required /> 
                               {password.errors.currentPassword &&
                               <div>{password.errors.currentPassword}</div>}
                               <Form.Label>New Password</Form.Label>
                               <Form.Control type="password" placeholder="Enter New Password"
                               name="newPassword" class="form-label" value={password.newPassword}
                               onChange={handleChange} required />
                               {password.errors.newPassword && 
                               <div>{password.errors.newPassword}</div>}
                               <Form.Label>Confirm Password</Form.Label>
                               <Form.Control type="password" class="form-label" placeholder="Enter Confirm Password"
                               name="confirmPassword"  value={password.confirmPassword}
                               onChange={handleChange} required />
                               {password.errors.confirmPassword && 
                               <div>{password.errors.confirmPassword}</div>}
                           </Form.Group>
                           <Button variant="primary" onClick={handlePasswordSubmit}>Save Password</Button>
                       </Form>
                   </Card.Body>
               </Card>
            </Tab>
            {/* <Tab eventKey="allorders" title="AllOrders">
                <Card>
                    <Card.Body>
                       
                    </Card.Body>
                </Card>
            </Tab> */}
             <Tab eventKey="allorders" title="AllOrders">
                    <Card>
                        <Card.Body>
                            <Table striped bordered hover>
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>Total</th>
                                        <th>Status</th>
                                        <th>Payment Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {orders.map((order, index) => (
                                        <tr key={order._id}>
                                            <td>{index + 1}</td>
                                            <td>{order.total}</td>
                                            <td>{order.status}</td>
                                            <td>{order.paymentStatus ? 'Paid' : 'Pending'}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </Table>
                        </Card.Body>
                    </Card>
                </Tab>
           </Tabs>
       </div>

    );
};
export default UserProfile;

