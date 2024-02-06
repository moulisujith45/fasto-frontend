import React, { useState } from "react";
import { useDispatch ,useSelector} from "react-redux";
import { startAddAddress,startEditAddress } from "../../actions/addressAction";
import { Form, Button } from "react-bootstrap";
import {useNavigate} from "react-router-dom";


export default function AddAddress() {

  const dispatch = useDispatch();
  const addressDetails = useSelector((state) => {
    return state.address;
  });
  console.log(addressDetails,"its kasta")
  const navigate = useNavigate()

  const [addressData, setAddressData] = useState({
    building: addressDetails && addressDetails.building ? addressDetails.building : "",
    locality: addressDetails && addressDetails.locality ? addressDetails.locality :"",
    city: addressDetails && addressDetails.city ? addressDetails.city :"",
    state: addressDetails && addressDetails.state ? addressDetails.state :"",
    pincode:addressDetails && addressDetails.pincode ? addressDetails.pincode : "",
    country: addressDetails && addressDetails.country ? addressDetails.country :"",
  });

  const handleInputChange = (e) => {
    setAddressData({
      ...addressData,
      [e.target.name]: e.target.value,
    });
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   if(Object.keys(addressDetails).length >= 0){
  //     dispatch(startEditAddress(addressDetails._id,addressData))
  //   } else {
  //   dispatch(startAddAddress(addressData));
  //   }
  // };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (addressDetails._id) {
      dispatch(startEditAddress(addressDetails._id, addressData));
    } else {
      dispatch(startAddAddress(addressData));
    }
  };

  return (
    <div>
      <h2>Address</h2>
      <Form onSubmit={handleSubmit} style={{width:"500px",marginLeft : "300px"}}>
        <Form.Group controlId="formBuilding">
          <Form.Label>Building:</Form.Label>
          <Form.Control
            type="text"
            name="building"
            value={addressData.building}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formLocality">
          <Form.Label>Locality:</Form.Label>
          <Form.Control
            type="text"
            name="locality"
            value={addressData.locality}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formCity">
          <Form.Label>City:</Form.Label>
          <Form.Control
            type="text"
            name="city"
            value={addressData.city}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formState">
          <Form.Label>State:</Form.Label>
          <Form.Control
            type="text"
            name="state"
            value={addressData.state}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formPincode">
          <Form.Label>Pincode:</Form.Label>
          <Form.Control
            type="text"
            name="pincode"
            value={addressData.pincode}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Form.Group controlId="formCountry">
          <Form.Label>Country:</Form.Label>
          <Form.Control
            type="text"
            name="country"
            value={addressData.country}
            onChange={handleInputChange}
          />
        </Form.Group>

        <Button variant="primary" type="submit" >
          Confirm Address
        </Button>
      </Form>
    </div>
  );
}

// import React, { useState, useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { startAddAddress } from "../../actions/addressAction";
// import { Form, Button } from "react-bootstrap";

// const AddAddress = ({ prefillData }) => {
//   const dispatch = useDispatch();

//   const [addressData, setAddressData] = useState({
//     building: "",
//     locality: "",
//     city: "",
//     state: "",
//     pincode: "",
//     country: "",
//   });

//   useEffect(() => {
//     // Set the state with pre-filled data when it's provided
//     if (prefillData) {
//       setAddressData(prefillData);
//     }
//   }, [prefillData]);

//   const handleInputChange = (e) => {
//     setAddressData({
//       ...addressData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     dispatch(startAddAddress(addressData));
//   };

//   return (
//     <div>
//       <h2>{prefillData ? "Edit Address" : "Add Address"}</h2>
//       <Form onSubmit={handleSubmit} style={{ width: "500px", marginLeft: "300px" }}>
//         {/* ... Form fields (same as before) ... */}
//         <Form.Group controlId="formBuilding">
//           <Form.Label>Building:</Form.Label>
//           <Form.Control
//             type="text"
//             name="building"
//             value={addressData.building}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formLocality">
//           <Form.Label>Locality:</Form.Label>
//           <Form.Control
//             type="text"
//             name="locality"
//             value={addressData.locality}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formCity">
//           <Form.Label>City:</Form.Label>
//           <Form.Control
//             type="text"
//             name="city"
//             value={addressData.city}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formState">
//           <Form.Label>State:</Form.Label>
//           <Form.Control
//             type="text"
//             name="state"
//             value={addressData.state}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formPincode">
//           <Form.Label>Pincode:</Form.Label>
//           <Form.Control
//             type="text"
//             name="pincode"
//             value={addressData.pincode}
//             onChange={handleInputChange}
//           />
//         </Form.Group>

//         <Form.Group controlId="formCountry">
//           <Form.Label>Country:</Form.Label>
//           <Form.Control
//             type="text"
//             name="country"
//             value={addressData.country}
//             onChange={handleInputChange}
//           />
//         </Form.Group>
//         <Button variant="primary" type="submit">
//           {prefillData ? "Update Address" : "Confirm Address"}
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default AddAddress;

