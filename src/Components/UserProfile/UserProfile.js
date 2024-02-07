import axios from "../../config/axios";
import { useEffect, useState } from "react";
import { Tab, Tabs, Card, Button, Form } from "react-bootstrap";

const UserProfile = () => {
    const [key, setKey] = useState("account");
   const [user,setUser] = useState({})
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
                const response = await axios.get('/api/user/getSingleProfile', {
                    headers: {
                        Authorization: localStorage.getItem('token')
                    }
                });
                console.log("User data from server:", response.data)
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

    const handleProfileSubmit = async (e) => {
        e.preventDefault();
        // Handle profile update form submission logic here
    };

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
            } catch (error) {
                console.log(error);
            }
        }
    };

    return (
    //     <div className="pe-lg-14"  style={{width:"500px" ,marginLeft:"400px"}}> {/* Wrapping the Tabs component in the desired style */}
    //   <Tabs
    //     id="controlled-tab-example"
    //     activeKey={key}
    //     onSelect={(k) => setKey(k)}
    //     className="mb-3"
    //   >
    //     <Tab eventKey="account" title="Account">
    //       <Card>
    //         <Card.Header>Account</Card.Header>
    //         <Card.Body>
    //           <Form>
    //             <Form.Group className="mb-3">
    //               <Form.Label>Name</Form.Label>
    //               <Form.Control type="text"  />
    //             </Form.Group>
    //             <Form.Group className="mb-3">
    //               <Form.Label>Username</Form.Label>
    //               <Form.Control type="text"  />
    //             </Form.Group>
    //           </Form>
    //         </Card.Body>
    //       </Card>
    //     </Tab>
    //     <Tab eventKey="password" title="Password">
    //       <Card>
    //         <Card.Header>Password</Card.Header>
    //         <Card.Body>
    //           <Form>
    //             <Form.Group className="mb-3">
    //               <Form.Label>Current password</Form.Label>
    //               <Form.Control type="password" />
    //             </Form.Group>
    //             <Form.Group className="mb-3">
    //               <Form.Label>New password</Form.Label>
    //               <Form.Control type="password" />
    //             </Form.Group>
    //             <Form.Group className="mb-3">
    //               <Form.Label>Confirm password</Form.Label>
    //               <Form.Control type="password" />
    //             </Form.Group>
    //             <Button variant="primary" onClick={handlePasswordSubmit} >Save password</Button>
    //           </Form>
    //         </Card.Body>
    //       </Card>
    //     </Tab>
    //   </Tabs>
    // </div>
    <div className="pe-lg-14">
            <div>
                <h5 className="mb-4">Update Profile</h5>
                <form className="row row-cols-1 row-cols-lg-2 needs-validation" noValidate onSubmit={handleProfileSubmit}>
                    <div className="mb-3 col">
                        <label className="form-label">Username</label>
                        <input type="text" className="form-control" value={user.username} disabled required />
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Email</label>
                        <input type="text" className="form-control" placeholder={user.email} disabled required />
                    </div>
                </form>
            </div>
            <div className="pe-lg-14">
                <h5 className="mb-6">Change Password</h5>
                <form className="row row-cols-1 row-cols-lg-2 needs-validation" noValidate onSubmit={handlePasswordSubmit}>
                    <div className="mb-3 col">
                        <label className="form-label">Current Password</label>
                        <input type="password" className="form-control" placeholder="Enter Old Password" name="currentPassword" value={password.currentPassword} onChange={handleChange} required />
                        {password.errors.currentPassword && <div>{password.errors.currentPassword}</div>}
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">New Password</label>
                        <input type="password" className="form-control" placeholder="Enter New Password" name="newPassword" value={password.newPassword} onChange={handleChange} required />
                        {password.errors.newPassword && <div>{password.errors.newPassword}</div>}
                    </div>
                    <div className="mb-3 col">
                        <label className="form-label">Confirm Password</label>
                        <input type="password" className="form-control" placeholder="Confirm password" name="confirmPassword" value={password.confirmPassword} onChange={handleChange} required />
                        {password.errors.confirmPassword && <div>{password.errors.confirmPassword}</div>}
                        {password.errors.match && <div>{password.errors.match}</div>}
                    </div>
                    <div className="col-12">
                        <p className="mb-4">
                            Can’t remember your current password? <a href="#">Reset your password.</a>
                        </p>
                        <button className="btn btn-primary" type="submit">Save Password</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default UserProfile;
